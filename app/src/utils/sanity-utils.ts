import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

let client: SanityClient;

export function getSanityClient(): SanityClient {
  if (client) {
    return client;
  }

  client = createClient({
		projectId: 'dq9cuhrh',
		dataset: process.env.NODE_ENV === 'production' ? 'production' : 'staging',
		apiVersion: '2021-10-21',
		useCdn: true
	});

  return client;
}

export function urlFor(source: any) {
  const builder = imageUrlBuilder(getSanityClient());
	return builder.image(source);
}
