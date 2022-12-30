import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { Animation } from "interfaces/animation";
import { MarqueeAnimations } from "animations/marquee";
import { ArrowAnimations } from 'animations/arrow';
import { ParallaxImageAnimations } from 'animations/parallax-images';
import { RotatingImageAnimations } from 'animations/rotating-images';
import { RevealingTextAnimations } from "animations/revealing-text";
import { PinnedContentAnimations } from "animations/pinned-content";

gsap.registerPlugin(ScrollTrigger);

const animations: Animation[] = [new MarqueeAnimations(), new ArrowAnimations(), new ParallaxImageAnimations(), new RotatingImageAnimations(), new RevealingTextAnimations(), new PinnedContentAnimations()];

window.addEventListener('load', () => {
	animations.forEach(animation => {
		animation.useAnimation();
	})
});
