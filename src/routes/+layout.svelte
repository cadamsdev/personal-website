
<script>
  import "../app.css";

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faLinkedinIn, faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" /><link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin
	/><link
		href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&display=swap"
		rel="stylesheet"
	/>

	<link rel="preconnect" href="https://fonts.googleapis.com" /><link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin
	/><link
		href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col h-full">
	<div class="grid grid-cols-12 p-6">
		<div class="col-start-4 col-span-2">
			<a href="/"><strong class="text-5xl font-oleoscript text-deep-carrot-orange">CA</strong></a>
		</div>

		<div class="col-start-6 col-span-4">
			<ul class="flex justify-between gap-2 uppercase font-bold text-2xl">
				<li><a href="/about">About</a></li>

				<li>
					<a href="/blog">Blogs</a>
				</li>

				<li>
					<a href="/projects"> Projects </a>
				</li>

				<li>
					<a href="/contact"> Contact </a>
				</li>
			</ul>
		</div>
	</div>

  <div class="grid grid-cols-12 flex-grow">
    <slot />
	</div>


	<div class="p-6 flex items-center justify-center bg-japanese-indigo text-deep-carrot-orange">
		<div class="text-center">
			<div class="flex justify-center gap-4 mb-6">
				<Fa icon={faLinkedinIn} size="24" />
				<Fa icon={faGithub} size="24" />
				<Fa icon={faDev} size="24" />
			</div>
			<div class="mb-2 text-lg">Built and designed by Chad Adams</div>
			<div>Copyright &#169; 2022 Chad Adams</div>
		</div>
	</div>
</div>

