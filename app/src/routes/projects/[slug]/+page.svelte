<script lang="ts">
	import Tag from '../../../components/Tag.svelte';
	export let data: any;
</script>

<svelte:head>
	<title>Chad Adams - {data.project.title}</title>
	<html lang="en" />
</svelte:head>

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
