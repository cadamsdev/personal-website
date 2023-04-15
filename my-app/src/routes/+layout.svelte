<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
	import '../styles/styles.css';
</script>

<div class="flex flex-col h-full">
	<Header pathname='/' />

	<div class="grid grid-cols-12 flex-grow">
		<slot />
	</div>

	<Footer />
</div>
