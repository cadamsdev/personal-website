<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="px-4 sm:px-0 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4 pt-16"
>
	{#if $page.url.pathname === '/blog'}
		<h2 class="animate__animated animate__fadeIn text-4xl font-bold text-deep-carrot-orange mb-6">
			Blog
		</h2>
	{/if}
	<slot />
</div>
