<script lang="ts">
	import Pagination from '../../components/Pagination.svelte';
	import ProjectCard from '../../components/ProjectCard.svelte';

  export let data;
</script>

{#each data.stories as project}
	<ProjectCard project={project} />
{/each}

<Pagination totalPageCount={data.totalPageCount} currentPage={data.currentPage} />
