<script lang="ts">
	function getYearsSince(pastDate: Date): number {
		const today = new Date();
		const yearsDifference = today.getFullYear() - pastDate.getFullYear();
		const isBeforeBirthday =
			(today.getMonth(), today.getDate()) < (pastDate.getMonth(), pastDate.getDate());
		return yearsDifference - +isBeforeBirthday;
	}

	const age = getYearsSince(new Date('1994-04-29'));
	const yearsExperience = getYearsSince(new Date('2015-09-01'));
</script>

<div
	class="animate__animated animate__fadeIn px-4 sm:px-0 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 xl:col-start-4 xl:col-span-5 2xl:col-start-4 2xl:col-span-4 flex justify-center py-16"
>
	<div>
		<h2 class="text-4xl font-bold text-deep-carrot-orange mb-6">About me</h2>
		<p class="text-xl leading-relaxed mb-4">
			I am a {age} year old Software Developer from Bluffton, SC. I build all sorts of software but I
			mainly specialize in full stack web development. I have been professionally developing software
			for over
			{yearsExperience} years now. My passion has been creating user interfaces because I enjoy making
			software visually appealing and giving users a better experience.
		</p>

		<p class="text-xl leading-relaxed mb-4">
			I have an associates degree in Computer Programming from <a
				class="underline hover:no-underline text-deep-carrot-orange"
				href="https://www.sctcc.edu/"
				target="_blank" rel="noreferrer">St. Cloud Technical and Community College</a
			>
			located in St. Cloud, MN. I also currently work as a Senior Software Engineer at
			<a
				class="underline hover:no-underline text-deep-carrot-orange"
				href="https://www.experian.com/"
				target="_blank" rel="noreferrer">Experian</a
			>.
		</p>

		<p class="text-xl leading-relaxed mb-4">
			A little bit more about myself. I love open source software. I'm a huge fan of Linux. My
			favorite linux distro is <a
				class="underline hover:no-underline text-deep-carrot-orange"
				href="https://neon.kde.org/"
				target="_blank" rel="noreferrer">KDE Neon</a
			>.
		</p>
	</div>
</div>

<div
	class="hidden xl:flex xl:border-b-black xl:col-start-9 xl:col-span-4 2xl:col-start-8 2xl:col-span-5 items-end justify-center"
>
	<img src="profile-pic.jpg" alt="Profile" />
</div>
