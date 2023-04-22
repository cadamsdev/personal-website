<script lang="ts">
  import Tag from "../../components/Tag.svelte";
  export let data: any;
</script>

{#each data.blogs as blog}
  <div class="mb-12 animate__animated animate__fadeIn">
    <a href={`/blog/${blog.slug.current}`} class="hover:underline">
      <h2 class="mb-2 text-2xl md:text-3xl">{blog.title}</h2>
    </a>
    <div class='text-lg'>{blog.excerpt}</div>

    <div class='text-sm'>
      {blog.dateCreated &&
        new Intl.DateTimeFormat('en-US', {
          dateStyle: 'long',
        }).format(new Date(blog.dateCreated))}
    </div>

    <div class='text-sm mb-2'>{blog.timeToRead} min read</div>

    <div class="flex gap-4 mb-4">
      {#each blog.tags as tag}
        <Tag>{tag}</Tag>
      {/each}
    </div>

    <a href={`/blog/${blog.slug.current}`} class='bg-deep-carrot-orange hover:bg-japanese-indigo px-3 py-2 rounded text-sm text-gray-50 font-bold'>
      Read more...
    </a>
  </div>
{/each}
