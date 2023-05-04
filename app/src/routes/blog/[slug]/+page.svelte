<script lang="ts">
	import 'highlight.js/styles/atom-one-dark.css';
	import '../../../styles/markdown.css';
	import Tag from '../../../components/Tag.svelte';
	export let data: any;
</script>

<div class="max-w-prose mx-auto">
  <div class="mb-8">
	<h1 class="text-4xl mb-4">
		{data.blog.title}
	</h1>

	<div class="mb-2 text-xl text-neutral-600">{data.blog.excerpt}</div>

	<div class="mb-2 text-neutral-600">
		{data.blog.dateCreated &&
			new Intl.DateTimeFormat('en-US', {
				dateStyle: 'long'
			}).format(new Date(data.blog.dateCreated))}
	</div>

	<div class="flex flex-wrap gap-4 mb-4">
		{#each data.blog.tags as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>
</div>

	<article class="markdown" contenteditable="false" bind:innerHTML={data.blog.content} />
</div>
