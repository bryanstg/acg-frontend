import React from "react";
import BannerBottom from "./../../img/banner-bottom.jpg";
export const Banner = () => {
	return (
		<div className="banner" style={{ backgroundImage: `url(${BannerBottom})` }}>
			<button className="banner__button">{`What's on sale`}</button>
		</div>
	);
};
