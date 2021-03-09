import React from 'react';
import Slider from 'react-slick';

interface SettingTypes {
	dots: boolean;
	lazyLoad: 'ondemand' | 'progressive' | undefined;
	autoplay: boolean;
	autoplaySpeed: number;
	speed: number;
	slidesToShow: number;
	slidesToScroll: number;
	easing: string;
	pauseOnDotsHover: boolean;
	pauseOnFocus: boolean;
	pauseOnHover: boolean;
}

const Hero = () => {
	const settings: SettingTypes = {
		dots: true,
		lazyLoad: 'progressive',
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'linear',
		pauseOnDotsHover: true,
		pauseOnFocus: false,
		pauseOnHover: false,
	};

	return (
		<section>
			<Slider {...settings}>
				<div className="container">
					<img src="images/banner-01.jpg" alt="" />
					<h3 className="m-b-20">
						<strong>Primer Slide</strong>
					</h3>
					<p className="m-b-40">
						Lorem fistrum torpedo sexuarl apetecan diodenoo diodenoo no te digo
						trigo por no llamarte Rodrigor amatomaa tiene musho peligro de la
						pradera de la pradera.
					</p>
					<a className="btn hvr-hover" href="#">
						Shop New
					</a>
				</div>

				<div className="container">
					<img src="images/banner-02.jpg" alt="" />
					<h3 className="m-b-20">
						<strong>Segundo Slide</strong>
					</h3>
					<p className="m-b-40">
						Al ataquerl ese pedazo de pupita se calle ustée condemor está la
						cosa muy malar. A wan papaar papaar ahorarr no te digo trigo por no
						llamarte Rodrigor ese pedazo de papaar papaar.
					</p>
					<a className="btn hvr-hover" href="#">
						Shop New
					</a>
				</div>

				<div className="container">
					<img src="images/banner-03.jpg" alt="" />
					<h3 className="m-b-20">
						<strong>Tercer Slide</strong>
					</h3>
					<p className="m-b-40">
						Caballo blanco caballo negroorl tiene musho peligro te voy a borrar
						el cerito ese hombree pecador me cago en tus muelas al ataquerl va
						usté muy cargadoo pupita tiene musho peligro.
					</p>
					<a className="btn hvr-hover" href="#">
						Shop New
					</a>
				</div>
			</Slider>
		</section>
	);
};

export default Hero;
