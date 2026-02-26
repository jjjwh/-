<template>
  <div class="hero-container relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
    <!-- Background Texture/Video -->
    <div class="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
       <!-- Placeholder for noise/texture, can be replaced with video later -->
       <div class="w-full h-full bg-[url('/assets/noise.png')]"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto" ref="heroContent">
      <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-secondary mb-6 tracking-tight leading-none">
        <span class="block overflow-hidden">
            <span class="reveal-text block">农耕</span>
        </span>
        <span class="block overflow-hidden text-accent">
            <span class="reveal-text block">年节</span>
        </span>
      </h1>
      
      <div class="separator w-24 h-1 bg-secondary mx-auto my-8 opacity-0 reveal-item"></div>

      <p class="text-xl md:text-2xl font-sans text-secondary/80 max-w-2xl mx-auto leading-relaxed opacity-0 reveal-item">
        传统文化遗产的沉浸式探索
      </p>
      
      <p class="mt-8 text-sm md:text-base font-mono text-secondary/60 uppercase tracking-widest opacity-0 reveal-item">
        Scroll to Explore
      </p>
      
      <div class="mt-4 animate-bounce opacity-0 reveal-item">
        <svg class="w-6 h-6 text-secondary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const heroContent = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  // Text Reveal Animation
  tl.from('.reveal-text', {
    y: '100%',
    duration: 1.5,
    stagger: 0.2,
    delay: 0.5
  })
  .to('.reveal-item', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.1
  }, '-=1');
});
</script>

<style scoped>
/* Custom typography adjustments for Chinese characters if needed */
h1 {
    font-feature-settings: "palt";
}
</style>
