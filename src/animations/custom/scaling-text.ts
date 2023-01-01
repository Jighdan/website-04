import { CLASSES } from "constants/classes";
import { gsap } from 'gsap';
import type { Animation } from "animations/interfaces";

export class ScalingTextAnimations implements Animation {
	private className = CLASSES.scalingText;
	private selector = `.${this.className}`;
	private scaling = 1.5;

	public useAnimation = () => {
		gsap.utils.toArray<HTMLElement>(this.selector).forEach(element => {
			this.scaleTextOnContainerScroll(element);
		});
	};

	private scaleTextOnContainerScroll = (element: HTMLElement) => {
		if (element.parentElement && element.firstElementChild) {
			const scaledFontSize = this.getFontSizeScale(element.firstElementChild);

			gsap.to(element.firstElementChild, {
				fontSize: scaledFontSize,
				ease: 'none',
				scrollTrigger: {
					trigger: element.parentElement,
					start: '-=300 center',
					end: 'bottom center',
					scrub: true
				}
			})
		}
	};

	private getFontSizeScale = (element: Element) => {
		const { fontSize } = getComputedStyle(element);
		const fontSizeInPixels = parseFloat(fontSize);

		return fontSizeInPixels * this.scaling;
	}
}
