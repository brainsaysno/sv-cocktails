<script lang="ts">
	import CocktailCard from '../components/CocktailCard.svelte';

	let searchQuery = 'vodka';
	let response: Promise<any[]>;

	$: if (searchQuery.length > 3) {
		response = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.drinks);
				return data.drinks || [];
			});
	}
</script>

<section class="text-center">
	<div class="my-10">
		<h1 class="font-bold md:text-4xl lg:text-5xl text-3xl">🍸 Cocktail Search 🍸</h1>
		<h2 class="text-lg font-medium italic">Powered by Svelte</h2>
	</div>
	<div class="my-1">Search cocktail by name</div>
	<input
		type="text"
		class="text-center border-2 border-gray-600 rounded"
		bind:value={searchQuery}
	/>
	<div class="my-10">
		{#if searchQuery.length > 3}
			{#await response}
				<span>Loading...</span>
			{:then cocktails}
				<h2 class="text-3xl mb-7 font-semibold">Results</h2>
				<div class="w-full flex justify-around flex-wrap gap-4">
					{#each cocktails as cocktailData}
						<CocktailCard {cocktailData} />
					{:else}
						<h2>No results were found</h2>
					{/each}
				</div>
			{/await}
		{/if}
	</div>
</section>
