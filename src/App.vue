<template>
	<div>
		<!-- vConvertNumbers directive test -->
		<input type="text" v-model="ConvertNumbersPersian" v-convert-numbers:persian> {{ ConvertNumbersPersian }}
		<br>
		<input type="text" v-model="ConvertNumbersEnglish" v-convert-numbers:english> {{ ConvertNumbersEnglish }}
		<br>
		<input type="text" v-model="ConvertNumbersArabic" v-convert-numbers:arabic> {{ ConvertNumbersArabic }}
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const ConvertNumbersPersian = ref()
const ConvertNumbersEnglish = ref()
const ConvertNumbersArabic = ref()
</script>