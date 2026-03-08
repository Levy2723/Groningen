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
			<li><a href="/">Főoldal</a></li>
			<li><a href="/divalysz">Belépés az Élilyen Kommunikációs Diválysz™-hoz</a></li>
			<li><a href="/about">Az Élilyen™-ekről</a></li>
		</ul>
	
	</nav>
</header>


<main>
	
	{@render children()}

</main>


<footer>
	<p>Powered by: CIA vagy nemtom</p>
</footer>