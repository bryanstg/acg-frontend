import React, { useState, useEffect } from "react";
import { ActionBar } from "../component/ActionBar.jsx";
import { AddCategory } from "../component/AddCategory.jsx";
import { AddProduct } from "../component/AddProduct.jsx";
import { Category } from "../component/Category.jsx";
import { EditCategory } from "../component/EditCategory.jsx";
import { Loading } from "../component/Loading.jsx";
import { Tabs } from "../component/Tabs.jsx";
import bannerTop from "./../../img/banner-top.png";
import circleVector from "./../../img/vector-rounded.png";

export const Home = () => {
	const API_URI = process.env.API_URI;
	const [categories, setCategories] = useState();
	const [add, setAdd] = useState(false);
	const [addType, setAddType] = useState(null);
	const [update, setUpdate] = useState(false);
	const [changeCategoryId, setChangeCategoryId] = useState("");
	const [editCategory, setEditCategory] = useState(false);
	const [categoryToUpdate, setCategoryToUpdate] = useState();
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
	const handleCategory = id => {
		for (const category of categories) {
			if (category.id == changeCategoryId) {
				console.log(category);
				setCategoryToUpdate(category);
			}
		}
	};
	useEffect(
		() => {
			getCategories();
			if (update == true) {
				setUpdate(false);
			}
		},
		[addType, update]
	);
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
				<div className="action-bar-box">
					<ActionBar
						addProductActive={setAdd}
						setAddType={setAddType}
						setChangeCategoryId={setChangeCategoryId}
						categories={categories}
						setEditCategory={setEditCategory}
						editCategory={editCategory}
						setCategoryToUpdate={setCategoryToUpdate}
					/>
				</div>
				{add ? (
					//If addType = 1, edit products
					addType == 1 ? (
						<AddProduct categories={categories} />
					) : (
						//If addType = 1, edit products
						addType == 2 && <AddCategory />
					)
				) : categoryToUpdate ? (
					<EditCategory
						category={categoryToUpdate}
						setCategoryToUpdate={setCategoryToUpdate}
						setUpdate={setUpdate}
						setEditCategory={setEditCategory}
					/>
				) : (
					<div className="categories-box">
						{categories ? (
							categories.map(category => {
								return (
									<Category
										category={category}
										setUpdate={setUpdate}
										categories={categories}
										key={category.id}
									/>
								);
							})
						) : (
							<Loading what="Categories" />
						)}
					</div>
				)}
				<div className="tabs-box">
					<Tabs />
				</div>
			</main>
		</div>
	);
};
