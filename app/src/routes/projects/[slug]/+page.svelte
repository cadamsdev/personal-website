<script lang="ts">
  import 'highlight.js/styles/atom-one-dark.css';
  import '../../../styles/markdown.css';
  import { onMount } from "svelte";
  import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";

  export let data;

  onMount(() => {
    if (data.story) {
      useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
    }
  });
</script>

{#if data.story}
  <StoryblokComponent blok={data.story.content} />
{/if}
