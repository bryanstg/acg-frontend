import React from "react";
import Arrow from "./../../img/arrow.png";
import PropTypes from "prop-types";

export const Category = ({ category }) => {
	return (
		<div className="category">
			<div className="category__info id">{`${category.id}`}</div>
			<span className="category__sep">|</span>
			<div className="category__info name">{`${category.name}`}</div>
			<span className="category__sep">|</span>
			<div className="category__info description">{`${category.description}`}</div>
			<button className="category__button" style={{ backgroundImage: `url(${Arrow})` }} />
		</div>
	);
};

Category.propTypes = {
	category: PropTypes.object
};
