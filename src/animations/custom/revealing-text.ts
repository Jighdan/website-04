import { CLASSES } from "constants/classes";
import { gsap } from "gsap";
import type { Animation } from "animations/interfaces";

export class RevealingTextAnimations implements Animation {
	private classes = CLASSES.revealingText;

	private selectors = {
		container: `.${this.classes.container}`,
		text: `.${this.classes.container} .${this.classes.text}`,
		highlightedText: `.${this.classes.container} .${this.classes.highlightedText}`,
		line: `.${this.classes.container} .${this.classes.line}`
	};

	private colorBlack = '#212529';

	public useAnimation = () => {
		const container = document.querySelector(this.selectors.container);

		gsap.utils.toArray<HTMLElement>(this.selectors.text).forEach(text => {
			gsap.to(text, {
				opacity: 1,
				color: this.colorBlack,
				scrollTrigger: {
					trigger: text,
					start: 'top 75%',
					end: 'bottom 75%',
					scrub: true,
				}
			});
		});

		if (container && container.parentElement) {
			let timeline = gsap.timeline({
				defaults: {
					opacity: 1,
					scrollTrigger: {
						trigger: container.parentElement,
						start: '55% center',
						end: '80% center',
						scrub: true,
					}
				}
			});

			timeline
				.to(this.selectors.highlightedText, {})
				.to(this.selectors.line, { width: '100%', backgroundColor: this.colorBlack, }, 0);

		} else {
			gsap.set(this.selectors.highlightedText, {
				opacity: 1
			})
		}
	};
};
