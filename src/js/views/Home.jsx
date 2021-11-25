import React, { useState, useEffect } from "react";
import { Category } from "../component/Category.jsx";
import bannerTop from "./../../img/banner-top.png";
import circleVector from "./../../img/vector-rounded.png";

export const Home = () => {
	const API_URI = process.env.API_URI;
	const [categories, setCategories] = useState([]);
	const getCategories = async () => {
		try {
			const response = await fetch(`${API_URI}/categories`);
			if (response.ok) {
				const data = await response.json();
				setCategories(data.categories);
			} else {
				throw new Error("Something happened fetching categories");
			}
		} catch (error) {
			console.log(error);
			return false;
		}
	};
	useEffect(() => {
		getCategories();
	}, []);
	return (
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
				<div>
					{categories ? (
						categories.map(category => {
							return <Category category={category} key={category.id} />;
						})
					) : (
						<div>Cargando</div>
					)}
				</div>
			</main>
		</div>
	);
};
