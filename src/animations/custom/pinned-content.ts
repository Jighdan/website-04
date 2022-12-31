import { CLASSES } from "constants/classes";
import { gsap } from 'gsap';
import type { Animation } from "animations/interfaces";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SCROLLER_SELECTOR } from 'animations/constants';

export class PinnedContentAnimations implements Animation {
	private selectors = {
		section: `.${CLASSES.section.withPinnedContent}`,
		fadingText: `.${CLASSES.fadingText.text}`
	};

	public useAnimation = () => {
		gsap.utils.toArray<HTMLElement>(this.selectors.section).forEach(section => {
			this.pinContentToSection(section);
			this.fadeInText(section);
		});
	};

	private pinContentToSection = (section: HTMLElement | null) => {
		if (section?.firstElementChild) {
			ScrollTrigger.create({
				trigger: section,
				start: "top top",
				end: "bottom 150px",
				pin: section.firstElementChild,
				scroller: SCROLLER_SELECTOR
			});
		};
	};

	private fadeInText = (section: HTMLElement | null) => {
		if (section) {
			const textElements = [...section.querySelectorAll(this.selectors.fadingText)];

			gsap.to(textElements, {
				opacity: 0,
				scrollTrigger: {
					trigger: section,
					start: 'top top',
					end: '95% bottom',
					scrub: true,
				}
			})
		};
	};
};
