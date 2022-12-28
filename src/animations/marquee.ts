import { CLASSES } from "constants/classes";
import { gsap } from 'gsap';
import type { Animation } from "interfaces/animation";

export class MarqueeAnimations implements Animation {
	private directionAttribute = 'data-direction';
	private rate = 200;
	private selectors = {
		container: `.${CLASSES.marquee.container}`,
		track: `.${CLASSES.marquee.track}`,
		rail: `.${CLASSES.marquee.rail}`
	};

	public useAnimation = () => {
		gsap.utils.toArray<HTMLElement>(this.selectors.track).forEach((track) => {
			const rail = track.querySelector(this.selectors.rail);
			const text = rail?.children.item(0);

			const direction = rail?.getAttribute(this.directionAttribute);
			const willMoveForward = direction === "forward";
			console.info({ willMoveForward })

			const distance = rail && text ? this.getDistanceToTranslate(text, rail) : 0;
			const time = distance / this.rate;

			const tween = gsap
				.to(track, {
					x: `-${distance}`,
					duration: time,
					repeat: -1,
					ease: "none"
				})
				.totalProgress(0.5);

			gsap.to(tween, {
				timeScale: willMoveForward ? 1 : -1
			});
		});
	}

	private getDistanceToTranslate = (textElement: Element, railElement: Element) => {
		const styles = getComputedStyle(textElement);
		const parentStyles = getComputedStyle(railElement);

		const widthProperty = styles.getPropertyValue("width");
		const width = parseInt(widthProperty, 10);
		const spacingProperty = parentStyles.getPropertyValue("column-gap");
		const spacing = parseInt(spacingProperty, 10);

		return width + spacing;
	}
}
