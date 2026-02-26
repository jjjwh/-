<template>
  <div class="hero-slider h-screen w-full relative overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      effect="fade"
      class="h-full w-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="relative">
        <!-- Background Image -->
        <div 
          class="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-100 hover:scale-110"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="absolute inset-0 bg-black/50"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 
            class="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-white tracking-wider opacity-0 translate-y-10 animate-fade-in-up"
            :style="{ animationDelay: '0.5s' }"
          >
            {{ slide.title }}
          </h1>
          <p 
            class="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl opacity-0 translate-y-10 animate-fade-in-up"
            :style="{ animationDelay: '0.8s' }"
          >
            {{ slide.subtitle }}
          </p>
          <p 
            class="text-base md:text-lg text-gray-300 max-w-xl opacity-0 translate-y-10 animate-fade-in-up"
            :style="{ animationDelay: '1.1s' }"
          >
            {{ slide.description }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import content from '@/content.json';

const modules = [Autoplay, Pagination, EffectFade];
// Use extracted images if available, otherwise fallback to placeholders or use logic to map content
const slides = content.map(item => ({
    ...item,
    // Ensure image path is correct relative to public folder
    image: item.image || '' 
}));
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
