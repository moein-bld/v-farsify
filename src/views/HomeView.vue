<template>
	<main>
		<input v-model="inputValue" v-convert-to-english />
		{{ inputValue }}
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { vConvertNumbers , vConvertToEnglish } from '@/directives/number.directives';

const inputValue = ref();
</script>
