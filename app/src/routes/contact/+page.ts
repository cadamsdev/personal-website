import { PAGE_TITLE } from "../../utils/settings";

export const prerender = true;

export function load() {
	return {
		seo: {
			title: `${PAGE_TITLE} - Contact`
		}
	};
}
