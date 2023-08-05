<script lang="ts">
	import BlogCard from '../../components/BlogCard.svelte';
	import Pagination from '../../components/Pagination.svelte';

  export let data;
</script>

{#each data.stories as blog}
	<BlogCard blog={blog} />
{/each}

<Pagination totalPageCount={data.totalPageCount} currentPage={1} />

