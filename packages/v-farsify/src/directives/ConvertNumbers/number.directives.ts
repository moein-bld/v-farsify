import type { DirectiveBinding } from 'vue';
import type { NumberConverter, AllowedArgs } from '@/types/ConvertNumbers/convert-numbers';
import { toPersianNumbers, toEnglishNumbers, toArabicNumbers } from '@/utility/ConvertNumbers/ConvertNumbers';

/**
 * Custom directive to convert numbers between different numeral systems.
 * @argument {AllowedArgs} args - The language for number conversion: 'english', 'persian', or 'arabic'.
 */

// Directive for converting numbers to a specified language
export const vConvertNumbers = {
	beforeMount(el: HTMLElement, binding: DirectiveBinding<AllowedArgs>) {
		const arg = binding.arg;
		if (!arg || !Object.prototype.hasOwnProperty.call(converters, arg)) {
			throw new Error(`'${arg}' is not a valid language.`);
		}
	},
	updated(el: HTMLElement, binding: DirectiveBinding<AllowedArgs>) {
		let inputElement: HTMLInputElement;

		// Check if the element itself is an input
		if (el instanceof HTMLInputElement) {
			inputElement = el;
		} else {
			// Find the first input element within the element
			const foundInputElement = el.querySelector('input');
			if (!foundInputElement) return;
			inputElement = foundInputElement as HTMLInputElement;
		}

		// Safely access binding.arg after checking it's not undefined
		const arg = binding.arg as AllowedArgs | undefined;
		const converter: NumberConverter = arg && converters[arg] ? converters[arg] : converters.english;

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
