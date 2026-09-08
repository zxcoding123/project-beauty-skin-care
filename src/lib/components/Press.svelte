<script lang="ts">
	import ImagePlaceholder from './ImagePlaceholder.svelte';
	import { reveal } from '$lib/actions/reveal';
	import testimonialBlur from '$lib/assets/testimonial-blur.jpg';
</script>

<section class="border-y border-ink/12 bg-cream">
	<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-7">
		<span class="font-mono text-[0.7rem] tracking-[0.1em] text-text-muted uppercase">As seen in</span>
		<div class="flex flex-wrap items-center gap-x-8 gap-y-2">
			{#each ['Vancouver Magazine', 'Georgia Straight', 'Western Living', 'The Kit'] as name}
				<span class="font-display text-[1rem] text-ink/55 italic">{name}</span>
			{/each}
		</div>
	</div>
</section>

<section class="reveal bg-cream py-16 md:py-20" use:reveal>
	<div class="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-start">
		<ImagePlaceholder src={testimonialBlur} alt="" class="h-16 w-16 flex-none" />

		<div>
			<div class="flex items-center gap-2.5 text-sm text-text-muted">
				<span class="tracking-[3px] text-gold">★★★★★</span>
				Verified booking, October 2025
			</div>
			<p class="mt-4 max-w-[58ch] font-display text-2xl leading-snug text-ink italic sm:text-[1.9rem]">
				"They asked what the weather did to my skin before they asked what treatment I wanted.
				Left with a jar of something they mixed in front of me — my skin hasn't looked like this
				since I was twenty-two."
			</p>
			<p class="mt-4 font-mono text-[0.8rem] text-text-muted">— Priya M., client since 2021</p>
		</div>
	</div>
</section>
