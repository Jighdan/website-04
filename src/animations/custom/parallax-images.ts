import { CLASSES } from "constants/classes";
import { gsap } from "gsap";
import type { Animation } from "animations/interfaces";

export class ParallaxImageAnimations implements Animation {
	private selectors = {
		section: `.${CLASSES.section.withParallaxImages}`,
		imageContainer: `.${CLASSES.parallaxImage.container}`,
		image: 'img'
	};

	public useAnimation = () => {
		gsap.utils.toArray<HTMLElement>(this.selectors.section).forEach((section) => {
			const imageContainer = section.querySelector(this.selectors.imageContainer) as HTMLElement;
			const image = imageContainer.querySelector(this.selectors.image) as HTMLElement;

			gsap.to(image, {
				ease: "none",
				y: () => image.offsetHeight - imageContainer.offsetHeight,
				scrollTrigger: {
					trigger: section,
					start: "top bottom",
					scrub: true
				},
			});
		});
	};
};
