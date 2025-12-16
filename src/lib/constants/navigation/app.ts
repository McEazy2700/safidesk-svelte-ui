import type { NavGroup, NavItem } from "$lib/types/navigation";
import BxsDashboard from "$lib/components/icons/bxs-dashboard.svelte";
import Package2Outline from "$lib/components/icons/package-2-outline.svelte";
import HeadsetSolid from "$lib/components/icons/headset-solid.svelte";
import TaskListSquare24Regular from "$lib/components/icons/task-list-square-24-regular.svelte";
import ContractOutlineRounded from "$lib/components/icons/contract-outline-rounded.svelte";
import VaadinAutomation from "$lib/components/icons/vaadin-automation.svelte";
import CRMService from "$lib/components/icons/crm-service.svelte";
import Cog from "$lib/components/icons/cog.svelte";
import Calendar from "$lib/components/icons/calendar.svelte";
import ChartPie from "$lib/components/icons/chart-pie.svelte";
import PhDevices from "$lib/components/icons/ph-devices.svelte";
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
				icon: ContractOutlineRounded,
			},
			{
				type: "item",
				label: "Automation",
				href: "/app/settings/automation",
				disabled: false,
				icon: VaadinAutomation,
			},
		],
	},
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
