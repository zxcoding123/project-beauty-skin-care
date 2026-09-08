<script lang="ts">
	import type { Snippet } from 'svelte';

	type Easing = 'linear' | 'ease-in' | 'ease-in-out' | 'ease-out';

	let {
		sparkColor = '#ab8140',
		sparkSize = 10,
		sparkRadius = 18,
		sparkCount = 8,
		duration = 420,
		easing = 'ease-out',
		extraScale = 1.0,
		children
	}: {
		sparkColor?: string;
		sparkSize?: number;
		sparkRadius?: number;
		sparkCount?: number;
		duration?: number;
		easing?: Easing;
		extraScale?: number;
		children?: Snippet;
	} = $props();

	type Spark = { x: number; y: number; angle: number; startTime: number };

	let containerEl: HTMLDivElement;
	let canvasEl: HTMLCanvasElement;
	let sparks: Spark[] = [];

	function easeFunc(t: number) {
		switch (easing) {
			case 'linear':
				return t;
			case 'ease-in':
				return t * t;
			case 'ease-in-out':
				return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
			default:
				return t * (2 - t);
		}
	}

	function resizeCanvas() {
		if (!canvasEl || !containerEl) return;
		const { width, height } = containerEl.getBoundingClientRect();
		if (canvasEl.width !== width || canvasEl.height !== height) {
			canvasEl.width = width;
			canvasEl.height = height;
		}
	}

	function draw(timestamp: number) {
		const ctx = canvasEl?.getContext('2d');
		if (!ctx) return;
		ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

		sparks = sparks.filter((spark) => {
			const elapsed = timestamp - spark.startTime;
			if (elapsed >= duration) return false;

			const progress = elapsed / duration;
			const eased = easeFunc(progress);

			const distance = eased * sparkRadius * extraScale;
			const lineLength = sparkSize * (1 - eased);

			const x1 = spark.x + distance * Math.cos(spark.angle);
			const y1 = spark.y + distance * Math.sin(spark.angle);
			const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
			const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

			ctx.strokeStyle = sparkColor;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();

			return true;
		});
	}

	function handleClick(e: MouseEvent) {
		if (!canvasEl) return;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;

		const rect = canvasEl.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const now = performance.now();

		sparks.push(
			...Array.from({ length: sparkCount }, (_, i) => ({
				x,
				y,
				angle: (2 * Math.PI * i) / sparkCount,
				startTime: now
			}))
		);
	}

	$effect(() => {
		if (!containerEl || !canvasEl) return;

		let resizeTimeout: ReturnType<typeof setTimeout>;
		const onResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(resizeCanvas, 100);
		};
		const ro = new ResizeObserver(onResize);
		ro.observe(containerEl);
		resizeCanvas();

		let animationId = requestAnimationFrame(function loop(t) {
			draw(t);
			animationId = requestAnimationFrame(loop);
		});

		return () => {
			ro.disconnect();
			clearTimeout(resizeTimeout);
			cancelAnimationFrame(animationId);
		};
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div bind:this={containerEl} class="relative w-full" onclick={handleClick}>
	<canvas bind:this={canvasEl} class="pointer-events-none absolute inset-0 block"></canvas>
	{@render children?.()}
</div>
