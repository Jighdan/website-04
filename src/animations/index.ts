import { ANIMATIONS } from "animations/custom";
import { initializeLocomotive } from "animations/config";

const initializeAnimations = () => {
	initializeLocomotive();

	ANIMATIONS.forEach(animation => {
		animation.useAnimation();
	})
}

window.addEventListener('DOMContentLoaded', initializeAnimations);
