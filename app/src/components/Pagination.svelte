<script lang="ts">
	import { goto } from '$app/navigation';
	export let totalPageCount: number;
	export let currentPage: number;

	const prev = () => {
    if (currentPage - 1 <= 0) {
      return;
    }

    currentPage--;
    goto(`${window.location.pathname}?page=${currentPage}`);
	};

	const next = () => {
    if (currentPage + 1 > totalPageCount) {
      return;
    }

    currentPage++;
    goto(`${window.location.pathname}?page=${currentPage}`);
	};
</script>

<div class="pagination">
	<button on:click={prev} disabled={currentPage === 1}>Prev</button>
	<span>page {currentPage} of {totalPageCount}</span>
	<button on:click={next} disabled={currentPage >= totalPageCount} >Next</button>
</div>

<style>
	.pagination {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	button {
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		background-color: #fff;
		cursor: pointer;
	}

  button:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.3);
  }

	button:hover:not(:disabled) {
		background-color: #ccc;
	}
	span {
		font-size: 1.25rem;
	}
</style>
