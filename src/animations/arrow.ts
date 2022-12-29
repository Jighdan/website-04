import { CLASSES } from "constants/classes";
import { gsap } from 'gsap';
import type { Animation } from "interfaces/animation";

export class ArrowAnimations implements Animation {
	private className = `.${CLASSES.arrow.container}`;

	private arrowSelectors = {
		sm: `${this.className} svg:nth-child(1)`,
		md: `${this.className} svg:nth-child(2)`,
		lg: `${this.className} svg:nth-child(3)`
	}

	public useAnimation = () => {
		let timeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			defaults: { duration: 0.75, ease: "none" }
		});

		timeline
			.fromTo(this.arrowSelectors.sm, { y: 0 }, { y: -2.5 }, 0)
			.fromTo(this.arrowSelectors.md, { y: 0 }, { y: -7.5 }, 0)
			.fromTo(this.arrowSelectors.lg, { y: 0 }, { y: -17.5 }, 0);
	};
}
