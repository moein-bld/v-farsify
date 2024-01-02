import type { App } from 'vue';
import { vConvertNumbers } from '@/directives/ConvertNumbers/number.directives';
import { toPersianNumbers, toEnglishNumbers, toArabicNumbers } from '@/utility/ConvertNumbers/ConvertNumbers';

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