<template>
  <section ref="sectionRef" class="scroll-section min-h-screen flex items-center justify-center relative py-20 overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-content opacity-0 translate-x-[-50px]">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-secondary">{{ title }}</h2>
          <div class="prose prose-lg text-gray-300">
            <slot name="content"></slot>
          </div>
        </div>
        
        <!-- Visual Content -->
        <div class="visual-content opacity-0 translate-x-[50px]">
           <slot name="visual"></slot>
        </div>
      </div>
    </div>
    
    <!-- Parallax Background Element -->
    <div ref="bgRef" class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  title: string;
}>();

const sectionRef = ref<HTMLElement | null>(null);
const bgRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (sectionRef.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.to(sectionRef.value.querySelector('.text-content'), {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out'
    }, 0)
    .to(sectionRef.value.querySelector('.visual-content'), {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out'
    }, 0.2);
    
    // Parallax effect
    if(bgRef.value) {
        gsap.to(bgRef.value, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }
  }
});
</script>
