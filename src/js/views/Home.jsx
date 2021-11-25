import React from "react";
import bannerTop from "./../../img/banner-top.png";
import circleVector from "./../../img/vector-rounded.png";

export const Home = () => (
	<div className="home-box">
		<header className="header-box">
			<div className="call-to">
				<p className="call-to__p">{`Shop the new collection here first`}</p>
				<button className="call-to__button">{`Shop Now`}</button>
			</div>
		</header>
		<main className="main-box">
			<div className="welcome">
				<div className="welcome__img" style={{ backgroundImage: `url(${bannerTop})` }} />
				<div className="welcome__vector">
					<img className="welcome__vector--img" src={circleVector} width="100" />
				</div>
			</div>
		</main>
	</div>
);
