type RevealOptions = { delay?: number };

/**
 * Fades a section in as it enters the viewport and back out as it leaves,
 * in either scroll direction. No-ops (element stays fully visible) under
 * prefers-reduced-motion.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reducedMotion) {
		node.classList.add('is-visible');
		return {};
	}

	if (options.delay) {
		node.style.transitionDelay = `${options.delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				entry.target.classList.toggle('is-visible', entry.isIntersecting);
			}
		},
		{ threshold: 0.12, rootMargin: '-8% 0px -10% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
