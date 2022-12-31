import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SCROLLER_SELECTOR } from "animations/constants";

// Type declarations for `locomotive-scroll` are outdated. 
// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export const initializeLocomotive = () => {
	const scrollElement = document.querySelector<HTMLElement>(SCROLLER_SELECTOR);
	const scroller = new LocomotiveScroll({ el: scrollElement || undefined, smooth: true, lerp: 0.05 });

	scroller.on("scroll", ScrollTrigger.update);

	ScrollTrigger.scrollerProxy(SCROLLER_SELECTOR, {
		scrollTop(value) {
			const config = { duration: 0, disableLerp: true, offset: -100 };
			return arguments.length ? scroller.scrollTo(value, config) : scroller.scroll.instance.scroll.y;
		},

		getBoundingClientRect() {
			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
		}
	});


	ScrollTrigger.addEventListener("refresh", () => scroller.update());
	ScrollTrigger.addEventListener('matchMedia', () => scroller.update());
	ScrollTrigger.defaults({ scroller: SCROLLER_SELECTOR });

	ScrollTrigger.refresh();
}
