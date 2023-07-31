import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import { STORYBLOK_TOKEN } from '../contants';
import storyBlokComponents from '../storyblok';

export async function load() {
	storyblokInit({
		accessToken: STORYBLOK_TOKEN,
		use: [apiPlugin],
		components: {
			...storyBlokComponents,
		},
		https: true,
		apiOptions: {
			region: 'us'
		}
	});

	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
