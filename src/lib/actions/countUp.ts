type CountUpOptions = {
	target: number;
	decimals?: number;
	duration?: number;
};

/**
 * Animates a number from 0 up to `target` once the node scrolls into view.
 * Runs once per page load. Under prefers-reduced-motion, jumps straight
 * to the final value.
 */
export function countUp(node: HTMLElement, options: CountUpOptions) {
	const { target, decimals = 0, duration = 1400 } = options;
	const format = (n: number) => n.toFixed(decimals);

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reducedMotion) {
		node.textContent = format(target);
		return {};
	}

	node.textContent = format(0);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;

				const start = performance.now();
				const tick = (now: number) => {
					const progress = Math.min((now - start) / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 3);
					node.textContent = format(target * eased);
					if (progress < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
				observer.disconnect();
			}
		},
		{ threshold: 0.5 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
