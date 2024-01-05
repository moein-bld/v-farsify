// function to convert numbers to English
export function toEnglishNumbers(str: string) {
	const arabicNumerals = '٠١٢٣٤٥٦٧٨٩';
	const persianNumerals = '۰۱۲۳۴۵۶۷۸۹';
	const englishNumerals = '0123456789';

	return str.replace(/[\u0660-\u0669\u06F0-\u06F9]/g, d => {
		if (arabicNumerals.includes(d)) {
			return englishNumerals[arabicNumerals.indexOf(d)];
		} else if (persianNumerals.includes(d)) {
			return englishNumerals[persianNumerals.indexOf(d)];
		}
		return d;
	});
}

// function to convert numbers to Persian
export function toPersianNumbers(str: string) {
	return str.replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d, 10)]);
}

// function to convert numbers to Arabic
export function toArabicNumbers(str: string) {
	return str.replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[parseInt(d, 10)]);
}
