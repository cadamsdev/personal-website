<script lang="ts">
	import { page } from '$app/stores';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
	import '../styles/styles.css';
</script>

<svelte:head>
	<title>{$page.data.seo.title}</title>

	{#if $page.data.seo.description}
		<meta name="description" content={$page.data.seo.description}>
	{/if}
</svelte:head>

<div class="flex flex-col h-full">
	<Header pathname='/' />

	<div class="grid grid-cols-12 flex-grow">
		<slot />
	</div>

	<Footer />
</div>
