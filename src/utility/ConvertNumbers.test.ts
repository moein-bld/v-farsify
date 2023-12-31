import { toEnglishNumbers, toPersianNumbers, toArabicNumbers } from './ConvertNumbers';

describe('Number Conversion Utilities', () => {
	test('toEnglishNumbers converts Arabic and Persian numbers to English', () => {
		expect(toEnglishNumbers('۰۱۲۳۴۵۶۷۸۹')).toBe('0123456789');
	});

	test('toPersianNumbers converts English numbers to Persian', () => {
		expect(toPersianNumbers('0123456789')).toBe('۰۱۲۳۴۵۶۷۸۹');
	});

	test('toArabicNumbers converts English numbers to Arabic', () => {
		expect(toArabicNumbers('0123456789')).toBe('٠١٢٣٤٥٦٧٨٩');
	});
});
