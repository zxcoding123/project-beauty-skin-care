<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	type Item = { name: string; desc: string; price: string; time: string; tag?: string };
	type Category = { name: string; items: Item[] };

	const categories: Category[] = [
		{
			name: 'Facials',
			items: [
				{
					name: 'The Belladonna Facial',
					tag: 'Signature',
					desc: 'Enzyme peel, cold-pressed cactus serum, gua sha sculpt, LED close.',
					price: '$185',
					time: '75 min'
				},
				{
					name: 'Enzyme Renewal',
					desc: 'Papaya-pineapple enzyme resurfacing for congested, dull skin.',
					price: '$110',
					time: '45 min'
				},
				{
					name: 'Gua Sha Sculpt',
					desc: 'Rose quartz lymphatic sculpt over warmed camellia oil.',
					price: '$140',
					time: '60 min'
				},
				{
					name: 'High-Tide Hydration',
					desc: 'Marine algae mask for dehydrated, barrier-stressed skin.',
					price: '$125',
					time: '50 min'
				}
			]
		},
		{
			name: 'Brows & Lashes',
			items: [
				{
					name: 'Brow Lamination + Tint',
					desc: 'Reshapes brow hair upward and fills sparse patches with tint.',
					price: '$95',
					time: '45 min'
				},
				{
					name: 'Lash Lift & Tint',
					desc: 'Perms and darkens natural lashes — no extensions, no upkeep.',
					price: '$110',
					time: '50 min'
				},
				{
					name: 'Microblading',
					tag: 'New clients',
					desc: 'Hair-stroke pigmentation, mapped to your bone structure.',
					price: '$450',
					time: '120 min'
				},
				{
					name: 'Henna Brow',
					desc: 'Stains skin and hair together for a fuller shadow that fades slow.',
					price: '$65',
					time: '30 min'
				}
			]
		},
		{
			name: 'Body Rituals',
			items: [
				{
					name: 'Dry Brush + Botanical Wrap',
					desc: 'Full-body exfoliation under a juniper-clay mineral wrap.',
					price: '$150',
					time: '60 min'
				},
				{
					name: 'Cupping Massage',
					desc: 'Silicone cupping over deep tissue for tension in the back and shoulders.',
					price: '$130',
					time: '50 min'
				}
			]
		},
		{
			name: 'Nails',
			items: [
				{
					name: 'Botanical Manicure',
					desc: 'Herbal soak, cuticle oil press, choice of gel or lacquer.',
					price: '$65',
					time: '45 min'
				},
				{
					name: 'Gel Pedicure',
					desc: 'Callus treatment, hot stone calf press, gel finish.',
					price: '$85',
					time: '60 min'
				}
			]
		}
	];

	let active = $state('All');
	const tabs = ['All', ...categories.map((c) => c.name)];
	const visible = $derived(
		active === 'All' ? categories : categories.filter((c) => c.name === active)
	);
</script>

<section id="menu" class="reveal bg-cream-2 py-20 md:py-28" use:reveal>
	<div class="mx-auto max-w-6xl px-5">
		<div class="mb-10 flex flex-col justify-between gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end">
			<div class="max-w-[52ch]">
				<p class="font-mono text-[0.7rem] tracking-[0.14em] text-rust uppercase">The Dispensary Menu</p>
				<h2 class="mt-3 text-3xl leading-tight text-ink sm:text-4xl">Treatments, priced plainly.</h2>
			</div>

			<div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.78rem] tracking-[0.03em] uppercase">
				{#each tabs as tab}
					<button
						class="border-b pb-0.5 whitespace-nowrap transition
							{active === tab
							? 'border-ink text-ink'
							: 'border-transparent text-text-muted hover:text-ink'}"
						onclick={() => (active = tab)}
					>
						{tab}
					</button>
				{/each}
			</div>
		</div>

		{#each visible as category, i (category.name)}
			<div class="reveal mt-10 first:mt-0" use:reveal={{ delay: i * 70 }}>
				<div class="mb-1 flex items-baseline justify-between gap-3">
					<h3 class="font-display text-xl text-ink italic sm:text-2xl">{category.name}</h3>
					<span class="font-mono text-[0.68rem] text-text-muted">{category.items.length} treatments</span>
				</div>

				{#each category.items as item}
					<div
						class="group -mx-4 flex justify-between gap-4 border-t border-ink/12 px-4 py-5 transition-colors duration-200 last:border-b hover:border-t-transparent hover:bg-forest active:bg-forest-deep"
					>
						<div>
							<div class="flex flex-wrap items-baseline gap-2.5">
								<b class="text-[1.02rem] font-semibold text-ink transition-colors duration-200 group-hover:text-cream">{item.name}</b>
								{#if item.tag}
									<span class="border border-rust/40 px-1.5 py-0.5 font-mono text-[0.58rem] tracking-wide text-rust uppercase transition-colors duration-200 group-hover:border-gold-soft/50 group-hover:text-gold-soft">
										{item.tag}
									</span>
								{/if}
							</div>
							<p class="mt-1 max-w-[42ch] text-[0.86rem] text-text-muted transition-colors duration-200 group-hover:text-cream/70">{item.desc}</p>
						</div>
						<div class="flex-none text-right font-mono">
							<span class="block text-[1.02rem] font-medium text-ink transition-colors duration-200 group-hover:text-cream">{item.price}</span>
							<span class="mt-0.5 block text-[0.74rem] text-text-muted transition-colors duration-200 group-hover:text-cream/60">{item.time}</span>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</section>
