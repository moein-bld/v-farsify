import { createApp } from 'vue';
import { vConvertNumbers } from '@/directives/ConvertNumbers/number.directives';
import AppLocal from './App.vue';

const app = createApp(AppLocal);
app.directive('ConvertNumbers', vConvertNumbers);
app.mount('#app');




