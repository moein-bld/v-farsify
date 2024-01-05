import type { App } from 'vue';
import { vConvertNumbers } from '@/directives/ConvertNumbers/number.directives';
import { toPersianNumbers, toEnglishNumbers, toArabicNumbers } from '@/utility/ConvertNumbers/ConvertNumbers';

export const VFarsify = {
	install(app: App) {
		app.directive('ConvertNumbers', vConvertNumbers);
	},
};

export {
	// utility
	toPersianNumbers,
	toEnglishNumbers,
	toArabicNumbers,
	// directives
	vConvertNumbers,
};
