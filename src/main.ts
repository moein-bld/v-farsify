import type { App } from 'vue';
import { createApp } from 'vue';
import { vConvertNumbers } from '@/directives/ConvertNumbers/number.directives';
import { toPersianNumbers, toEnglishNumbers, toArabicNumbers } from '@/utility/ConvertNumbers/ConvertNumbers';
import AppLocal from './App.vue';

const app = createApp(AppLocal);
app.directive('ConvertNumbers', vConvertNumbers);
app.mount('#app');


export {
	// utility
	toPersianNumbers, toEnglishNumbers, toArabicNumbers,
	// directives
	vConvertNumbers,
};

export default {
	install(app: App) {
		app.directive('ConvertNumbers', vConvertNumbers);
	},
};


