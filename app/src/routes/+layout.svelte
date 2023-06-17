<script lang="ts">
	import { page } from '$app/stores';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
	import '../styles/styles.css';
	import { isHamburgerMenuOpen } from '../stores/store';
	import clsx from 'clsx';

	let blurBackground = false;

	isHamburgerMenuOpen.subscribe((value) => {
		blurBackground = value;
	});
</script>

<svelte:head>
	<title>{$page.data.seo.title}</title>

	{#if $page.data.seo.description}
		<meta name="description" content={$page.data.seo.description}>
	{/if}
</svelte:head>

<div class="flex flex-col h-full">
	<Header />

	<div class={clsx("grid grid-cols-12 flex-grow", { 'blur-lg': blurBackground })}>
		<slot />
	</div>

	<Footer />
</div>
