<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Philosophy from '$lib/components/Philosophy.svelte';
	import Moment from '$lib/components/Moment.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Ritual from '$lib/components/Ritual.svelte';
	import Press from '$lib/components/Press.svelte';
	import Booking from '$lib/components/Booking.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileBar from '$lib/components/MobileBar.svelte';
	import ClickSpark from '$lib/components/ClickSpark.svelte';
</script>

<svelte:head>
	<title>Belladonna — Beauty Apothecary</title>
	<meta
		name="description"
		content="Belladonna Beauty Apothecary — facials, brows, and body rituals compounded for you on Water Street, Gastown."
	/>
</svelte:head>

<ClickSpark sparkColor="#ab8140" sparkSize={9} sparkRadius={18} sparkCount={10} duration={420}>
	<div class="bg-cream pb-20 md:pb-0">
		<Nav />
		<Hero />
		<Philosophy />
		<Moment />
		<Menu />
		<Ritual />
		<Press />
		<Booking />
		<Footer />
		<MobileBar />
	</div>
</ClickSpark>
