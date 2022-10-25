import * as ElementPlusIconVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';

export default defineNuxtPlugin(nuxtApp => {
  // Element Plus
  nuxtApp.vueApp.use(ElementPlus, { size: 'mini', zIndex: 3000 });

  // Element Plus Icons
  for (const [key, component] of Object.entries(ElementPlusIconVue)) {
    nuxtApp.vueApp.component(key, component);
  }
});
