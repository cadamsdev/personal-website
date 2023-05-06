<script lang="ts">
	import { urlFor } from "../utils/sanity-utils";

	export let data: any;
</script>

<div
	class="animate__animated animate__fadeInLeft col-span-12 pt-16 pb-8 px-4 sm:py-16 md:py-0 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-5 2xl:col-start-4 2xl:col-span-4 flex justify-center items-center"
>
	<div class="text-center md:text-left">
		<h2 class="text-2xl xl:text-4xl mb-4 md:mb-7">{data.hero.introHeading}</h2>
		<h1
			class="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 md:mb-7 text-deep-carrot-orange font-bold"
		>
			{data.hero.nameHeading}
		</h1>
		<p class="text-xl xl:text-2xl">
			{data.hero.description}
		</p>
	</div>
</div>

<div
	class="col-span-12 md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 2xl:col-start-8 2xl:col-span-5 flex items-end justify-center"
>
	<img src={urlFor(data?.hero?.profileImage?.asset).toString()} alt="" />
</div>
