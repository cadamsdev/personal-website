<script lang="ts">
	import { renderRichText, storyblokEditable } from '@storyblok/svelte';

	type BlokData = {
    heading: string;
		content: string;
	};

	export let blok: BlokData;

  $: contentHTML = renderRichText(blok.content as any);
</script>

<div use:storyblokEditable={blok} class="grid grid-cols-12">
	<div
		class="animate__animated animate__fadeIn px-4 sm:px-0 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 xl:col-start-4 xl:col-span-5 2xl:col-start-4 2xl:col-span-4 flex justify-center py-16"
	>
		<div>
			<h2 class="text-4xl font-bold text-deep-carrot-orange mb-6">
        {blok.heading}
      </h2>
			<div class="markdown text-xl leading-relaxed mb-4">
        {@html contentHTML}
      </div>
		</div>
	</div>

	<div
		class="hidden xl:flex xl:border-b-black xl:col-start-9 xl:col-span-4 2xl:col-start-8 2xl:col-span-5 items-end justify-center"
	>
		<img src="profile-pic.jpg" alt="Profile" />
	</div>
</div>
