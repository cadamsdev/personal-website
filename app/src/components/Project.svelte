<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import md from 'markdown-it';
	import mdUtils from 'markdown-it/lib/common/utils';
	import hljs from 'highlight.js';
	import mila from 'markdown-it-link-attributes';

	import Tag from '../components/Tag.svelte';

	import 'highlight.js/styles/atom-one-dark.css';
	import '../styles/markdown.css';

	const markdown = md({
		breaks: true,
		linkify: true,
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return (
						'<pre class="hljs"><code>' +
						hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
						'</code></pre>'
					);
				} catch (__) { /* empty */ }
			}

			return '<pre class="hljs"><code>' + mdUtils.escapeHtml(str) + '</code></pre>';
		}
	});

	markdown.use(mila, {
		attrs: {
			target: '_blank',
			rel: 'noopener'
		}
	});


	type BlokData = {
		title: string;
    description: string;
		content: string;
		tags: string[];
	};

	export let blok: BlokData;
	$: articleHTML = markdown.render(blok.content || '');
</script>

<div use:storyblokEditable={blok} class="max-w-prose mx-auto">
	{#if blok}
    <div class="mb-8">
			<h1 class="text-4xl mb-2">
				{blok.title || ''}
			</h1>

      {#if blok.description}
				<div class="mb-2">{blok.description}</div>
			{/if}

      <div class="flex flex-wrap gap-4">
        {#each blok?.tags || [] as tag}
          <Tag>{tag}</Tag>
        {/each}
      </div>
    </div>

    <article class="markdown" contenteditable="false" bind:innerHTML={articleHTML} />
	{/if}
</div>
