<script lang="ts">
  import 'iconify-icon';
	import { DEV_URL, GITHUB_URL, LINKEDIN_URL } from '../settings';
  let today = new Date();
</script>

<div
  class="p-4 md:p-6 flex items-center justify-center bg-japanese-indigo text-deep-carrot-orange"
>
  <div class="text-center">
    <div class="flex justify-center gap-5 mb-2">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        class="hover:brightness-125"
        aria-label="Linkedin"
      >
        <iconify-icon icon="mdi:linkedin" width="32" height="32"
        ></iconify-icon>
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        class="hover:brightness-125"
        aria-label="Github"
      >
        <iconify-icon icon="mdi:github" width="32" height="32"></iconify-icon>
      </a>
      <a
        href={DEV_URL}
        target="_blank"
        rel="noreferrer"
        class="hover:brightness-125"
        aria-label="Dev.to"
      >
        <iconify-icon icon="material-symbols:logo-dev" width="32" height="32"
        ></iconify-icon>
      </a>
    </div>
    <div class="text-sm">Built and designed by Chad Adams</div>
    <div class="text-sm">Copyright &#169; {today.getFullYear()} Chad Adams</div>
  </div>
</div>
