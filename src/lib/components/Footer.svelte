<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<footer class="reveal border-t border-ink/12 bg-cream py-12" use:reveal>
	<div class="mx-auto flex max-w-6xl flex-col gap-7 px-5">
		<span
			class="flex h-9 w-9 items-center justify-center border border-ink font-display text-[0.92rem] text-ink italic"
			aria-label="Belladonna"
		>
			BD
		</span>

		<div class="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[0.78rem] tracking-[0.03em] text-text-muted uppercase">
			<a href="#menu" class="transition hover:text-ink">Menu</a>
			<a href="#ritual" class="transition hover:text-ink">Philosophy</a>
			<a href="#book" class="transition hover:text-ink">Book</a>
			<a href="tel:+16045550142" class="transition hover:text-ink">(604) 555-0142</a>
			<a href="#visit" class="transition hover:text-ink">228 Water St, Vancouver</a>
		</div>

		<div class="flex flex-wrap justify-between gap-2 border-t border-ink/12 pt-6 font-mono text-[0.68rem] tracking-wide text-text-muted">
			<span>© 2026 BELLADONNA BEAUTY APOTHECARY</span>
			<span>DEMO BUILD — FOR CONCEPT REVIEW ONLY</span>
		</div>
	</div>
</footer>
