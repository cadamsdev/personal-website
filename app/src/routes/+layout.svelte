<script lang="ts">
	import { page } from '$app/stores';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
	import '@fontsource/oleo-script/700.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/700.css';
	import '../styles/styles.css';
</script>

<svelte:head>
	<title>{$page.data.seo.title}</title>

	{#if $page.data.seo.description}
		<meta name="description" content={$page.data.seo.description}>
	{/if}
</svelte:head>

<div class="flex flex-col h-full">
	<Header />

	<div class="flex-grow">
		<slot />
	</div>

	<Footer />
</div>
