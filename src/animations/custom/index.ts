import type { Animation } from "animations/interfaces"
import { MarqueeAnimations } from "animations/custom/marquee";
import { ArrowAnimations } from 'animations/custom/arrow';
import { ParallaxImageAnimations } from 'animations/custom/parallax-images';
import { RotatingImageAnimations } from 'animations/custom/rotating-images';
import { RevealingTextAnimations } from "animations/custom/revealing-text";
import { PinnedContentAnimations } from "animations/custom/pinned-content";
import { ScalingTextAnimations } from "animations/custom/scaling-text";

export const ANIMATIONS: Animation[] = [new MarqueeAnimations(), new ArrowAnimations(), new ParallaxImageAnimations(), new RotatingImageAnimations(), new RevealingTextAnimations(), new PinnedContentAnimations(), new ScalingTextAnimations()];