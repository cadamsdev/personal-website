<script>
  import clsx from 'clsx';

  export let pathname;

  let open = false;
  let temp = true;

  function handleClick() {
    console.log('hello world!');
    open = !open;
  }
</script>

<div class="hidden sm:grid grid-cols-12 p-6">
  <div
    class="sm:col-span-1 md:col-span-2 lg:col-start-2 lg:col-span-2 xl:col-start-3 xl:col-span-3 2xl:col-start-4 2xl:col-span-2"
  >
    <a href="/"
      ><strong class="text-5xl font-oleoscript text-deep-carrot-orange"
        >CA</strong
      >
    </a>
  </div>

  <div
    class="hidden sm:block sm:col-start-3 sm:col-span-9 md:col-start-3 md:col-span-9 lg:col-start-4 lg:col-span-8 xl:col-start-6 xl:col-span-6 2xl:col-start-6 2xl:col-span-4"
  >
    <ul class="flex justify-between gap-2 uppercase font-bold text-2xl">
      <li>
        <a href="/about" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/about' })}>About</a>
      </li>

      <li>
        <a href="/blog" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/blog' })}>Blogs</a>
      </li>

      <li>
        <a href="/projects" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/projects' })}> Projects</a>
      </li>

      <li>
        <a href="/contact" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/contact' })}> Contact</a>
      </li>
    </ul>
  </div>
</div>

<div class="flex sm:hidden justify-between items-center p-6">
  <a href="/"
    ><strong class="text-5xl font-oleoscript text-deep-carrot-orange">CA</strong
    >
  </a>

  <button class="w-8 h-8" on:click={handleClick}>
    <iconify-icon
      icon={open ? 'fa6-solid:xmark' : 'fa6-solid:bars'}
      width="32"
      height="32"
    />
  </button>
</div>

{#if open}
  <div class="p-2 border-2">
    <ul class="flex flex-col gap-4 uppercase font-bold text-xl">
      <li>
        <a href="/about" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/about' })}>About</a>
      </li>

      <li>
        <a href="/blog" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/blog' })}>Blogs</a>
      </li>

      <li>
        <a href="/projects" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/projects' })}> Projects</a>
      </li>

      <li>
        <a href="/contact" class={clsx({ 'border-b-4 border-deep-carrot-orange': pathname === '/contact' })}> Contact</a>
      </li>
    </ul>
  </div>
{/if}
