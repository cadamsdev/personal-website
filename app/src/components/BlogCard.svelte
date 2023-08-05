
<script lang="ts">
  import Tag from '../components/Tag.svelte';
	import { formatDate } from '../utils/date-utils';

	type Props = {
    full_slug: string;
    content: {
      title: string;
      dateCreated: string;
      tags: string[];
    }
	}

	export let blog: Props;
</script>

<div class="mb-12 animate__animated animate__fadeIn">
  <a href={blog.full_slug} class="hover:underline inline-block mb-2">
    <h2 class="text-2xl md:text-3xl">{blog.content.title}</h2>
  </a>

  <div class="mb-2">
    {formatDate(blog.content.dateCreated)}
  </div>


  <!-- <div class="text-sm mb-2">{blog.timeToRead} min read</div> -->

  <div class="flex flex-wrap gap-4 mb-4">
    {#each blog.content.tags as tag}
      <Tag>{tag}</Tag>
    {/each}
  </div>

  <a
    href={blog.full_slug}
    class="p-2 rounded text-sm font-semibold"
  >
    Read more...
  </a>
</div>
