import { CLASSES } from "constants/classes";
import { gsap } from 'gsap';
import type { Animation } from "animations/interfaces";

export class MarqueeAnimations implements Animation {
	private selectors = {
		container: `.${CLASSES.marquee.container}`,
		track: `.${CLASSES.marquee.track}`,
		rail: `.${CLASSES.marquee.rail}`
	};

	private attributes = {
		direction: 'data-direction',
		rate: 'data-rate'
	};

	private fallBackRate = 200;

	public useAnimation = () => {
		gsap.utils.toArray<HTMLElement>(this.selectors.container).forEach((container) => {
			const track = container?.querySelector(this.selectors.track);
			const rail = track?.querySelector(this.selectors.rail);
			const text = rail?.children.item(0);

			if (track && rail && text) {
				const direction = container.getAttribute(this.attributes.direction);
				const rate = this.getRate(container);
				const willMoveForward = direction === "forward";

				const distance = rail && text ? this.getDistanceToTranslate(text, rail) : 0;
				const time = distance / rate;

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
			}
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

	private getRate = (container: HTMLElement): number => {
		const attributeValue = container.getAttribute(this.attributes.rate);

		return !!attributeValue ? parseInt(attributeValue) : this.fallBackRate;
	}
}
