<script lang="ts">
	import Pagination from '../../components/Pagination.svelte';
	import Tag from '../../components/Tag.svelte';
	export let data: any;
</script>

{#each data.blogs as blog}
	<div class="mb-12 animate__animated animate__fadeIn">
		<a href={`/blog/${blog.slug.current}`} class="hover:underline inline-block mb-2">
			<h2 class="text-2xl md:text-3xl">{blog.title}</h2>
		</a>

		<div class="mb-2">
			{blog.dateCreated &&
				new Intl.DateTimeFormat('en-US', {
					dateStyle: 'long'
				}).format(new Date(blog.dateCreated))}
		</div>

		<div class="text-sm mb-2">{blog.timeToRead} min read</div>

		<div class="flex flex-wrap gap-4 mb-4">
			{#each blog.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>

		<a
			href={`/blog/${blog.slug.current}`}
			class="p-2 rounded text-sm font-semibold"
		>
			Read more...
		</a>
	</div>
{/each}

<Pagination totalPageCount={data.totalPageCount} currentPage={+data.currentPage} />
