<script lang="ts">
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	type Slide = { src: string; alt: string; plate: string };

	let { slides, class: className = '' }: { slides: Slide[]; class?: string } = $props();

	let index = $state(0);

	$effect(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reducedMotion || slides.length < 2) return;

		const id = setInterval(() => {
			index = (index + 1) % slides.length;
		}, 4200);

		return () => clearInterval(id);
	});
</script>

<div class="relative {className}">
	{#each slides as slide, i (slide.src)}
		<div
			class="absolute inset-0 transition-opacity duration-[1100ms] ease-out"
			style="opacity:{i === index ? 1 : 0}"
			aria-hidden={i === index ? 'false' : 'true'}
		>
			<ImagePlaceholder src={slide.src} alt={slide.alt} plate={slide.plate} tone="dark" class="h-full w-full" />
		</div>
	{/each}

	{#if slides.length > 1}
		<div class="absolute right-4 bottom-3 z-10 flex gap-1.5">
			{#each slides as _, i}
				<button
					type="button"
					aria-label={`Show plate ${i + 1}`}
					aria-current={i === index}
					class="h-1.5 w-1.5 border border-cream/50 transition {i === index
						? 'bg-gold-soft'
						: 'bg-transparent hover:bg-cream/30'}"
					onclick={() => (index = i)}
				></button>
			{/each}
		</div>
	{/if}
</div>
