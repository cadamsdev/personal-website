<script lang="ts">
	import Tag from '../components/Tag.svelte';

	type Props = {
		full_slug: string;
		content: {
			title: string;
			description: string;
			dateCreated: string;
			tags: string[];
			previewImage: {
				filename: string;
			};
		};
	};

	export let project: Props;
</script>

<div class="mb-16 animate__animated animate__fadeIn">
	<a href={project.full_slug} class="no-underline hover:underline">
		<h2 class="text-2xl md:text-3xl">{project.content.title}</h2>
	</a>
	<small class="block text-lg my-2">{project.content.description}</small>
	<div class="flex flex-wrap gap-4 mb-4">
		{#each project.content.tags || [] as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>

	<img class="mb-4 max-h-64" src={project.content.previewImage.filename} alt="" />

	<a href={project.full_slug} class="p-2 rounded text-sm font-semibold">
		Read more...
	</a>
</div>
