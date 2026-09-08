<script lang="ts">
	let open = $state(false);
</script>

<header class="sticky top-0 z-30 border-b border-ink/10 bg-cream/92 backdrop-blur-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
		<a href="#top" class="flex items-center gap-2" aria-label="Belladonna — home">
			<span
				class="flex h-9 w-9 items-center justify-center border border-ink font-display text-[0.92rem] text-ink italic"
			>
				BD
			</span>
		</a>

		<nav class="hidden items-center gap-9 font-mono text-[0.72rem] tracking-[0.08em] text-text-muted uppercase md:flex">
			<a href="#menu" class="border-b border-transparent pb-0.5 transition hover:border-forest hover:text-ink">Menu</a>
			<a href="#ritual" class="border-b border-transparent pb-0.5 transition hover:border-forest hover:text-ink">The Ritual</a>
			<a href="#book" class="border-b border-transparent pb-0.5 transition hover:border-forest hover:text-ink">Book</a>
			<a href="#visit" class="border-b border-transparent pb-0.5 transition hover:border-forest hover:text-ink">Visit</a>
		</nav>

		<div class="hidden items-center gap-4 md:flex">
			<a
				href="tel:+16045550142"
				aria-label="Call Belladonna"
				class="font-mono text-[0.78rem] text-text-muted transition hover:text-ink"
			>
				(604) 555-0142
			</a>
			<a
				href="#book"
				class="border border-ink bg-ink px-5 py-2.5 font-mono text-[0.72rem] tracking-[0.1em] text-cream uppercase transition hover:bg-forest hover:border-forest"
			>
				Book Now
			</a>
		</div>

		<button
			class="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink md:hidden"
			aria-label="Toggle menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			{#if open}
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
					><path d="M6 6l12 12M18 6L6 18" /></svg
				>
			{:else}
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
					><path d="M4 7h16M4 12h16M4 17h16" /></svg
				>
			{/if}
		</button>
	</div>

	{#if open}
		<nav class="flex flex-col border-t border-ink/10 bg-cream font-mono text-sm tracking-[0.04em] uppercase md:hidden">
			<a href="#menu" class="border-b border-ink/8 px-5 py-3.5 text-text-muted" onclick={() => (open = false)}>Menu</a>
			<a href="#ritual" class="border-b border-ink/8 px-5 py-3.5 text-text-muted" onclick={() => (open = false)}>The Ritual</a>
			<a href="#book" class="border-b border-ink/8 px-5 py-3.5 text-text-muted" onclick={() => (open = false)}>Book</a>
			<a href="#visit" class="px-5 py-3.5 text-text-muted" onclick={() => (open = false)}>Visit</a>
		</nav>
	{/if}
</header>
