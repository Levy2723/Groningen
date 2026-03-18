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
			<li class="divalysz"><a href="/divalysz">Belépés az Élilyen Kommunikációs Diválysz™-hoz</a></li>
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


<style>

	a {
		text-decoration: none;
		
	}

	header nav{

		width: 100%;
		height: 100px;
		align-content: center;

		& ul {
			list-style-type: none;
			margin: auto;
			max-width: 800px;
			display: flex;
			place-content: space-around;
			
			& li {
				display: inline;
				transition: .3s all ease-in-out;
				border: 1px solid transparent;
				cursor: pointer;
				padding: 12px 0;
				
				&.divalysz {
					background-color: #333;
					border-radius: 6px;
					
					&:hover {
						color: #fff;
						background-color: #000;
						border: 1px solid #ffea00;
					}
					
				}
				&:hover {
					color: #ffea00;
					text-decoration: underline;
				}
				
				
				a {
					padding: 12px 24px;
					 color: inherit;
					 text-decoration: inherit;
					 font-weight: bold;

				}

			}

		}

	}

	footer {
		position: absolute;
		bottom: 0;
	}

</style>