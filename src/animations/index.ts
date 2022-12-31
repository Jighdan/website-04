import { ANIMATIONS } from "animations/custom";
import "animations/config";

const initializeAnimations = () => {
	ANIMATIONS.forEach(animation => {
		animation.useAnimation();
	})
}

window.addEventListener('load', initializeAnimations);
