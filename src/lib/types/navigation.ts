import type { Pathname } from "$app/types";
import type { SvgProps } from "./svg";
import type { Component } from "svelte";

export type NavItem = {
	type: "item",
	label: string;
	href: Pathname;
	disabled?: boolean;
	icon: Component<SvgProps>;
};

export type NavGroup = {
	type: "group",
	icon: Component<SvgProps>;
	label: string;
	baseRoute: Pathname;
	navs: NavItem[];
};
