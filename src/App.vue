<script setup lang="ts">
import HeroSlider from './components/HeroSlider.vue';
import ScrollSection from './components/ScrollSection.vue';
import content from '@/content.json';
</script>

<template>
  <main>
    <HeroSlider />
    
    <ScrollSection title="关于毕设" class="bg-primary">
      <template #content>
        <p>
          本毕设项目旨在通过数字化手段重新诠释传统农耕年节文化。
          利用现代Web技术，将古老的二十四节气与各民族的独特节日以可视化的形式呈现。
        </p>
        <p class="mt-4">
          通过深入调研与资料搜集，我们整理了大量珍贵的图文素材，
          并尝试用沉浸式的叙事手法，让观众身临其境地感受中华文化的博大精深。
        </p>
      </template>
      <template #visual>
        <div class="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <!-- Placeholder for extracted image -->
             <div class="w-full h-full bg-secondary/20 flex items-center justify-center">
                <span class="text-white">Image Placeholder</span>
             </div>
        </div>
      </template>
    </ScrollSection>

    <ScrollSection title="核心发现" class="bg-[#0f2242]">
       <template #content>
        <ul class="list-disc pl-5 space-y-2">
            <li>节日分布与农耕周期的强相关性</li>
            <li>不同地域节日的同质化与差异化并存</li>
            <li>数字化保护的紧迫性与可行性</li>
        </ul>
      </template>
      <template #visual>
         <div class="grid grid-cols-2 gap-4">
            <div class="bg-secondary/20 p-4 rounded h-32 flex items-center justify-center text-2xl font-bold">
                45% 县市非遗
            </div>
            <div class="bg-secondary/20 p-4 rounded h-32 flex items-center justify-center text-2xl font-bold">
                30% 省级非遗
            </div>
             <div class="bg-secondary/20 p-4 rounded h-32 flex items-center justify-center text-2xl font-bold col-span-2">
                25% 国家非遗
            </div>
         </div>
      </template>
    </ScrollSection>

     <ScrollSection title="未来展望" class="bg-primary">
      <template #content>
        <p>
           我们希望不仅仅是一个静态的展示网站，更是一个开放的平台。
           未来将加入更多互动功能，如用户投稿、节日提醒、AR体验等。
        </p>
      </template>
      <template #visual>
        <div class="relative w-full h-64 flex items-center justify-center border-2 border-dashed border-secondary/50 rounded-lg">
            <span class="text-secondary text-xl">Interactive Map (Coming Soon)</span>
        </div>
      </template>
    </ScrollSection>

  </main>
</template>

<style>
@import './assets/main.css';
</style>
