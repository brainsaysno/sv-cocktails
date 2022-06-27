<script>
	import '../app.css';
</script>

<nav class="md:flex md:items-center md:flex-row text-center h-fit px-20 py-6 flex-col gap-10">
	<div class="mb-10 md:mb-auto whitespace-nowrap">
		<a href="/" class="text-2xl font-bold">🍸🥃</a>
	</div>
	<div class="flex md:justify-end w-full gap-10 justify-center">
		<a class="  border rounded border-gray-400 px-5 py-2" href="/"> Home </a>
		<a class="  border rounded border-gray-400 px-5 py-2" href="/"> Test </a>
	</div>
</nav>
<main class="md:mx-48 mx-24">
	<slot />
</main>
<footer class=" bg-blue-200 text-center h-10 flex justify-center items-center">@nicoo_182</footer>
