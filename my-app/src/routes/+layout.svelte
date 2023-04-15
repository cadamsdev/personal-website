<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div class="flex flex-col h-full">
	<Header />

	<div class="grid grid-cols-12 flex-grow">
		<slot />
	</div>

	<Footer />
</div>
