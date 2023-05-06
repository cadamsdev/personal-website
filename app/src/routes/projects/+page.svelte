<script lang="ts">
	import Pagination from '../../components/Pagination.svelte';
	import Tag from '../../components/Tag.svelte';
	import { urlFor } from '../../utils/sanity-utils';
	export let data: any;
</script>

<div class="mb-4">
	{#each data.projects as project}
		<div class="mb-16 animate__animated animate__fadeIn">
			<a href={`/projects/${project.slug.current}`} class="no-underline hover:underline">
				<h2 class="text-2xl md:text-3xl">{project.title}</h2>
			</a>
			<small class="block text-lg my-2">{project.description}</small>
			<div class="flex flex-wrap gap-4 mb-4">
				{#each project.tags as tag}
					<Tag>{tag}</Tag>
				{/each}
			</div>

			<img class="mb-4" src={urlFor(project.previewImage.asset).toString()} alt="" />

			<a
				href={`/projects/${project.slug.current}`}
				class="bg-deep-carrot-orange hover:bg-japanese-indigo px-3 py-2 rounded text-sm text-gray-50 font-bold"
			>
				Read more...
			</a>
		</div>
	{/each}
</div>

<Pagination totalPageCount={data.totalPageCount} currentPage={+data.currentPage} />
