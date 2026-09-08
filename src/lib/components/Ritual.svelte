<script lang="ts">
	import ImagePlaceholder from './ImagePlaceholder.svelte';
	import { reveal } from '$lib/actions/reveal';
	import ritualTincture from '$lib/assets/ritual-tincture.jpg';
</script>

<section class="reveal bg-cream py-20 md:py-28" use:reveal>
	<div class="mx-auto max-w-6xl px-5">
		<div class="overflow-hidden border border-ink/10 bg-forest md:grid md:grid-cols-[0.9fr_1.1fr]">
			<ImagePlaceholder
				src={ritualTincture}
				alt="A hand-compounded cream dispensed fresh onto a fingertip"
				plate="PLATE 04 — FRESHLY COMPOUNDED"
				tone="dark"
				class="min-h-[240px]"
			/>

			<div class="relative z-10 p-8 sm:p-12">
				<p class="font-mono text-[0.7rem] tracking-[0.14em] text-gold-soft uppercase">The Signature Ritual</p>
				<h2 class="mt-4 text-3xl leading-[1.08] text-cream sm:text-[2.4rem]">
					Ninety minutes, from root to glow.
				</h2>
				<p class="mt-4 max-w-[48ch] text-[0.98rem] text-cream/75">
					Our longest offering moves through the full dispensary: dry brush, enzyme facial, gua
					sha sculpt, and a hand-blended take-home tincture for the week ahead. Booked six weeks
					out most months — reserve early.
				</p>
				<a
					href="#book"
					class="mt-8 inline-block border border-gold-soft px-6 py-3 font-mono text-[0.72rem] tracking-[0.1em] text-gold-soft uppercase transition hover:bg-gold-soft hover:text-ink"
				>
					Reserve the Ritual — $265
				</a>
			</div>
		</div>
	</div>
</section>
