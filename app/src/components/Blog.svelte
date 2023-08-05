<script lang="ts">
	import Tag from '../components/Tag.svelte';
	import { renderRichText, storyblokEditable, type ISbRichtext } from '@storyblok/svelte';

	type BlokData = {
		title: string;
		dateCreated: string;
		tags: string[];
		content: ISbRichtext;
	};

	export let blok: BlokData;
	$: articleHTML = renderRichText(blok.content);
</script>

<div use:storyblokEditable={blok} class="max-w-prose mx-auto">
  <div class="mb-8">
	<h1 class="text-4xl mb-4">
		{blok.title}
	</h1>

	<div class="mb-4 text-neutral-600">
		{blok.dateCreated &&
			new Intl.DateTimeFormat('en-US', {
				dateStyle: 'long'
			}).format(new Date(blok.dateCreated))}
	</div>

	<div class="flex flex-wrap gap-4 mb-4">
		{#each blok.tags as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>
</div>

	<article class="markdown" contenteditable="false" bind:innerHTML={articleHTML} />
</div>

