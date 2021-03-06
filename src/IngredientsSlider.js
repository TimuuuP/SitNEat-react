import React, { Component } from 'react';
import Slides from './Slides.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';
import ham1 from './images/Asset5.svg';
import ham2 from './images/Asset 8.svg';
import ham3 from './images/Asset 10.svg';
import arrowLeft from './images/glyphicons-211-arrow-left.png';
import './App.css';

class IngredientsSlider extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentIndex: 0,
			translateValue: 0,
			images: [ham1, ham2, ham3]
		};
	}



	prevSlide = () => {
		if(this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
	}

	nextSlide = () => {
		if(this.state.currentIndex === this.state.images.length - 1){
			return this.setState({
					currentIndex: 0,
					translateValue: 0
			})
		}
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -(this.slideWidth())
		}));
	}

	slideWidth = () => {
		return document.querySelector('.slides').clientWidth
	}

	render() {

		return (
			<div className="ingredientsSlider content" >
				<LeftArrow prevSlide = {this.prevSlide}/>
				<div className="sliderWrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.5s'
					}}>
					{
						this.state.images.map((image, i) => {
							return (
								<Slides image={image} key={i} />
							)
						})

					}
				</div>
				{/*<img src={ham1} />*/}

				<RightArrow nextSlide = {this.nextSlide}/>

			</div>
		);
	}
}

export default IngredientsSlider;
