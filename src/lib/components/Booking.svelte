<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const services = [
		'The Belladonna Facial — $185',
		'Brow Lamination + Tint — $95',
		'Lash Lift & Tint — $110',
		'Cupping Massage — $130',
		'The Signature Ritual — $265',
		'Not sure — recommend something'
	];

	let name = $state('');
	let phone = $state('');
	let date = $state('');
	let service = $state(services[0]);
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitted = true;
	}
</script>

<section id="book" class="reveal bg-cream-2 py-20 md:py-28" use:reveal>
	<div class="mx-auto max-w-6xl px-5">
		<div class="mb-10 max-w-[52ch]">
			<p class="font-mono text-[0.7rem] tracking-[0.14em] text-rust uppercase">Reserve Your Ritual</p>
			<h2 id="visit" class="mt-3 text-3xl leading-tight text-ink sm:text-4xl">Book in under a minute.</h2>
		</div>

		<div class="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
			<form
				class="border border-ink/12 bg-paper p-7 shadow-card sm:p-9"
				onsubmit={handleSubmit}
			>
				<h2 class="text-2xl text-ink">Request an appointment</h2>

				{#if submitted}
					<div class="mt-5 border border-forest/30 bg-forest/8 p-4 text-sm text-forest-deep">
						Thanks, {name || 'friend'}! We'll text {phone || 'you'} within 2 hours to confirm.
					</div>
				{/if}

				<div class="mt-5">
					<label for="svc" class="mb-1.5 block font-mono text-xs tracking-wide text-text-muted uppercase">
						Treatment
					</label>
					<select
						id="svc"
						bind:value={service}
						class="w-full rounded-none border border-ink/20 bg-cream px-3.5 py-3 text-[0.92rem] focus:border-forest focus:ring-forest"
					>
						{#each services as s}
							<option>{s}</option>
						{/each}
					</select>
				</div>

				<div class="mt-4">
					<label for="date" class="mb-1.5 block font-mono text-xs tracking-wide text-text-muted uppercase">
						Preferred date
					</label>
					<input
						id="date"
						type="date"
						bind:value={date}
						class="w-full rounded-none border border-ink/20 bg-cream px-3.5 py-3 text-[0.92rem] focus:border-forest focus:ring-forest"
					/>
				</div>

				<div class="mt-4">
					<label for="name" class="mb-1.5 block font-mono text-xs tracking-wide text-text-muted uppercase">
						Name
					</label>
					<input
						id="name"
						type="text"
						placeholder="Full name"
						bind:value={name}
						class="w-full rounded-none border border-ink/20 bg-cream px-3.5 py-3 text-[0.92rem] focus:border-forest focus:ring-forest"
					/>
				</div>

				<div class="mt-4">
					<label for="phone" class="mb-1.5 block font-mono text-xs tracking-wide text-text-muted uppercase">
						Phone
					</label>
					<input
						id="phone"
						type="tel"
						placeholder="(604) 555-0142"
						bind:value={phone}
						class="w-full rounded-none border border-ink/20 bg-cream px-3.5 py-3 text-[0.92rem] focus:border-forest focus:ring-forest"
					/>
				</div>

				<button
					type="submit"
					class="mt-6 w-full border border-ink bg-ink py-3.5 font-mono text-[0.78rem] tracking-[0.08em] text-cream uppercase transition hover:bg-forest hover:border-forest active:scale-[0.99]"
				>
					Request Appointment
				</button>
				<p class="mt-3 text-center text-xs text-text-muted">
					We confirm by text within 2 hours during open hours.
				</p>
			</form>

			<div class="grain bg-ink p-7 text-cream sm:p-9">
				<h3 class="flex items-center gap-2 text-lg text-cream">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
						><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg
					>
					Water Street Dispensary
				</h3>

				<div class="flex gap-3 border-b border-cream/10 py-4">
					<svg class="mt-0.5 h-[18px] w-[18px] flex-none text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
						><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg
					>
					<div>
						<b class="block text-sm font-semibold text-cream">228 Water Street</b>
						<span class="text-[0.82rem] text-cream/60">Gastown, Vancouver BC V6B 1A6</span>
					</div>
				</div>

				<div class="flex gap-3 border-b border-cream/10 py-4">
					<svg class="mt-0.5 h-[18px] w-[18px] flex-none text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
						><path
							d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
						/></svg
					>
					<div>
						<b class="block text-sm font-semibold text-cream">(604) 555-0142</b>
						<span class="text-[0.82rem] text-cream/60">Call or text for same-week openings</span>
					</div>
				</div>

				<table class="mt-2 w-full text-[0.86rem]">
					<tbody>
						<tr class="text-cream/75"><td class="py-1.5">Tue – Fri</td><td class="py-1.5 text-right font-mono text-cream">10:00 – 19:00</td></tr>
						<tr class="text-cream/75"><td class="py-1.5">Saturday</td><td class="py-1.5 text-right font-mono text-cream">9:00 – 17:00</td></tr>
						<tr class="text-cream/75"><td class="py-1.5">Sunday</td><td class="py-1.5 text-right font-mono text-cream">11:00 – 16:00</td></tr>
						<tr class="text-cream/75"><td class="py-1.5">Monday</td><td class="py-1.5 text-right font-mono text-cream">Closed</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>
