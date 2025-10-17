import type { NavGroup, NavItem } from "$lib/types/navigation";
import BxsDashboard from "$lib/components/icons/bxs-dashboard.svelte";
import Package2Outline from "$lib/components/icons/package-2-outline.svelte";
import ComputerOutline from "$lib/components/icons/computer-outline.svelte";
import Monitor from "$lib/components/icons/monitor.svelte";
import Software from "$lib/components/icons/software.svelte";
import NetworkLeft from "$lib/components/icons/network-left.svelte";
import USB from "$lib/components/icons/usb.svelte";
import Printer from "$lib/components/icons/printer-solid.svelte";
import InkOutline from "$lib/components/icons/ink-outline.svelte";
import Phone from "$lib/components/icons/phone.svelte";
import HDDRack from "$lib/components/icons/hdd-rack.svelte";
import ServerPathLinear from "$lib/components/icons/server-path-linear.svelte";
import MapConnection from "$lib/components/icons/map-connection.svelte";
import DeviceIpad from "$lib/components/icons/device-ipad.svelte";
import Question24Filled from "$lib/components/icons/question-24-filled.svelte";
import Cable from "$lib/components/icons/cable.svelte";
import Sim24Regular from "$lib/components/icons/sim-24-regular.svelte";
import GlobalStorageArchitecture from "$lib/components/icons/global-storage-architecture.svelte";
import HeadsetSolid from "$lib/components/icons/headset-solid.svelte";
import TaskListSquare24Regular from "$lib/components/icons/task-list-square-24-regular.svelte";
import CRMService from "$lib/components/icons/crm-service.svelte";
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
				label: "Computer",
				href: "/app/assets",
				disabled: true,
				icon: ComputerOutline,
			},
			{
				type: "item",
				label: "Monitor",
				href: "/app/assets",
				disabled: true,
				icon: Monitor,
			},
			{
				type: "item",
				label: "Software",
				href: "/app/assets",
				disabled: true,
				icon: Software,
			},
			{
				type: "item",
				label: "Network Devices",
				href: "/app/assets",
				disabled: true,
				icon: NetworkLeft,
			},
			{
				type: "item",
				label: "Peripherals",
				href: "/app/assets",
				disabled: true,
				icon: USB,
			},
			{
				type: "item",
				label: "Printers",
				href: "/app/assets",
				disabled: true,
				icon: Printer,
			},
			{
				type: "item",
				label: "Cartridges",
				href: "/app/assets",
				disabled: true,
				icon: InkOutline,
			},
			{
				type: "item",
				label: "Consumables",
				href: "/app/assets",
				disabled: true,
				icon: Package2Outline,
			},
			{
				type: "item",
				label: "Phones",
				href: "/app/assets",
				disabled: true,
				icon: Phone,
			},
			{
				type: "item",
				label: "Racks",
				href: "/app/assets",
				disabled: true,
				icon: HDDRack,
			},
			{
				type: "item",
				label: "Enclosures",
				href: "/app/assets",
				disabled: true,
				icon: ServerPathLinear,
			},
			{
				type: "item",
				label: "PUCs",
				href: "/app/assets",
				disabled: true,
				icon: MapConnection,
			},
			{
				type: "item",
				label: "Passive Devices",
				href: "/app/assets",
				disabled: true,
				icon: DeviceIpad,
			},
			{
				type: "item",
				label: "Unmanaged Devices",
				href: "/app/assets",
				disabled: true,
				icon: Question24Filled,
			},
			{
				type: "item",
				label: "Cables",
				href: "/app/assets",
				disabled: true,
				icon: Cable,
			},
			{
				type: "item",
				label: "Simcard Items",
				href: "/app/assets",
				disabled: true,
				icon: Sim24Regular,
			},
			{
				type: "item",
				label: "Global",
				href: "/app/assets",
				disabled: true,
				icon: GlobalStorageArchitecture,
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
				href: "/app/assistance/services",
				disabled: true,
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
		icon: LucideWallet,
		label: "Management",
		baseRoute: "/app/management",
		navs: [
			{
				type: "item",
				label: "Licences",
				href: "/app/management",
				disabled: true,
				icon: CodiconKey,
			},
			{
				type: "item",
				label: "Budgets",
				href: "/app/management",
				disabled: true,
				icon: SolarCalculatorOutline,
			},
			{
				type: "item",
				label: "Suppliers",
				href: "/app/management",
				disabled: true,
				icon: WheelBarrowEmpty,
			},
			{
				type: "item",
				label: "Contacts",
				href: "/app/management",
				disabled: true,
				icon: ContactCardRegular,
			},
			{
				type: "item",
				label: "Contracts",
				href: "/app/management",
				disabled: true,
				icon: ContractOutlineRounded,
			},
			{
				type: "item",
				label: "Documents",
				href: "/app/management",
				disabled: true,
				icon: SolarDocumentsOutline,
			},
			{
				type: "item",
				label: "Lines",
				href: "/app/management",
				disabled: true,
				icon: UilPhone,
			},
			{
				type: "item",
				label: "Certificates",
				href: "/app/management",
				disabled: true,
				icon: FluentCertificateRegular,
			},
			{
				type: "item",
				label: "Datacenters",
				href: "/app/management",
				disabled: true,
				icon: BuildingFour,
			},
			{
				type: "item",
				label: "Clusters",
				href: "/app/management",
				disabled: true,
				icon: CarbonAssemblyCluster,
			},
			{
				type: "item",
				label: "Domains",
				href: "/app/management",
				disabled: true,
				icon: StreamlinePlumpWeb,
			},
			{
				type: "item",
				label: "Appliances",
				href: "/app/management",
				disabled: true,
				icon: PhDevices,
			},
			{
				type: "item",
				label: "Databases",
				href: "/app/management",
				disabled: true,
				icon: StreamlinePlumpDatabase,
			},
		],
	},
	{
		type: "group",
		icon: IconoirTools,
		label: "Tools",
		baseRoute: "/app/management",
		navs: [
			{
				type: "item",
				label: "Project",
				href: "/app/tools",
				disabled: true,
				icon: TablerTemplate,
			},
			{
				type: "item",
				label: "Reminders",
				href: "/app/tools",
				disabled: true,
				icon: PhNotification,
			},
			{
				type: "item",
				label: "RSS Feed",
				href: "/app/tools",
				disabled: true,
				icon: MeteorIconsRss,
			},
			{
				type: "item",
				label: "Knowledge Base",
				href: "/app/tools",
				disabled: true,
				icon: HugeiconsKnowledge,
			},
			{
				type: "item",
				label: "Reservations",
				href: "/app/tools",
				disabled: true,
				icon: AkarIconsSchedule,
			},
			{
				type: "item",
				label: "Reports",
				href: "/app/tools",
				disabled: true,
				icon: TablerReport,
			},
			{
				type: "item",
				label: "Saved Searches",
				href: "/app/tools",
				disabled: true,
				icon: FamiconsBookmarksOutline,
			},
		],
	},
	{
		type: "group",
		icon: TablerShieldCheck,
		label: "Administration",
		baseRoute: "/app/administration",
		navs: [
			{
				type: "item",
				label: "Users",
				href: "/app/administration",
				disabled: true,
				icon: TablerUser,
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
