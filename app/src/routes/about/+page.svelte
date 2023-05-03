<script lang="ts">
	function getYearsSince(pastDate: Date): number {
		const today = new Date();
		const yearsDifference = today.getFullYear() - pastDate.getFullYear();
		const isBeforeBirthday =
			(today.getMonth(), today.getDate()) < (pastDate.getMonth(), pastDate.getDate());
		return yearsDifference - +isBeforeBirthday;
	}

	export let data: any;

	const age = getYearsSince(new Date('1994-04-29'));
	const yearsExperience = getYearsSince(new Date('2015-09-01'));
</script>

<div
	class="animate__animated animate__fadeIn px-4 sm:px-0 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 xl:col-start-4 xl:col-span-5 2xl:col-start-4 2xl:col-span-4 flex justify-center py-16"
>
	<div>
		<h2 class="text-4xl font-bold text-deep-carrot-orange mb-6">About me</h2>
		<div
			class="markdown text-xl leading-relaxed mb-4"
			contenteditable="false"
			bind:innerHTML={data.about.content}
		>
		</div>
	</div>
</div>

<div
	class="hidden xl:flex xl:border-b-black xl:col-start-9 xl:col-span-4 2xl:col-start-8 2xl:col-span-5 items-end justify-center"
>
	<img src="profile-pic.jpg" alt="Profile" />
</div>
