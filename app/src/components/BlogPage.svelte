<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	type BlokData = {
	};

	export let blok: BlokData;
</script>

<div use:storyblokEditable={blok} class="grid grid-cols-12 h-full">

</div>

