<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Chart, type ChartConfiguration, type ChartData } from 'chart.js/auto';

	interface BarDataset {
		label: string;
		data: number[];
		color?: string;
	}

	interface Props {
		labels: string[];
		datasets: BarDataset[];
		width?: number;
		height?: number;
		stacked?: boolean;
	}

	let { labels = [], datasets = [], width = 400, height = 300, stacked = false }: Props = $props();

	let canvas: HTMLCanvasElement;
	let chart: Chart | null = null;

	// Default colors for multiple datasets
	const defaultColors = [
		'#36A2EB',
		'#4BC0C0',
		'#FF6384',
		'#FFCE56',
		'#9966FF',
		'#FF9F40',
		'#C9CBCF'
	];

	function createChart() {
		if (!canvas) return;

		const chartData: ChartData<'bar'> = {
			labels: labels,
			datasets: datasets.map((dataset, index) => ({
				label: dataset.label,
				data: dataset.data,
				backgroundColor: dataset.color || defaultColors[index % defaultColors.length],
				borderWidth: 0,
				borderRadius: 4
			}))
		};

		const config: ChartConfiguration<'bar'> = {
			type: 'bar',
			data: chartData,
			options: {
				responsive: true,
				maintainAspectRatio: true,
				scales: {
					x: {
						stacked: stacked,
						grid: {
							display: false
						},
						ticks: {
							font: {
								size: 11
							}
						}
					},
					y: {
						stacked: stacked,
						beginAtZero: true,
						grid: {
							color: '#e5e7eb'
						},
						ticks: {
							font: {
								size: 11
							}
						}
					}
				},
				plugins: {
					legend: {
						display: datasets.length > 1,
						position: 'top',
						labels: {
							padding: 15,
							font: {
								size: 12
							},
							usePointStyle: true,
							pointStyle: 'rect'
						}
					},
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						padding: 12,
						cornerRadius: 4,
						titleFont: {
							size: 13
						},
						bodyFont: {
							size: 12
						}
					}
				}
			}
		};

		chart = new Chart(canvas, config);
	}

	function updateChart() {
		if (!chart) return;

		chart.data.labels = labels;
		chart.data.datasets = datasets.map((dataset, index) => ({
			label: dataset.label,
			data: dataset.data,
			backgroundColor: dataset.color || defaultColors[index % defaultColors.length],
			borderWidth: 0,
			borderRadius: 4
		}));
		chart.update();
	}

	onMount(() => {
		createChart();
	});

	$effect(() => {
		if (chart && (labels || datasets)) {
			updateChart();
		}
	});

	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<div class="chart-container">
	<canvas bind:this={canvas} style="max-width: {width}px; max-height: {height}px;" />
</div>

<style>
	.chart-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	canvas {
		max-width: 100%;
		height: auto;
	}
</style>
