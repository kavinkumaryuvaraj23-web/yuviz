import React, { useState } from 'react'
import './Shop.css'
import shopBanner from '../assets/shop-banner.webp'
import shopProducts from '../data/shopProducts'
import { useSearchParams } from 'react-router-dom'

import favoriteIcon from "../icons/favorite-heart.svg";
import shoppingCartIcon from "../icons/shopping_cart.svg";

export default function Shop() {

const [searchParams, setSearchParams] = useSearchParams();

const [search, setSearch] = useState("");

const [category, setCategory] = useState("all");

const [sort, setSort] = useState("default");

const currentPage = Number(searchParams.get("page")) || 1;

const productsPerPage = 10;

const filteredProducts = shopProducts.filter((product) => {
    const matchesSearch =  product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
});

if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
}

if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
}

const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

const startIndex = (currentPage - 1) * productsPerPage;

const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
);

  return (
    <div className="shop-page">

      <div className="shop-header"
          style={{ backgroundImage: `url(${shopBanner})` }}>

        <h1>SHOP OUR COLLECTION</h1>
        <p>Discover styles made for the modern man</p>
      </div>

      <div className="shop-controls">
        <input type="text" placeholder="Search products..." className="shop-search"
        value={search} onChange={(e) => {
          setSearch(e.target.value);
          setSearchParams({ page: 1 });
        }}/>

        <select className="shop-filter" value={category}
          onChange={(e) => {setCategory(e.target.value);
                            setSearchParams({ page: 1 });}}>
          <option value="all">All Categories</option>
          <option value="Shirts">Shirts</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Cargos">Cargos</option>
          <option value="Jackets">Jackets</option>
          <option value="Hoodies">Hoodies</option>
        </select>

        <select className="shop-sort" value={sort} 
        onChange={(e) => {
        setSort(e.target.value);
        setSearchParams({ page: 1 });
        }}>
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>


      <p className="shop-count">
        Showing {filteredProducts.length} Products
      </p>


      <div className="featured-container">
          {currentProducts.map((product) => {
            return (
              <div className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <img className="wishlist-icon" src={favoriteIcon} alt="Wishlist" />
                </div>

                <div className="product-details">
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{`₹${product.price}`}</p>
                  </div>
                  
                  <button className="cart-btn" type="button">
                    <img src={shoppingCartIcon} alt="Cart" />
                  </button>
               </div>

              </div>
                  );
            })}
        </div>

        <div className="shop-pagination">
            <button onClick={() => setSearchParams({ page: currentPage - 1 })} disabled={currentPage === 1}>
            Previous </button>
            
            <span className="page-number"> Page {currentPage} of {totalPages} </span>

            <button onClick={() => setSearchParams({ page: currentPage + 1 })} disabled={currentPage === totalPages}>
            Next </button>

        </div>





    </div>
  )
}