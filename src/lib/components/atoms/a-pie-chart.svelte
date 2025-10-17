<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Chart, type ChartConfiguration, type ChartData } from 'chart.js/auto';

	interface DoughnutDataItem {
		label: string;
		value: number;
		color?: string;
	}

	interface Props {
		data: DoughnutDataItem[];
		title?: string;
		cutout?: string;
		width?: number;
		height?: number;
	}

	let { data = [], cutout = '60%', width = 400, height = 400 }: Props = $props();

	let canvas: HTMLCanvasElement;
	let chart: Chart | null = null;

	// Default colors if not provided
	const defaultColors = [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#4BC0C0',
		'#9966FF',
		'#FF9F40',
		'#FF6384',
		'#C9CBCF'
	];

	function createChart() {
		if (!canvas) return;

		const chartData: ChartData<'doughnut'> = {
			labels: data.map((item) => item.label),
			datasets: [
				{
					data: data.map((item) => item.value),
					backgroundColor: data.map(
						(item, index) => item.color || defaultColors[index % defaultColors.length]
					),
					borderWidth: 2,
					borderColor: '#ffffff'
				}
			]
		};

		const config: ChartConfiguration<'doughnut'> = {
			type: 'doughnut',
			data: chartData,
			options: {
				responsive: true,
				maintainAspectRatio: true,
				plugins: {
					legend: {
						position: 'right',
						labels: {
							padding: 20,
							font: {
								size: 12
							}
						}
					},
					tooltip: {
						callbacks: {
							label: function (context) {
								const label = context.label || '';
								const value = context.parsed || 0;
								const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
								const percentage = ((value / total) * 100).toFixed(1);
								return `${label}: ${value} (${percentage}%)`;
							}
						}
					}
				},
				cutout: cutout
			}
		};

		chart = new Chart(canvas, config);
	}

	function updateChart() {
		if (!chart) return;

		chart.data.labels = data.map((item) => item.label);
		chart.data.datasets[0].data = data.map((item) => item.value);
		chart.data.datasets[0].backgroundColor = data.map(
			(item, index) => item.color || defaultColors[index % defaultColors.length]
		);
		chart.update();
	}

	onMount(() => {
		createChart();
	});

	$effect(() => {
		// React to data changes
		if (chart && data) {
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
