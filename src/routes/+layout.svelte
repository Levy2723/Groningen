<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav>
	
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	
	</nav>
</header>


<main>
	
	{@render children()}

</main>


<footer>
	<p>Powered by: CIA vagy nemtom</p>
</footer>