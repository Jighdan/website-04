import type { Animation } from "interfaces/animation";
import { MarqueeAnimations } from "./marquee";

const animations: Animation[] = [new MarqueeAnimations()];

window.addEventListener('load', () => {
	animations.forEach(animation => {
		animation.useAnimation();
	})
});
