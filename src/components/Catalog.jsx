import React, { useState } from "react";
import Navbar from "./UI/Navbar";
import products from "../products";
import Product from "./Product";
import { uid } from "uid";
import { auth, db } from "../firebase";
import { set, ref, remove, onValue } from "firebase/database";
import { useAuth } from "../AuthContext";

const Catalog = () => {
  const { user, isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] =
    useState("Все категории");
  const [productsCart, setProductsCart] = useState([]);
  const handleCategoryClick = (category, categoryName) => {
    setSelectedCategory(category);
    setSelectedCategoryName(categoryName);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.type === selectedCategory);

  const addToCart = (product) => {
    // Add logic to add the product to the cart
    // You can use set function from Firebase to update the database
    // For example:
    if (isAuthenticated && user) {
      const cartRef = ref(db, `/${auth.currentUser.uid}`);
      const newProductRef = push(cartRef); // use push to generate a new key
      set(newProductRef, product);
    } else {
      // Handle the case where the user is not authenticated
      // or there is no user information
      console.log("User not authenticated or no user information");
    }
  };

  const writeToDatabase = (e) => {
    e.preventDefault();
    const id = uid();
    set(ref(db, `/${auth.currentUser.uid}/${id}`), {
      todo,
      id,
    });
    setTodo({ name: "", description: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="px-24 py-10 flex flex-row gap-24">
        <div className="">
          <h1 className="text-3xl uppercase font-bold">Каталог</h1>
          <hr />
          <ul className="mt-2 flex flex-col gap-1">
            <li>
              <button
                onClick={() => handleCategoryClick("all", "Все категории")}
              >
                Все категории
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("hoodie", "Худи")}>
                Худи
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("t-shirt", "Футболки")}
              >
                Футболки
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick("trousers", "Брюки")}>
                Брюки
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl font-bold">{selectedCategoryName}</h1>
          <div className="grid grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                photoUrl={product.photoUrl}
                addToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
