<svelte:head>
	<title>Chad Adams - Contact</title>
	<html lang="en" />
</svelte:head>

<div
	class="animate__animated animate__fadeIn py-16 px-4 sm:px-0 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 2xl:col-start-5 2xl:col-span-4"
>
	<h2 class="text-4xl font-bold text-deep-carrot-orange mb-6">Contact me</h2>

	<form name="contact" data-netlify="true" netlify-honeypot="firstName">
		<label for="firstName"> First name: </label>

		<input id="firstName" name="firstName" />

		<div class="mb-4">
			<label for="name" class="block text-japanese-indigo text-lg">Name:</label>
			<input id="name" name="name" class="px-5 py-3 rounded w-full" required />
		</div>

		<div class="mb-4">
			<label for="email" class="block text-japanese-indigo text-lg">Email:</label>
			<input id="email" name="email" class="px-5 py-3 rounded w-full" required />
		</div>

		<div class="mb-4">
			<label for="message" class="block text-japanese-indigo text-lg">Message:</label>
			<textarea
				id="message"
				name="message"
				rows="6"
				cols="50"
				class="px-5 py-3 rounded w-full"
				required
			/>
		</div>

		<div class="flex justify-end">
			<button type="submit" class="bg-deep-carrot-orange px-5 py-3 rounded text-gray-50 font-bold"
				>Send email</button
			>
		</div>
	</form>
</div>

<style>
	input[name='firstName'] {
		display: none;
	}

	label[for='firstName'] {
		display: none;
	}
</style>
