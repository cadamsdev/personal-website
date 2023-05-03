<script lang="ts">
	import '../../../styles/markdown.css';
	import Tag from '../../../components/Tag.svelte';
	export let data: any;
</script>

<div class="mb-8">
	<h1 class="text-4xl mb-2">
		{data.project.title}
	</h1>
	<div class="mb-2">{data.project.description}</div>

	<div class="flex gap-4">
		{#each data.project.tags as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>
</div>

<article class="markdown" contenteditable="false" bind:innerHTML={data.project.content} />
