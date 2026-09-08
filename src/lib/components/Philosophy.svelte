<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const marks = [
		{ label: 'Compounded', sub: 'Blended fresh from the apothecary wall at each visit, never pre-bottled.' },
		{ label: 'Botanical', sub: 'Actives grown on our rooftop or foraged along the Sea-to-Sky corridor.' },
		{ label: 'Unhurried', sub: 'Every ritual runs a minimum of forty-five minutes — no clock-watching.' }
	];
</script>

<section id="ritual" class="reveal bg-cream py-20 md:py-28" use:reveal>
	<div class="mx-auto max-w-6xl px-5">
		<div class="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
			<div>
				<p class="font-mono text-[0.7rem] tracking-[0.14em] text-rust uppercase">The Philosophy</p>
				<h2 class="mt-3 text-3xl leading-[1.08] text-ink sm:text-[2.6rem]">
					Every treatment starts in the dispensary, not the treatment room.
				</h2>
			</div>

			<div class="flex flex-col">
				<p class="max-w-[56ch] pb-8 text-[1.05rem] leading-relaxed text-text-muted">
					Before a single hand touches your skin, your esthetician reads it — barometric
					pressure, cycle, stress, the last product you switched to — and blends your serum from
					our open apothecary wall that day.
				</p>

				{#each marks as mark, i}
					<div
						class="reveal grid grid-cols-[8rem_1fr] gap-6 border-t border-ink/12 py-6 last:border-b sm:grid-cols-[10rem_1fr]"
						use:reveal={{ delay: i * 90 }}
					>
						<span class="font-display text-lg text-ink italic">{mark.label}</span>
						<p class="max-w-[46ch] text-[0.94rem] text-text-muted">{mark.sub}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
