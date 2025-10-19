// Define a type for your asset for better type-safety
export type Asset = {
	id: string;
	assetName: string;
	category: string;
	status: "Deployed" | "In Stock" | "In Repair" | "Retired";
	manufacturer: string;
	model: string;
	serialNumber: string;
	assignedTo: string | null;
	department: string | null;
	purchaseDate: string; // ISO 8601 format
	purchaseCost: number;
	description: string;
};

// Mock data array
export const MOCK_ASSETS: Asset[] = [
	{
		id: "ASSET-001",
		assetName: "Dell Latitude 7420",
		category: "Hardware",
		status: "Deployed",
		manufacturer: "Dell",
		model: "Latitude 7420",
		serialNumber: "DX8F1G3",
		assignedTo: "Adebayo Adekunle",
		department: "Engineering",
		purchaseDate: "2024-05-15T10:00:00Z",
		purchaseCost: 1250000,
		description:
			"Standard issue laptop for senior developers. Includes 32GB RAM and 1TB SSD.",
	},
	{
		id: "ASSET-002",
		assetName: "Microsoft 365 E5 License",
		category: "Software",
		status: "Deployed",
		manufacturer: "Microsoft",
		model: "365 E5",
		serialNumber: "MS-LIC-ABCD-EFGH-IJKL",
		assignedTo: "Chioma Okoro",
		department: "Sales",
		purchaseDate: "2023-11-01T09:00:00Z",
		purchaseCost: 150000,
		description:
			"Annual enterprise license for Microsoft 365 suite, assigned to the sales team lead.",
	},
	{
		id: "ASSET-003",
		assetName: "HP Z27q G3 QHD Monitor",
		category: "Hardware",
		status: "In Stock",
		manufacturer: "HP",
		model: "Z27q G3",
		serialNumber: "CN4B22XYZ1",
		assignedTo: null,
		department: null,
		purchaseDate: "2025-09-20T14:30:00Z",
		purchaseCost: 450000,
		description:
			"New 27-inch QHD monitor for new hires. Stored in IT closet, shelf 3B.",
	},
	{
		id: "ASSET-004",
		assetName: "Main Database Server",
		category: "Hardware",
		status: "In Repair",
		manufacturer: "Supermicro",
		model: "SYS-220U-TNR",
		serialNumber: "SM12345678",
		assignedTo: null,
		department: "Infrastructure",
		purchaseDate: "2022-01-10T11:00:00Z",
		purchaseCost: 3500000,
		description:
			"Primary database server. Power supply unit failed, currently being replaced by vendor.",
	},
	{
		id: "ASSET-005",
		assetName: "Old Office Printer",
		category: "Hardware",
		status: "Retired",
		manufacturer: "Canon",
		model: "ImageRUNNER 2525",
		serialNumber: "IR2525-OLD01",
		assignedTo: null,
		department: "Facilities",
		purchaseDate: "2018-06-22T15:00:00Z",
		purchaseCost: 800000,
		description:
			"Decommissioned on Oct 1, 2025. Replaced with a new model and awaiting disposal.",
	},
	{
		id: "ASSET-006",
		assetName: "SafiDesk Domain",
		category: "Cloud & Virtual Assets",
		status: "Deployed",
		manufacturer: "Namecheap",
		model: "safidesk.com",
		serialNumber: "N/A",
		assignedTo: "Tunde Yusuf",
		department: "Marketing",
		purchaseDate: "2023-01-01T00:00:00Z",
		purchaseCost: 15000,
		description:
			"Annual domain name registration for the main company website.",
	},
];
