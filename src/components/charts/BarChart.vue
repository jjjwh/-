<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import * as d3 from 'd3';

// Define the data interface
interface ChartData {
  category: string;
  value: number;
}

const props = defineProps<{
  data: ChartData[];
}>();

const chartRef = ref<HTMLElement | null>(null);

const drawChart = () => {
  if (!chartRef.value) return;

  // Clear previous chart
  d3.select(chartRef.value).selectAll('*').remove();

  const margin = { top: 20, right: 30, bottom: 40, left: 120 };
  const width = chartRef.value.clientWidth - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select(chartRef.value)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // X axis
  const x = d3.scaleLinear()
    .domain([0, 100]) // Assuming percentage based on data (45, 30, 25)
    .range([0, width]);

  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)rotate(-45)')
    .style('text-anchor', 'end')
    .style('font-family', 'var(--font-sans)')
    .style('color', 'var(--color-secondary)');

  // Y axis
  const y = d3.scaleBand()
    .range([0, height])
    .domain(props.data.map(d => d.category))
    .padding(0.2);

  svg.append('g')
    .call(d3.axisLeft(y))
    .style('font-family', 'var(--font-serif)')
    .style('font-size', '14px')
    .style('color', 'var(--color-secondary)');

  // Bars
  svg.selectAll('myRect')
    .data(props.data)
    .join('rect')
    .attr('x', x(0))
    .attr('y', (d: ChartData) => y(d.category) || 0)
    .attr('width', 0) // Start at 0 for animation
    .attr('height', y.bandwidth())
    .attr('fill', 'var(--color-accent)')
    .transition()
    .duration(1000)
    .attr('width', (d: ChartData) => x(d.value));

  // Labels
  svg.selectAll('myLabels')
    .data(props.data)
    .join('text')
    .attr('x', (d: ChartData) => x(d.value) + 5)
    .attr('y', (d: ChartData) => (y(d.category) || 0) + y.bandwidth() / 2 + 5)
    .text((d: ChartData) => `${d.value}%`)
    .style('fill', 'var(--color-secondary)')
    .style('font-family', 'var(--font-mono)')
    .style('opacity', 0)
    .transition()
    .delay(800)
    .duration(500)
    .style('opacity', 1);
};

onMounted(() => {
    drawChart();
    window.addEventListener('resize', drawChart);
});

watch(() => props.data, drawChart);
</script>

<template>
  <div ref="chartRef" class="w-full h-full min-h-[400px]"></div>
</template>

<style scoped>
/* D3 specific styles if needed, mostly handled by inline styles and CSS vars */
</style>
