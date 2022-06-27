<script lang="ts">
	interface CocktailInterface {
		strDrink: string;
		idDrink: string;
		strDrinkThumb: string;
	}
	export let cocktailData: CocktailInterface;
</script>

<a href="/cocktail/{cocktailData.idDrink}">
	<div class="overflow-hidden w-80 border-gray-500 border rounded-md">
		<img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
		<div class="py-3">
			<div>{cocktailData.strDrink}</div>
			<div>{cocktailData.idDrink}</div>
		</div>
	</div>
</a>
