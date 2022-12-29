import type { Animation } from "interfaces/animation";
import { MarqueeAnimations } from "animations/marquee";
import { ArrowAnimations } from 'animations/arrow';

const animations: Animation[] = [new MarqueeAnimations(), new ArrowAnimations()];

window.addEventListener('load', () => {
	animations.forEach(animation => {
		animation.useAnimation();
	})
});
