import type { DirectiveBinding } from 'vue';
import { toPersianNumbers, toEnglishNumbers, toArabicNumbers } from '@/utility/ConvertNumbers';

// Directive for converting Persian and Arabic numbers to English
const vConvertToEnglish = {
	updated(el: HTMLElement) {
		let inputElement: HTMLInputElement;

		// Check if the element itself is an input
		if (el instanceof HTMLInputElement) {
			inputElement = el;
		} else {
			// Find the first input element within the element
			const foundInputElement = el.querySelector('input');
			if (foundInputElement) {
				inputElement = foundInputElement as HTMLInputElement;
			} else {
				// Exit if no input element is found
				return;
			}
		}

		const sourceValue = inputElement.value;
		const newValue = toEnglishNumbers(sourceValue);

		if (sourceValue !== newValue) {
			inputElement.value = newValue;
			inputElement.dispatchEvent(new Event('input', { bubbles: true }));
		}
	},
};

// Directive for converting numbers to a specified language
const vConvertNumbers = {
	updated(el: HTMLInputElement, binding: DirectiveBinding) {
		// Safely access binding.arg after checking it's not undefined
		const arg = binding.arg as AllowedArgs | undefined;
		const converter: NumberConverter = arg && converters[arg] ? converters[arg] : converters.english;

		const inputElement = el.getElementsByTagName('input')[0];
		const sourceValue = inputElement.value;
		const newValue = converter(sourceValue);

		if (sourceValue !== newValue) {
			inputElement.value = newValue;
			inputElement.dispatchEvent(new Event('input', { bubbles: true }));
		}
	},
};

// Updated converter type to include the custom type for arguments
const converters: Record<AllowedArgs, NumberConverter> = {
	english: toEnglishNumbers,
	persian: toPersianNumbers,
	arabic: toArabicNumbers,
};

// A type for the converter functions
type NumberConverter = (str: string) => string;

// Custom type for allowed arguments
type AllowedArgs = 'english' | 'persian' | 'arabic';

export { vConvertNumbers, vConvertToEnglish };
