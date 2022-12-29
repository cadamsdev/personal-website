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

<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faLinkedinIn, faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex flex-col h-full">
	<div class="grid grid-cols-12 p-6">
		<div class="col-start-4 col-span-2">
			<strong class="text-5xl font-oleoscript text-deep-carrot-orange">CA</strong>
		</div>

		<div class="col-start-6 col-span-4">
			<ul class="flex justify-between gap-2 uppercase font-bold text-2xl">
				<li>About</li>

				<li>Blogs</li>

				<li>Projects</li>

				<li>Contact</li>
			</ul>
		</div>
	</div>

	<div class="grid grid-cols-12 flex-grow">
		<div class="col-start-4 col-span-4 flex justify-center items-center">
			<div>
				<h2 class="text-4xl mb-7">Hello there, my name is...</h2>
				<h1 class="text-7xl mb-7 text-deep-carrot-orange font-bold">Chad Alen Adams</h1>
				<p class="text-2xl">
					I'm a Software Engineer who enjoys building websites and web-based tools that makes our
					lives easier.
				</p>
			</div>
		</div>

		<div class="col-start-8 col-span-5 flex items-end justify-center">
			<img src="profile-pic.jpg" alt="Profile picture" />
		</div>
	</div>

	<div class="p-6 flex items-center justify-center bg-japanese-indigo text-deep-carrot-orange">
		<div class="text-center">
      <div class='flex justify-center gap-4 mb-6'>
        <Fa icon={faLinkedinIn} size='24' />
        <Fa icon={faGithub} size='24' />
        <Fa icon={faDev} size='24' />
      </div>
			<div class="mb-2 text-lg">Built and designed by Chad Adams</div>
			<div>Copyright &#169; 2022 Chad Adams</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
</style>
