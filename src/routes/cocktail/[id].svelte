<script lang="ts">
	import type Cocktail from 'src/types/Cocktail';
	export let cocktailData: Cocktail;
</script>

<section class="flex flex-col items-center">
	<h1 class="text-3xl font-bold font-sans">{cocktailData.strDrink}</h1>
	<div>{JSON.stringify(cocktailData)}</div>
</section>
