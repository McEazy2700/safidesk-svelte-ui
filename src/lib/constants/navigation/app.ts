import type { NavGroup, NavItem } from "$lib/types/navigation";
import BxsDashboard from "$lib/components/icons/bxs-dashboard.svelte";
import Package2Outline from "$lib/components/icons/package-2-outline.svelte";
import HeadsetSolid from "$lib/components/icons/headset-solid.svelte";
import TaskListSquare24Regular from "$lib/components/icons/task-list-square-24-regular.svelte";
import ContractLine from "$lib/components/icons/contract-line.svelte";
import CRMService from "$lib/components/icons/crm-service.svelte";
import Cog from "$lib/components/icons/cog.svelte";
import Calendar from "$lib/components/icons/calendar.svelte";
import ChartPie from "$lib/components/icons/chart-pie.svelte";
import LucideWallet from "$lib/components/icons/lucide-wallet.svelte";
import CodiconKey from "$lib/components/icons/codicon-key.svelte";
import SolarCalculatorOutline from "$lib/components/icons/solar-calculator-outline.svelte";
import WheelBarrowEmpty from "$lib/components/icons/wheel-barrow-empty.svelte";
import ContactCardRegular from "$lib/components/icons/contact-card-regular.svelte";
import ContractOutlineRounded from "$lib/components/icons/contract-outline-rounded.svelte";
import SolarDocumentsOutline from "$lib/components/icons/solar-documents-outline.svelte";
import UilPhone from "$lib/components/icons/uil-phone.svelte";
import FluentCertificateRegular from "$lib/components/icons/fluent-certificate-regular.svelte";
import BuildingFour from "$lib/components/icons/building-four.svelte";
import CarbonAssemblyCluster from "$lib/components/icons/carbon-assembly-cluster.svelte";
import StreamlinePlumpWeb from "$lib/components/icons/streamline-plump-web.svelte";
import PhDevices from "$lib/components/icons/ph-devices.svelte";
import StreamlinePlumpDatabase from "$lib/components/icons/streamline-plump-database.svelte";
import IconoirTools from "$lib/components/icons/iconoir-tools.svelte";
import TablerTemplate from "$lib/components/icons/tabler-template.svelte";
import PhNotification from "$lib/components/icons/ph-notification.svelte";
import MeteorIconsRss from "$lib/components/icons/meteor-icons-rss.svelte";
import HugeiconsKnowledge from "$lib/components/icons/hugeicons-knowledge.svelte";
import AkarIconsSchedule from "$lib/components/icons/akar-icons-schedule.svelte";
import TablerReport from "$lib/components/icons/tabler-report.svelte";
import FamiconsBookmarksOutline from "$lib/components/icons/famicons-bookmarks-outline.svelte";
import TablerShieldCheck from "$lib/components/icons/tabler-shield-check.svelte";
import TablerUser from "$lib/components/icons/tabler-user.svelte";
import DeviceImacPlus from "$lib/components/icons/device-imac-plus.svelte";
import type { UserResponseData } from "$lib/types/api/auth";
import { getUserType } from "$lib/utils/users";

export const APP_NAVIGATION: (NavGroup | NavItem)[] = [
	{
		type: "item",
		label: "Dashboard",
		href: "/app",
		disabled: false,
		icon: BxsDashboard,
	},
	{
		icon: Package2Outline,
		type: "group",
		label: "Assets",
		baseRoute: "/app/assets",
		navs: [
			{
				type: "item",
				label: "Dashboard",
				href: "/app/assets",
				disabled: false,
				icon: BxsDashboard,
			},
			{
				type: "item",
				label: "Create",
				href: "/app/assets/new",
				disabled: false,
				icon: DeviceImacPlus,
			},
			{
				type: "item",
				label: "Manage",
				href: "/app/assets/list",
				disabled: false,
				icon: PhDevices,
			},
		],
	},
	{
		type: "group",
		icon: HeadsetSolid,
		label: "Assistance",
		baseRoute: "/app/assistance",
		navs: [
			{
				type: "item",
				label: "Tickets",
				href: "/app/assistance/tickets",
				disabled: false,
				icon: TaskListSquare24Regular,
			},
			{
				type: "item",
				label: "Services",
				href: "/app/assistance/service-requests",
				disabled: false,
				icon: CRMService,
			},
			{
				type: "item",
				label: "Planning",
				href: "/app/assistance/planning",
				disabled: true,
				icon: Calendar,
			},
			{
				type: "item",
				label: "Statistics",
				href: "/app/assistance/statistics",
				disabled: true,
				icon: ChartPie,
			},
		],
	},
	{
		type: "group",
		icon: Cog,
		label: "Settings",
		baseRoute: "/app/settings",
		navs: [
			{
				type: "item",
				label: "Agreements",
				href: "/app/settings/agreements",
				disabled: false,
				icon: ContractLine,
			},
		]
	},
	// {
	// 	type: "group",
	// 	icon: LucideWallet,
	// 	label: "Management",
	// 	baseRoute: "/app/management",
	// 	navs: [
	// 		{
	// 			type: "item",
	// 			label: "Licences",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: CodiconKey,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Budgets",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: SolarCalculatorOutline,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Suppliers",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: WheelBarrowEmpty,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Contacts",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: ContactCardRegular,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Contracts",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: ContractOutlineRounded,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Documents",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: SolarDocumentsOutline,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Lines",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: UilPhone,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Certificates",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: FluentCertificateRegular,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Datacenters",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: BuildingFour,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Clusters",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: CarbonAssemblyCluster,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Domains",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: StreamlinePlumpWeb,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Appliances",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: PhDevices,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Databases",
	// 			href: "/app/management",
	// 			disabled: true,
	// 			icon: StreamlinePlumpDatabase,
	// 		},
	// 	],
	// },
	// {
	// 	type: "group",
	// 	icon: IconoirTools,
	// 	label: "Tools",
	// 	baseRoute: "/app/management",
	// 	navs: [
	// 		{
	// 			type: "item",
	// 			label: "Project",
	// 			href: "/app/tools",
	// 			disabled: true,
	// 			icon: TablerTemplate,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Reminders",
	// 			href: "/app/tools",
	// 			disabled: true,
	// 			icon: PhNotification,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "RSS Feed",
	// 			href: "/app/tools",
	// 			disabled: true,
	// 			icon: MeteorIconsRss,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Knowledge Base",
	// 			href: "/app/tools",
	// 			disabled: true,
	// 			icon: HugeiconsKnowledge,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Reservations",
	// 			href: "/app/tools",
	// 			disabled: true,
	// 			icon: AkarIconsSchedule,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Reports",
	// 			href: "/app/tools",
	// 			disabled: true,
	// 			icon: TablerReport,
	// 		},
	// 		{
	// 			type: "item",
	// 			label: "Saved Searches",
	// 			href: "/app/tools",
	// 			disabled: true,
	// 			icon: FamiconsBookmarksOutline,
	// 		},
	// 	],
	// },
	// {
	// 	type: "group",
	// 	icon: TablerShieldCheck,
	// 	label: "Administration",
	// 	baseRoute: "/app/administration",
	// 	navs: [
	// 		{
	// 			type: "item",
	// 			label: "Users",
	// 			href: "/app/administration",
	// 			disabled: true,
	// 			icon: TablerUser,
	// 		},
	// 	],
	// },
];

export function getUserNaviation(user: UserResponseData) {
	const userType = getUserType(user);
	if (userType === "user") {
		return APP_NAVIGATION.filter((nav) =>
			["Assistance", "Dashboard"].includes(nav.label),
		);
	}
	return APP_NAVIGATION;
}
