import type Cocktail from 'src/types/Cocktail';

export async function get({ params }: { params: any }) {
	const { id: cocktailId } = params;

	const cocktailData: Cocktail = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
	)
		.then((res) => res.json())
		.then((data) => data.drinks[0]);
	console.log('🚀 ~ cocktailData', cocktailData);

	return {
		status: 200,
		body: { cocktailData }
	};
}
