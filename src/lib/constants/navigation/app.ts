import type { NavGroup } from '$lib/types/navigation';
import BxsDashboard from '$lib/components/icons/bxs-dashboard.svelte';
import Package2Outline from '$lib/components/icons/package-2-outline.svelte';
import ComputerOutline from '$lib/components/icons/computer-outline.svelte';
import Monitor from '$lib/components/icons/monitor.svelte';
import Software from '$lib/components/icons/software.svelte';
import NetworkLeft from '$lib/components/icons/network-left.svelte';
import USB from '$lib/components/icons/usb.svelte';
import Printer from '$lib/components/icons/printer-solid.svelte';
import InkOutline from '$lib/components/icons/ink-outline.svelte';
import Phone from '$lib/components/icons/phone.svelte';
import HDDRack from '$lib/components/icons/hdd-rack.svelte';
import ServerPathLinear from '$lib/components/icons/server-path-linear.svelte';
import MapConnection from '$lib/components/icons/map-connection.svelte';
import DeviceIpad from '$lib/components/icons/device-ipad.svelte';
import Question24Filled from '$lib/components/icons/question-24-filled.svelte';
import Cable from '$lib/components/icons/cable.svelte';
import Sim24Regular from '$lib/components/icons/sim-24-regular.svelte';
import GlobalStorageArchitecture from '$lib/components/icons/global-storage-architecture.svelte';
import HeadsetSolid from '$lib/components/icons/headset-solid.svelte';
import TaskListSquare24Regular from '$lib/components/icons/task-list-square-24-regular.svelte';
import CRMService from '$lib/components/icons/crm-service.svelte';
import Calendar from '$lib/components/icons/calendar.svelte';
import ChartPie from '$lib/components/icons/chart-pie.svelte';
import LucideWallet from '$lib/components/icons/lucide-wallet.svelte';
import CodiconKey from '$lib/components/icons/codicon-key.svelte';
import SolarCalculatorOutline from '$lib/components/icons/solar-calculator-outline.svelte';
import WheelBarrowEmpty from '$lib/components/icons/wheel-barrow-empty.svelte';
import ContactCardRegular from '$lib/components/icons/contact-card-regular.svelte';
import ContractOutlineRounded from '$lib/components/icons/contract-outline-rounded.svelte';
import SolarDocumentsOutline from '$lib/components/icons/solar-documents-outline.svelte';
import UilPhone from '$lib/components/icons/uil-phone.svelte';
import FluentCertificateRegular from '$lib/components/icons/fluent-certificate-regular.svelte';
import BuildingFour from '$lib/components/icons/building-four.svelte';
import CarbonAssemblyCluster from '$lib/components/icons/carbon-assembly-cluster.svelte';
import StreamlinePlumpWeb from '$lib/components/icons/streamline-plump-web.svelte';
import PhDevices from '$lib/components/icons/ph-devices.svelte';
import StreamlinePlumpDatabase from '$lib/components/icons/streamline-plump-database.svelte';
import IconoirTools from '$lib/components/icons/iconoir-tools.svelte';
import BiDiagram2 from '$lib/components/icons/bi-diagram-2.svelte';

export const APP_NAVIGATION: NavGroup[] = [
  {
    icon: Package2Outline,
    label: 'Assets',
    baseRoute: '/app/assets',
    navs: [
      {
        label: 'Dashboard',
        href: '/app/assets',
        disabled: true,
        icon: BxsDashboard
      },
      {
        label: 'Computer',
        href: '/app/assets',
        disabled: true,
        icon: ComputerOutline
      },
      {
        label: 'Monitor',
        href: '/app/assets',
        disabled: true,
        icon: Monitor
      },
      {
        label: 'Software',
        href: '/app/assets',
        disabled: true,
        icon: Software
      },
      {
        label: 'Network Devices',
        href: '/app/assets',
        disabled: true,
        icon: NetworkLeft
      },
      {
        label: 'Peripherals',
        href: '/app/assets',
        disabled: true,
        icon: USB
      },
      {
        label: 'Printers',
        href: '/app/assets',
        disabled: true,
        icon: Printer
      },
      {
        label: 'Cartridges',
        href: '/app/assets',
        disabled: true,
        icon: InkOutline
      },
      {
        label: 'Consumables',
        href: '/app/assets',
        disabled: true,
        icon: Package2Outline
      },
      {
        label: 'Phones',
        href: '/app/assets',
        disabled: true,
        icon: Phone
      },
      {
        label: 'Racks',
        href: '/app/assets',
        disabled: true,
        icon: HDDRack
      },
      {
        label: 'Enclosures',
        href: '/app/assets',
        disabled: true,
        icon: ServerPathLinear
      },
      {
        label: 'PUCs',
        href: '/app/assets',
        disabled: true,
        icon: MapConnection
      },
      {
        label: 'Passive Devices',
        href: '/app/assets',
        disabled: true,
        icon: DeviceIpad
      },
      {
        label: 'Unmanaged Devices',
        href: '/app/assets',
        disabled: true,
        icon: Question24Filled
      },
      {
        label: 'Cables',
        href: '/app/assets',
        disabled: true,
        icon: Cable
      },
      {
        label: 'Simcard Items',
        href: '/app/assets',
        disabled: true,
        icon: Sim24Regular
      },
      {
        label: 'Global',
        href: '/app/assets',
        disabled: true,
        icon: GlobalStorageArchitecture
      }
    ]
  },
  {
    icon: HeadsetSolid,
    label: 'Assistance',
    baseRoute: '/app/assistance',
    navs: [
      {
        label: 'Dashboard',
        href: '/app/assistance/dashboard',
        disabled: true,
        icon: BxsDashboard
      },
      {
        label: 'Tickets',
        href: '/app/assistance/tickets',
        disabled: false,
        icon: TaskListSquare24Regular
      },
      {
        label: 'Services',
        href: '/app/assistance/services',
        disabled: true,
        icon: CRMService
      },
      {
        label: 'Planning',
        href: '/app/assistance/planning',
        disabled: true,
        icon: Calendar
      },
      {
        label: 'Statistics',
        href: '/app/assistance/statistics',
        disabled: true,
        icon: ChartPie
      }
    ]
  },
  {
    icon: LucideWallet,
    label: 'Management',
    baseRoute: '/app/management',
    navs: [
      {
        label: 'Licences',
        href: '/app/management',
        disabled: true,
        icon: CodiconKey
      },
      {
        label: 'Budgets',
        href: '/app/management',
        disabled: true,
        icon: SolarCalculatorOutline
      },
      {
        label: 'Suppliers',
        href: '/app/management',
        disabled: true,
        icon: WheelBarrowEmpty
      },
      {
        label: 'Contacts',
        href: '/app/management',
        disabled: true,
        icon: ContactCardRegular
      },
      {
        label: 'Contracts',
        href: '/app/management',
        disabled: true,
        icon: ContractOutlineRounded
      },
      {
        label: 'Documents',
        href: '/app/management',
        disabled: true,
        icon: SolarDocumentsOutline
      },
      {
        label: 'Lines',
        href: '/app/management',
        disabled: true,
        icon: UilPhone
      },
      {
        label: 'Certificates',
        href: '/app/management',
        disabled: true,
        icon: FluentCertificateRegular
      },
      {
        label: 'Datacenters',
        href: '/app/management',
        disabled: true,
        icon: BuildingFour
      },
      {
        label: 'Clusters',
        href: '/app/management',
        disabled: true,
        icon: CarbonAssemblyCluster
      },
      {
        label: 'Domains',
        href: '/app/management',
        disabled: true,
        icon: StreamlinePlumpWeb
      },
      {
        label: 'Appliances',
        href: '/app/management',
        disabled: true,
        icon: PhDevices
      },
      {
        label: 'Databases',
        href: '/app/management',
        disabled: true,
        icon: StreamlinePlumpDatabase
      }
    ]
  },
  {
    icon: IconoirTools,
    label: 'Tools',
    baseRoute: '/app/management',
    navs: [
      {
        label: 'Databases',
        href: '/app/tools',
        disabled: true,
        icon: BiDiagram2
      }
    ]
  }
];
