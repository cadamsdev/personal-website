<script lang="ts">
	import 'iconify-icon';
	import clsx from 'clsx';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';

	export let component: any = null;

	let open = false;

	onMount(() => {
		if (browser) {
			window.addEventListener('mousedown', handleClickOutside);
			window.addEventListener('touchstart', handleClickOutside);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('mousedown', handleClickOutside);
			window.removeEventListener('touchstart', handleClickOutside);
		}
	});

	function toggleMenu() {
		open = !open;
	}

	function closeMenu() {
		open = false;
	}

	function handleClickOutside(event: Event) {
		if (component?.contains(event.target)) {
			return;
		}

		closeMenu();
	}
</script>

<div bind:this={component} class="relative">
	<div class="hidden sm:grid grid-cols-12 p-6">
		<div
			class="sm:col-span-1 md:col-span-2 lg:col-start-2 lg:col-span-2 xl:col-start-3 xl:col-span-3 2xl:col-start-4 2xl:col-span-2"
		>
			<a href="/" on:click={closeMenu}><strong class="text-5xl font-oleoscript text-deep-carrot-orange">CA</strong> </a>
		</div>

		<div
			class="hidden sm:block sm:col-start-3 sm:col-span-9 md:col-start-3 md:col-span-9 lg:col-start-4 lg:col-span-8 xl:col-start-6 xl:col-span-6 2xl:col-start-6 2xl:col-span-4"
		>
			<ul class="flex justify-between gap-2 uppercase font-bold text-2xl">
				<li>
					<a
						href="/about"
						on:click={closeMenu}
						class={clsx({
							'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/about'
						})}>About</a
					>
				</li>

				<li>
					<a
						href="/blog"
            on:click={closeMenu}
						class={clsx({
							'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/blog'
						})}>Blogs</a
					>
				</li>

				<li>
					<a
						href="/projects"
            on:click={closeMenu}
						class={clsx({
							'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/projects'
						})}
					>
						Projects</a
					>
				</li>

				<li>
					<a
						href="/contact"
            on:click={closeMenu}
						class={clsx({
							'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/contact'
						})}
					>
						Contact</a
					>
				</li>
			</ul>
		</div>
	</div>

	<div class="flex sm:hidden justify-between items-center p-6">
		<a href="/" on:click={closeMenu}
			><strong class="text-5xl font-oleoscript text-deep-carrot-orange">CA</strong>
		</a>

		<button class="w-8 h-8 touch-manipulation" on:click={toggleMenu}>
			<iconify-icon icon={open ? 'fa6-solid:xmark' : 'fa6-solid:bars'} width="32" height="32" />
		</button>
	</div>

	{#if open}
		<div class="block border-2 sm:hidden absolute z-10 w-full bg-bright-gray">
			<ul class="uppercase font-bold text-xl">
				<a href="/about" on:click={closeMenu}>
					<li class="p-4 text-center">
						<span
							class={clsx({
								'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/about'
							})}
						>
							About
						</span>
					</li>
				</a>

				<a href="/blog" on:click={closeMenu}>
					<li class="p-4 text-center">
						<span
							class={clsx({
								'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/blog'
							})}
						>
							Blogs
						</span>
					</li>
				</a>

				<a href="/projects" on:click={closeMenu}>
					<li class="p-4 text-center">
						<span
							class={clsx({
								'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/projects'
							})}>Projects</span
						>
					</li>
				</a>

				<a href="/contact" on:click={closeMenu}>
					<li class="p-4 text-center">
						<span
							class={clsx({
								'border-b-4 border-deep-carrot-orange': $page.url.pathname === '/contact'
							})}>Contact</span
						>
					</li>
				</a>

				<li class="flex items-center justify-center gap-4 text-deep-carrot-orange my-4">
					<a
						href="https://www.linkedin.com/in/chadalen/"
						target="_blank"
						rel="noreferrer"
						class="hover:brightness-125"
					>
						<iconify-icon icon="mdi:linkedin" width="48" height="48" />
					</a>
					<a
						href="https://github.com/chadalen"
						target="_blank"
						rel="noreferrer"
						class="hover:brightness-125"
					>
						<iconify-icon icon="mdi:github" width="48" height="48" />
					</a>
					<a
						href="https://dev.to/cadams"
						target="_blank"
						rel="noreferrer"
						class="hover:brightness-125"
					>
						<iconify-icon icon="material-symbols:logo-dev" width="48" height="48" />
					</a>
				</li>
			</ul>
		</div>
	{/if}
</div>
