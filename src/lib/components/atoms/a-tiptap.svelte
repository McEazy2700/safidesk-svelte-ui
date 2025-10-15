<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import '$lib/styles/tiptap.css';
	import { Editor } from '@tiptap/core';
	import type { NodeType } from '@tiptap/core';
	import type { DocumentType } from '@tiptap/core';
	import type { TextType } from '@tiptap/core';
	import OcticonBold24 from '../icons/octicon-bold-24.svelte';
	import OcticonItalic24 from '../icons/octicon-italic-24.svelte';
	import HumbleiconsUnderline from '../icons/humbleicons-underline.svelte';
	import TextStrikethrough24Filled from '../icons/text-strikethrough-24-filled.svelte';
	import OcticonListUnordered24 from '../icons/octicon-list-unordered-24.svelte';
	import OcticonListOrdered24 from '../icons/octicon-list-ordered-24.svelte';
	import BlockquoteLine from '../icons/blockquote-line.svelte';
	import CodeLine from '../icons/code-line.svelte';
	import LucideLink from '../icons/lucide-link.svelte';
	import LucideUnlink from '../icons/lucide-unlink.svelte';
	import MageImageUpload from '../icons/mage-image-upload.svelte';
	import HugeiconsFileLink from '../icons/hugeicons-file-link.svelte';
	import MynauiAlignLeft from '../icons/mynaui-align-left.svelte';
	import MynauiAlignCenter from '../icons/mynaui-align-center.svelte';
	import MynauiAlignRight from '../icons/mynaui-align-right.svelte';
	import MynauiTextJustify from '../icons/mynaui-text-justify.svelte';
	import MynauiUndoSolid from '../icons/mynaui-undo-solid.svelte';
	import MynauiRedoSolid from '../icons/mynaui-redo-solid.svelte';
	import EraserRemix from '../icons/eraser-remix.svelte';
	import CarbonRuleDraft from '../icons/carbon-rule-draft.svelte';
	import MingcuteFullscreen2Fill from '../icons/mingcute-fullscreen-2-fill.svelte';
	import MingcuteFullscreen2Exit from '../icons/mingcute-fullscreen-2-exit.svelte';
	import LucideHeading1 from '../icons/lucide-heading-1.svelte';
	import LucideHeading2 from '../icons/lucide-heading-2.svelte';
	import MajesticonsParagraphLine from '../icons/majesticons-paragraph-line.svelte';
	import LucideSend from '../icons/lucide-send.svelte';

	type JSONData = DocumentType<
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		Record<string, any> | undefined,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		NodeType<string, undefined | Record<string, any>, any, (NodeType | TextType)[]>[]
	>;
	type Level = 1 | 2 | 3 | 4 | 5 | 6;
	type EditorData = {
		html: string;
		json: JSONData;
		text: string;
		wordCount: number;
		charCount: number;
	};

	type Props = {
		content?: string;
		editable?: boolean;
		autosaveKey?: string | null;
		placeholder?: string;
		loading?: boolean;
		exportDisabled?: boolean;
		onupdate?: (data: EditorData) => void;
		onautosave?: (args: { key: string }) => void;
		onloadAutosave?: (args: { key: string }) => void;
		onexport?: (args: { json: object; html: string }) => void;
	};

	let element = $state<HTMLDivElement | null>();
	let editor = $state<Editor | null>(null);
	let editorState = $state<{ editor: Editor | null }>({ editor: null });

	let wordCount = $state(0);
	let charCount = $state(0);
	let isFullscreen = $state(false);

	let {
		content = $bindable(),
		editable = true,
		loading,
		exportDisabled,
		onupdate,
		onautosave,
		onloadAutosave,
		onexport,
		placeholder = 'Start writing — notes, draft…',
		autosaveKey = 'tiptap-draft'
	}: Props = $props();

	let lastSetContent = '';
	let autosaveTimeout: ReturnType<typeof setTimeout> | null = null;
	const autosaveDelay = 800;

	onMount(async () => {
		const StarterKit = (await import('@tiptap/starter-kit')).default;
		const Underline = (await import('@tiptap/extension-underline')).default;
		const Link = (await import('@tiptap/extension-link')).default;
		const Image = (await import('@tiptap/extension-image')).default;
		const Placeholder = (await import('@tiptap/extension-placeholder')).default;
		const TextAlign = (await import('@tiptap/extension-text-align')).default;

		editor = new Editor({
			element: element!,
			editable,
			extensions: [
				StarterKit,
				Underline,
				Link.configure({ openOnClick: false, autolink: true, linkOnPaste: true }),
				Image,
				Placeholder.configure({ placeholder: 'Start writing — notes, draft…' }),
				TextAlign.configure({ types: ['heading', 'paragraph'] })
			],
			content,
			onCreate: ({ editor: ed }) => {
				editorState = { editor: ed };
				updateCounts(ed);
			},
			onUpdate: ({ editor: ed }) => {
				editorState = { editor: ed };
				updateCounts(ed);
				lastSetContent = ed.getHTML();
				onupdate?.({
					html: ed.getHTML(),
					json: ed.getJSON(),
					text: ed.getText(),
					wordCount,
					charCount
				});
				// autosave
				if (autosaveKey) {
					if (autosaveTimeout) clearTimeout(autosaveTimeout);
					autosaveTimeout = setTimeout(() => {
						localStorage.setItem(autosaveKey!, ed.getHTML());
						onautosave?.({ key: autosaveKey });
					}, autosaveDelay);
				}
			}
		});
	});

	onDestroy(() => {
		editor?.destroy?.();
		editor = null;
		editorState = { editor: null };
		if (autosaveTimeout) clearTimeout(autosaveTimeout);
	});

	function updateCounts(ed?: Editor) {
		const e = ed ?? editor;
		if (!e) return;
		const txt = e.getText() ?? '';
		charCount = txt.length;
		wordCount = txt.trim() ? txt.trim().split(/\s+/).filter(Boolean).length : 0;
	}

	$effect(() => {
		if (editor && typeof content === 'string' && content !== lastSetContent) {
			editor.commands.setContent(content);
			lastSetContent = content;
		}
	});

	// ---------- toolbar actions ----------
	function toggleHeading(level: Level = 1) {
		editor?.chain().focus().toggleHeading({ level }).run();
	}
	function setParagraph() {
		editor?.chain().focus().setParagraph().run();
	}
	function toggleBold() {
		editor?.chain().focus().toggleBold().run();
	}
	function toggleItalic() {
		editor?.chain().focus().toggleItalic().run();
	}
	function toggleUnderline() {
		editor?.chain().focus().toggleUnderline().run();
	}
	function toggleStrike() {
		editor?.chain().focus().toggleStrike().run();
	}
	function toggleBulletList() {
		editor?.chain().focus().toggleBulletList().run();
	}
	function toggleOrderedList() {
		editor?.chain().focus().toggleOrderedList().run();
	}
	function toggleBlockquote() {
		editor?.chain().focus().toggleBlockquote().run();
	}
	function toggleCodeBlock() {
		editor?.chain().focus().toggleCodeBlock().run();
	}
	function undo() {
		editor?.chain().focus().undo().run();
	}
	function redo() {
		editor?.chain().focus().redo().run();
	}
	function clearFormatting() {
		editor?.chain().focus().unsetAllMarks().setParagraph().run();
	}

	// link helpers
	function setLink() {
		if (!editor) return;
		const previous = editor.getAttributes('link')?.href ?? '';
		const url = window.prompt('Enter URL (leave empty to remove link):', previous);
		if (url === null) return;
		if (url.trim() === '') {
			editor.chain().focus().unsetLink().run();
		} else {
			editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
		}
	}
	function unsetLink() {
		editor?.chain().focus().unsetLink().run();
	}

	// images
	function handleImageInput(e: Event) {
		const input = e.target as HTMLInputElement;
		if (!input.files || !input.files[0]) return;
		const file = input.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			const src = reader.result as string;
			editor?.chain().focus().setImage({ src, alt: file.name }).run();
			input.value = '';
		};
		reader.readAsDataURL(file);
	}
	function insertImageFromUrl() {
		const url = window.prompt('Image URL:');
		if (url) editor?.chain().focus().setImage({ src: url }).run();
	}

	function toggleTextAlign(align: 'left' | 'center' | 'right' | 'justify') {
		editor?.chain().focus().setTextAlign(align).run();
	}

	function loadAutosave() {
		if (!autosaveKey) return;
		const saved = localStorage.getItem(autosaveKey);
		if (saved && editor) {
			editor.commands.setContent(saved);
			onloadAutosave?.({ key: autosaveKey });
		}
	}

	function exportHTML() {
		return editor?.getHTML() ?? '';
	}
	function exportJSON() {
		return editor?.getJSON() ?? {};
	}

	function isActive(name: string, attrs = {}) {
		return editorState.editor?.isActive(name, attrs) ?? false;
	}
</script>

<div
	class="tiptap-root min-h-[360px] border border-black/10 shadow-lg shadow-black/5"
	class:fullscreen={isFullscreen}
>
	<div class="tiptap-toolbar" role="toolbar" aria-label="Editor toolbar">
		<div class="flex items-center gap-2">
			<button
				type="button"
				class:active={isActive('heading', { level: 1 })}
				onclick={() => toggleHeading(1)}
				title="Heading 1"
			>
				<LucideHeading1 size={18} />
				<span class="sr-only">Heading 1</span>
			</button>
			<button
				type="button"
				class:active={isActive('heading', { level: 2 })}
				onclick={() => toggleHeading(2)}
				title="Heading 2"
			>
				<LucideHeading2 size={18} />
				<span class="sr-only">Heading 2</span>
			</button>
			<button
				type="button"
				class:active={isActive('paragraph')}
				onclick={setParagraph}
				title="Paragraph"
			>
				<MajesticonsParagraphLine size={18} />
				<span class="sr-only">Paragraph</span>
			</button>
		</div>
		<span class="sep"></span>

		<div class="flex items-center gap-2">
			<button type="button" class:active={isActive('bold')} onclick={toggleBold} title="Bold">
				<OcticonBold24 size={18} />
				<span class="sr-only">Bold</span>
			</button>
			<button type="button" class:active={isActive('italic')} onclick={toggleItalic} title="Italic">
				<OcticonItalic24 size={18} />
				<span class="sr-only">Italic</span>
			</button>
			<button
				type="button"
				class:active={isActive('underline')}
				onclick={toggleUnderline}
				title="Underline"
			>
				<HumbleiconsUnderline size={18} />
				<span class="sr-only">Underline</span>
			</button>
			<button type="button" class:active={isActive('strike')} onclick={toggleStrike} title="Strike">
				<TextStrikethrough24Filled size={18} />
				<span class="sr-only">Underline</span>
			</button>
		</div>

		<span class="sep"></span>

		<div class="flex items-center gap-2">
			<button
				type="button"
				class:active={isActive('bulletList')}
				onclick={toggleBulletList}
				title="Bullet list"
			>
				<OcticonListUnordered24 size={18} />
				<span class="sr-only">Bullet List</span>
			</button>
			<button
				type="button"
				class:active={isActive('orderedList')}
				onclick={toggleOrderedList}
				title="Numbered list"
			>
				<OcticonListOrdered24 size={18} />
				<span class="sr-only">Numbered List</span>
			</button>
			<button
				type="button"
				class:active={isActive('blockquote')}
				onclick={toggleBlockquote}
				title="Blockquote"
			>
				<BlockquoteLine size={18} />
				<span class="sr-only">Blockquote</span>
			</button>
			<button
				type="button"
				class:active={isActive('codeBlock')}
				onclick={toggleCodeBlock}
				title="Code block"
			>
				<CodeLine size={18} />
				<span class="sr-only">Code block</span>
			</button>
		</div>

		<span class="sep"></span>

		<div class="flex items-center gap-2">
			<button
				type="button"
				class:active={isActive('link')}
				onclick={setLink}
				title="Set / edit link"
			>
				<LucideLink size={18} />
				<span class="sr-only">Set / edit link</span>
			</button>
			<button type="button" onclick={unsetLink} title="Remove link">
				<LucideUnlink size={18} />
				<span class="sr-only">Remove link</span>
			</button>
		</div>

		<span class="sep"></span>

		<div class="flex items-center gap-2">
			<label class="file-btn" title="Upload image">
				<MageImageUpload size={18} />
				<span class="sr-only">Upload image</span>
				<input type="file" accept="image/*" onchange={handleImageInput} />
			</label>
			<button type="button" onclick={insertImageFromUrl} title="Insert image by URL">
				<HugeiconsFileLink size={17} />
				<span class="sr-only">Insert URL</span>
			</button>
		</div>

		<span class="sep"></span>

		<div class="flex items-center gap-2">
			<button
				type="button"
				class:active={isActive('textAlign', { align: 'left' })}
				onclick={() => toggleTextAlign('left')}
				title="Align left"
			>
				<MynauiAlignLeft size={20} />
				<span class="sr-only">Align left</span>
			</button>
			<button
				type="button"
				class:active={isActive('textAlign', { align: 'center' })}
				onclick={() => toggleTextAlign('center')}
				title="Align center"
			>
				<MynauiAlignCenter size={20} />
				<span class="sr-only">Align center</span>
			</button>
			<button
				type="button"
				class:active={isActive('textAlign', { align: 'right' })}
				onclick={() => toggleTextAlign('right')}
				title="Align right"
			>
				<MynauiAlignRight size={20} />
				<span class="sr-only">Align center</span>
			</button>
			<button
				type="button"
				class:active={isActive('textAlign', { align: 'justify' })}
				onclick={() => toggleTextAlign('justify')}
				title="Justify"
			>
				<MynauiTextJustify size={20} />
				<span class="sr-only">Justify text</span>
			</button>
		</div>

		<span class="sep"></span>

		<div class="flex items-center gap-2">
			<button type="button" onclick={undo} title="Undo">
				<MynauiUndoSolid size={20} />
				<span class="sr-only">Undo</span>
			</button>
			<button type="button" onclick={redo} title="Redo">
				<MynauiRedoSolid size={20} />
				<span class="sr-only">Redo</span>
			</button>
			<button type="button" onclick={clearFormatting} title="Clear formatting">
				<EraserRemix size={20} />
				<span class="sr-only">Clear formatting</span>
			</button>
		</div>

		<span class="toolbar-spacer"></span>

		<button type="button" onclick={loadAutosave} title="Load draft">
			<CarbonRuleDraft size={20} />
			<span class="sr-only">Load draft</span>
		</button>
		<button
			type="button"
			onclick={() => {
				isFullscreen = !isFullscreen;
			}}
			title="Toggle fullscreen"
		>
			{#if isFullscreen}
				<MingcuteFullscreen2Exit size={20} />
			{:else}
				<MingcuteFullscreen2Fill size={20} />
			{/if}
		</button>
	</div>

	<div class="tiptap-editor relative" bind:this={element}>
		{#if placeholder && wordCount === 0}
			<span class="absolute opacity-60">{placeholder}</span>
		{/if}
	</div>

	<div class="tiptap-footer">
		<div class="counts">
			<span>{wordCount} words</span>
			<span>·</span>
			<span>{charCount} chars</span>
		</div>

		<div class="exports">
			<button
				disabled={loading || exportDisabled}
				class="btn flex items-center gap-2 btn-secondary"
				onclick={() => onexport?.({ html: exportHTML(), json: exportJSON() })}
			>
				{#if loading}
					<span class="loading loading-spinner"></span>
				{:else}
					<LucideSend size={20} />
				{/if}
				<span class="text-lg font-semibold">Save</span>
			</button>
		</div>
	</div>
</div>

<style>
	.file-btn input {
		display: none;
	}
</style>
