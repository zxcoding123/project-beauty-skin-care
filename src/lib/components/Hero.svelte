<script lang="ts">
	import HeroSlideshow from './HeroSlideshow.svelte';
	import { countUp } from '$lib/actions/countUp';
	import heroApplication from '$lib/assets/hero-application.jpg';
	import heroRegulars from '$lib/assets/hero-regulars.jpg';
	import heroDew from '$lib/assets/hero-dew.jpg';

	const slides = [
		{ src: heroApplication, alt: 'A hand smoothing a compounded cream over the back of another hand', plate: 'PLATE 01 — THE APPLICATION' },
		{ src: heroRegulars, alt: 'Three regular clients of the dispensary, side by side', plate: 'PLATE 02 — THE REGULARS' },
		{ src: heroDew, alt: 'A close study of dewy, hydrated skin after a facial', plate: 'PLATE 03 — AFTER THE FACIAL' }
	];
</script>

<section id="top" class="grain relative overflow-hidden bg-ink text-cream">
	<div class="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 pt-16 pb-14 md:grid-cols-[1.15fr_0.85fr] md:items-stretch md:gap-8 md:pt-20 md:pb-0">
		<div class="animate-rise">
			<p class="font-mono text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">
				Apothecary &amp; Beauty Bar — Gastown, Vancouver
			</p>
			<h1 class="mt-5 max-w-[13ch] text-[3.1rem] leading-[0.98] text-cream sm:text-[4.4rem]">
				Beauty,<br />
				steeped like a<br />
				<span class="font-normal text-gold-soft italic">tincture.</span>
			</h1>
			<p class="mt-6 max-w-[36ch] text-[1.05rem] leading-relaxed text-cream/70">
				Facials, brows, and body rituals formulated with botanical actives and unhurried hands.
				Est. 2018 on Water Street.
			</p>

			<div class="mt-9 flex flex-wrap items-center gap-5">
				<a
					href="#book"
					class="border border-gold-soft bg-gold-soft px-7 py-3.5 font-mono text-[0.74rem] tracking-[0.1em] text-ink uppercase transition hover:bg-transparent hover:text-gold-soft"
				>
					Book Now
				</a>
				<a
					href="tel:+16045550142"
					class="font-mono text-[0.78rem] tracking-[0.04em] text-cream/85 underline decoration-cream/30 underline-offset-4 transition hover:decoration-gold-soft"
				>
					Call (604) 555-0142
				</a>
			</div>
		</div>

		<HeroSlideshow {slides} class="animate-rise h-[280px] w-full md:h-full" />
	</div>

	<div class="relative z-10 mx-auto mt-14 max-w-6xl px-5">
		<dl class="grid grid-cols-3 divide-x divide-cream/15 border-t border-cream/15 py-6">
			<div class="pr-4">
				<dt class="font-mono text-[0.66rem] tracking-[0.1em] text-cream/50 uppercase">Rated</dt>
				<dd class="mt-1 font-display text-2xl text-cream">
					<span use:countUp={{ target: 4.9, decimals: 1 }}>0.0</span><span class="text-gold-soft">★</span>
				</dd>
			</div>
			<div class="px-4">
				<dt class="font-mono text-[0.66rem] tracking-[0.1em] text-cream/50 uppercase">On Water St.</dt>
				<dd class="mt-1 font-display text-2xl text-cream">
					<span use:countUp={{ target: 7 }}>0</span> yrs
				</dd>
			</div>
			<div class="pl-4">
				<dt class="font-mono text-[0.66rem] tracking-[0.1em] text-cream/50 uppercase">Actives used</dt>
				<dd class="mt-1 font-display text-2xl text-cream">
					<span use:countUp={{ target: 24 }}>0</span>
				</dd>
			</div>
		</dl>
	</div>
</section>
