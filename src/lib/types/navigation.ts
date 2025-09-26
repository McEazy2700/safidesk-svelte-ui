import type { Pathname } from "$app/types";
import type { SvgProps } from "./svg";
import type { Component } from "svelte";

export type NavItem = {
  label: string;
  href: Pathname;
  disabled?: boolean;
  icon: Component<SvgProps>;
};

export type NavGroup = {
  icon: Component<SvgProps>;
  label: string;
  navs: NavItem[];
};
