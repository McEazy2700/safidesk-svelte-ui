import type { NavGroup } from "$lib/types/navigation";
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

export const APP_NAVIGATION: NavGroup[] = [
  {
    icon: Package2Outline,
    label: "Assets",
    navs: [
      {
        label: "Dashboard",
        href: "/app",
        disabled: true,
        icon: BxsDashboard,
      },
      {
        label: "Computer",
        href: "/app",
        disabled: true,
        icon: ComputerOutline,
      },
      {
        label: "Monitor",
        href: "/app",
        disabled: true,
        icon: Monitor,
      },
      {
        label: "Software",
        href: "/app",
        disabled: true,
        icon: Software,
      },
      {
        label: "Network Devices",
        href: "/app",
        disabled: true,
        icon: NetworkLeft,
      },
      {
        label: "Peripherals",
        href: "/app",
        disabled: true,
        icon: USB,
      },
      {
        label: "Printers",
        href: "/app",
        disabled: true,
        icon: Printer,
      },
      {
        label: "Cartridges",
        href: "/app",
        disabled: true,
        icon: InkOutline,
      },
      {
        label: "Consumables",
        href: "/app",
        disabled: true,
        icon: Package2Outline,
      },
      {
        label: "Phones",
        href: "/app",
        disabled: true,
        icon: Phone,
      },
      {
        label: "Racks",
        href: "/app",
        disabled: true,
        icon: HDDRack,
      },
      {
        label: "Enclosures",
        href: "/app",
        disabled: true,
        icon: ServerPathLinear,
      },
      {
        label: "PUCs",
        href: "/app",
        disabled: true,
        icon: MapConnection,
      },
      {
        label: "Passive Devices",
        href: "/app",
        disabled: true,
        icon: DeviceIpad,
      },
      {
        label: "Unmanaged Devices",
        href: "/app",
        disabled: true,
        icon: Question24Filled,
      },
      {
        label: "Cables",
        href: "/app",
        disabled: true,
        icon: Cable,
      },
      {
        label: "Simcard Items",
        href: "/app",
        disabled: true,
        icon: Sim24Regular,
      },
      {
        label: "Global",
        href: "/app",
        disabled: true,
        icon: GlobalStorageArchitecture,
      },
    ],
  },
  {
    icon: HeadsetSolid,
    label: "Assistance",
    navs: [
      {
        label: "Dashboard",
        href: "/app",
        disabled: true,
        icon: BxsDashboard,
      },
      {
        label: "Tickets",
        href: "/app/tickets",
        disabled: false,
        icon: TaskListSquare24Regular,
      },
      {
        label: "Services",
        href: "/app",
        disabled: true,
        icon: CRMService,
      },
      {
        label: "Planning",
        href: "/app",
        disabled: true,
        icon: Calendar,
      },
      {
        label: "Statistics",
        href: "/app",
        disabled: true,
        icon: ChartPie,
      },
    ],
  },
];
