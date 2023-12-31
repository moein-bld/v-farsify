<template>
	<main>
		<input v-model="inputValue" v-convert-numbers:english />
		{{ inputValue }}
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { vConvertNumbers } from '@/directives/number.directives';

const inputValue = ref();
</script>
