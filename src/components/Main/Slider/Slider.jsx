// @flow
import cn from 'classnames';
import {data} from './Data'
import React, {Component} from 'react';
import styles from './Slider.less';
import type {State, SliderItem} from './flow';

export class Slider extends Component<{}, State> {
	intervalId = null;
	state: State;

	constructor () {
		super();
		this.state = {
			active: 0
		};
	}

	componentDidMount () {
		this.intervalId = setInterval(this.nextSlide, 3000)
	}

	componentWillUnmount () {
		this.intervalId && clearInterval(this.intervalId);
	}

	handleDotClick = (active: number) => (e: Event) => {
		this.setState({active});
	};

	nextSlide = () => {
		const {active} = this.state;

		let next = active + 1;
		next = next >= data.length ? 0 : next;

		this.setState({active: next});
	};

	renderDots () {
		const {active} = this.state;
		const amount = data.length;
		const dots = [];

		for (let i = 0; i < amount; i++) {
			const dotCN = cn({
				[styles.dot]: true,
				[styles.dot_active]: i === active
			});

			const props = {
				className: dotCN,
				onClick: this.handleDotClick(i),
				style: {left: `${(i + 1) * 30}px`}
			};

			dots.push(<div key={i} {...props} />);
		}

		return <div className={styles.dots}>{dots}</div>;
	}

renderSlide = (slide: SliderItem, index: number) => {
		const {active} = this.state;
		const {action, img, text, title} = slide;
		const slideCN = cn({
			[styles.slider__item]: true,
				[styles.slider__item_active]: index === active
		});

		return (
			<div key={index} className={slideCN}>
				<img src={img.src} alt={img.alt} />
				<div className={styles.sliderItem__content}>
					<pre className={styles.sliderItem__title}>{title}</pre>
					<div className={styles.sliderItem__text}>{text}</div>
					<a href={action.url} className={styles.sliderItem__link}>{action.title}</a>
				</div>
			</div>
		);
	};

	renderSlides ():any {
		return data.map(this.renderSlide);
	}

	render () {
		return (
			<section>
				<div className={styles.content}>
					<div className={styles.slider}>
						{this.renderSlides()}
						{this.renderDots()}
					</div>
				</div>
			</section>
		);
	}
}

export default Slider;
