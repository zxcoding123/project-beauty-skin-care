<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import atmosphere from '$lib/assets/atmosphere-motion.jpg';
</script>

<section class="reveal relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[21/9]" use:reveal>
	<img
		src={atmosphere}
		alt="A soft, motion-blurred study of skin along the neck and collarbone"
		loading="lazy"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent"></div>

	<div class="relative z-10 mx-auto flex h-full max-w-6xl items-end px-5 pb-9 sm:pb-12">
		<p class="max-w-[24ch] font-display text-2xl leading-snug text-cream italic sm:text-[1.9rem]">
			Stillness has a texture. So does skin that's been listened to.
		</p>
	</div>
</section>
