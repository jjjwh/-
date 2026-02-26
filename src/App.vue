<script setup lang="ts">
import { ref } from 'vue';
import HeroSlider from './components/HeroSlider.vue';
import ScrollyTelling from './components/ScrollyTelling.vue';
import BarChart from './components/charts/BarChart.vue';
import content from '@/content.json';
import gsap from 'gsap';

// State to control visual changes based on scroll step
const currentVisualIndex = ref(0);

// Chart Data
const chartData = [
    { category: '县市非遗', value: 45 },
    { category: '省级非遗', value: 30 },
    { category: '国家非遗', value: 25 }
];

const handleStepEnter = (index: number) => {
    currentVisualIndex.value = index;
    // Animate visual transition here using GSAP
    gsap.fromTo('.visual-element', 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );
};

const scrollySteps = [
    { title: "二十四节气", text: "立春、雨水、惊蛰... 每一个节气都指导着农事活动。它是农耕的时间刻度，也是中华民族的智慧结晶。" },
    { title: "多样的节日", text: "从哈尼开秧门到藏历新年，每一个节日都承载着深厚的文化底蕴。不同地域的节日同质化与差异化并存。" },
    { title: "核心发现", text: "数据显示，45% 为县市非遗，30% 为省级非遗，25% 为国家非遗。数字化保护迫在眉睫。" }
];

const visuals = [
    "/assets/images/page1_img0.jpeg", // Solar Terms
    "/assets/images/page2_img0.jpeg", // Festivals
    "/assets/images/page0_img0.jpeg"  // Stats (placeholder)
];
</script>

<template>
  <main class="bg-primary text-secondary selection:bg-accent selection:text-white">
    <HeroSlider />
    
    <section class="relative">
        <ScrollyTelling :steps="scrollySteps" @stepEnter="handleStepEnter">
            <template #visual>
                <div class="w-full h-full flex items-center justify-center p-8">
                    <!-- Dynamic Visual Container -->
                    <div class="visual-element relative w-full max-w-3xl aspect-[4/3] rounded-sm overflow-hidden border-4 border-secondary/10 shadow-2xl">
                        <!-- Image Layer -->
                        <img 
                            :src="visuals[currentVisualIndex] || visuals[0]" 
                            alt="Visual Context" 
                            class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                        />
                        <!-- Overlay Tint -->
                        <div class="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
                    </div>
                </div>
            </template>
        </ScrollyTelling>
    </section>

    <!-- Bar Chart Section (D3 Implementation) -->
    <section class="h-screen flex flex-col items-center justify-center bg-primary border-t border-secondary/10 px-4">
        <h2 class="chapter-title">非遗数据分布</h2>
        <div id="bar-chart-container" class="w-full max-w-4xl bg-secondary/5 rounded border border-secondary/20 p-8">
            <BarChart :data="chartData" />
            <p class="text-sm text-secondary/50 mt-4 text-center font-mono">数据来源：文化和旅游部非物质文化遗产司</p>
        </div>
    </section>

  </main>
</template>

<style>
/* Global resets handled by Tailwind base, additional specific overrides here */
html {
    scroll-behavior: smooth;
}
</style>
