import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { Animation } from "interfaces/animation";
import { MarqueeAnimations } from "animations/marquee";
import { ArrowAnimations } from 'animations/arrow';
import { ParallaxImageAnimations } from 'animations/parallax-images';

gsap.registerPlugin(ScrollTrigger);

const animations: Animation[] = [new MarqueeAnimations(), new ArrowAnimations(), new ParallaxImageAnimations()];

window.addEventListener('load', () => {
	animations.forEach(animation => {
		animation.useAnimation();
	})
});
