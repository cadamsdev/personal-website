<script lang="ts">
  import { storyblokEditable, StoryblokComponent, type SbBlokData } from "@storyblok/svelte";

  interface BlockData extends SbBlokData {
    body: any[];
  }

  export let blok: BlockData;
</script>

{#key blok}
  <div use:storyblokEditable={blok} class="h-full">
    {#each blok.body as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
{/key}
