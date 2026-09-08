<script lang="ts">
	let {
		src = '',
		alt = '',
		label = 'Image',
		plate = '',
		tone = 'light',
		class: className = ''
	}: {
		src?: string;
		alt?: string;
		label?: string;
		plate?: string;
		tone?: 'light' | 'dark';
		class?: string;
	} = $props();

	const dark = $derived(tone === 'dark');
</script>

<div
	class="relative overflow-hidden border {dark
		? 'border-cream/20 bg-ink'
		: 'border-ink/15 bg-cream-2'} {className}"
>
	{#if src}
		<img {src} {alt} loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
		{#if plate}
			<div class="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink/70 to-transparent"></div>
		{/if}
	{:else}
		<div
			class="absolute inset-0 {dark
				? 'bg-[repeating-linear-gradient(135deg,rgba(230,222,199,0.05)_0px,rgba(230,222,199,0.05)_1px,transparent_1px,transparent_10px)]'
				: 'bg-[repeating-linear-gradient(135deg,rgba(24,42,28,0.045)_0px,rgba(24,42,28,0.045)_1px,transparent_1px,transparent_10px)]'}"
		></div>
		<div class="flex h-full flex-col items-center justify-center gap-2.5 p-6 text-center">
			<svg
				width="26"
				height="26"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.3"
				class={dark ? 'text-cream/35' : 'text-ink/28'}
			>
				<rect x="3" y="5" width="18" height="14" rx="1" />
				<circle cx="9" cy="10.5" r="1.8" />
				<path d="M21 16.5l-5.2-5.2a1 1 0 0 0-1.4 0L9 16.5" />
			</svg>
			<span class="max-w-[18ch] font-mono text-[0.62rem] tracking-[0.08em] uppercase {dark ? 'text-cream/45' : 'text-text-muted'}">
				{label}
			</span>
		</div>
	{/if}

	<span class="absolute top-0 left-0 h-3 w-3 border-t {dark || src ? 'border-cream/45' : 'border-ink/35'} border-l"></span>
	<span class="absolute top-0 right-0 h-3 w-3 border-t {dark || src ? 'border-cream/45' : 'border-ink/35'} border-r"></span>
	<span class="absolute bottom-0 left-0 h-3 w-3 border-b {dark || src ? 'border-cream/45' : 'border-ink/35'} border-l"></span>
	<span class="absolute right-0 bottom-0 h-3 w-3 border-b {dark || src ? 'border-cream/45' : 'border-ink/35'} border-r"></span>

	{#if plate}
		<span class="absolute bottom-3 left-4 z-10 font-mono text-[0.6rem] tracking-wide {dark || src ? 'text-cream/70' : 'text-ink/30'}">
			{plate}
		</span>
	{/if}
</div>
