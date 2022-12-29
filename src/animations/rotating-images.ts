import { CLASSES } from "constants/classes";
import { gsap } from 'gsap';
import type { Animation } from "interfaces/animation";

enum Attributes {
	DURATION = 'data-duration',
	POSITION_OFFSET = 'data-position-offset',
	SKEW = 'data-skew',
	AGGREGATE = 'data-aggregate',
	ROTATION_X = 'data-rotation-x',
	ROTATION_Y = 'data-rotation-y',
	TRANSFORMATION_X = 'data-transformation-x',
	TRANSFORMATION_Y = 'data-transformation-y'
}

export class RotatingImageAnimations implements Animation {
	private selectors = {
		section: `.${CLASSES.section.withRotatingImages}`,
		imageContainer: `.${CLASSES.rotatingImage.container}`,
		image: 'img'
	};

	private fallbacks = {
		positionOffset: 0.5,
		duration: 1.5,
		skew: 1.2,
		aggregate: 0.5,
		rotation: {
			x: 80,
			y: 20
		},
		transformations: {
			x: 20,
			y: 30
		}
	};

	public useAnimation = () => {
		gsap.utils.toArray<HTMLElement>(this.selectors.section).forEach(section => {
			const useRotateImages = (event: MouseEvent) => this.rotateImages(section, event);

			section.addEventListener('mousemove', useRotateImages);
		});
	};

	private rotateImages = (section: HTMLElement, event: MouseEvent) => {
		const { clientHeight, clientWidth } = section;
		const imageContainers = [...section.querySelectorAll(this.selectors.imageContainer)]

		imageContainers.forEach((container, index) => {
			const duration = this.getAttribute(container, Attributes.DURATION, this.fallbacks.duration);
			const rotations = this.getRotations(container, event, clientWidth, clientHeight);
			const transformations = this.getTransformations(container, index, event, clientWidth, clientHeight);

			gsap.to(container, {
				duration,
				x: transformations.x,
				y: transformations.y,
				rotationX: rotations.x,
				rotateY: -rotations.y
			})
		});
	};

	private getTransformations = (element: Element, index: number, event: MouseEvent, clientWidth: number, clientHeight: number) => {
		const positions = this.getPositions(element, event, clientWidth, clientHeight);
		const transformationY = this.getAttribute(element, Attributes.TRANSFORMATION_Y, this.fallbacks.transformations.y);
		const transformationX = this.getAttribute(element, Attributes.TRANSFORMATION_X, this.fallbacks.transformations.x);
		const skew = this.getAttribute(element, Attributes.SKEW, this.fallbacks.skew);
		const aggregate = this.getAttribute(element, Attributes.AGGREGATE, this.fallbacks.aggregate);
		const indexAggregate = this.indexAggregator(index, skew, aggregate);

		return {
			x: positions.x * transformationX * indexAggregate,
			y: positions.y * transformationY * indexAggregate
		}
	}

	private getRotations = (element: Element, event: MouseEvent, clientWidth: number, clientHeight: number) => {
		const positions = this.getPositions(element, event, clientWidth, clientHeight);
		const rotationX = this.getAttribute(element, Attributes.ROTATION_X, this.fallbacks.rotation.x);
		const rotationY = this.getAttribute(element, Attributes.ROTATION_Y, this.fallbacks.rotation.y);

		return {
			x: positions.y * rotationX,
			y: positions.x * rotationY
		};
	};

	private getPositions = (element: Element, { offsetX, offsetY }: MouseEvent, clientWidth: number, clientHeight: number) => {
		const positionOffset = this.getAttribute(element, Attributes.POSITION_OFFSET, this.fallbacks.positionOffset);

		return {
			x: offsetX / clientWidth - positionOffset,
			y: offsetY / clientHeight - positionOffset
		};
	}

	private getAttribute = (element: Element | undefined, attribute: Attributes, fallback: number) => {
		const value = element?.getAttribute(attribute);

		return value ? parseFloat(value) : fallback;
	};

	private indexAggregator = (index: number, skew: number, aggregate: number) => {
		return index * skew + aggregate;
	}
};
