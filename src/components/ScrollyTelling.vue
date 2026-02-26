<template>
  <div class="scrolly-container relative">
    <!-- Sticky Graphic (Left/Right/Background) -->
    <div class="sticky-graphic sticky top-0 h-screen w-full flex items-center justify-center z-0 overflow-hidden">
        <slot name="visual"></slot>
    </div>

    <!-- Scrolling Text (Foreground) -->
    <div class="scrolly-content relative z-10 w-full max-w-4xl mx-auto pointer-events-none">
        <!-- Steps -->
        <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="step min-h-screen flex items-center justify-center md:justify-start px-4"
            :data-step="index"
        >
            <div class="codex-card pointer-events-auto max-w-md shadow-2xl transform transition-all duration-500 hover:scale-105">
                <h3 v-if="step.title" class="text-2xl font-serif font-bold text-accent mb-4">{{ step.title }}</h3>
                <p class="scrolly-text text-base md:text-lg">{{ step.text }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  steps: { title?: string; text: string }[];
}>();

const emit = defineEmits(['stepEnter']);

let triggers: ScrollTrigger[] = [];

onMounted(() => {
  const stepsElements = document.querySelectorAll('.step');
  
  stepsElements.forEach((step, index) => {
    const trigger = ScrollTrigger.create({
      trigger: step,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        emit('stepEnter', index);
        gsap.to(step.querySelector('.codex-card'), { opacity: 1, y: 0, duration: 0.5 });
      },
      onLeave: () => {
         gsap.to(step.querySelector('.codex-card'), { opacity: 0.3, y: -20, duration: 0.5 });
      },
      onEnterBack: () => {
        emit('stepEnter', index);
        gsap.to(step.querySelector('.codex-card'), { opacity: 1, y: 0, duration: 0.5 });
      },
       onLeaveBack: () => {
         gsap.to(step.querySelector('.codex-card'), { opacity: 0.3, y: 20, duration: 0.5 });
      },
      // markers: true // Debugging
    });
    triggers.push(trigger);
  });
});

onUnmounted(() => {
  triggers.forEach(t => t.kill());
});
</script>

<style scoped>
.step {
    /* Ensure enough space for scrolling */
    margin-bottom: 20vh; 
}
.codex-card {
    opacity: 0.3; /* Default state */
    transform: translateY(20px);
}
</style>
