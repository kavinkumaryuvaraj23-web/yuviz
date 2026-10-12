import React from 'react'
import './Home.css'
import categories from '../data/categories';
import products from '../data/products';


export default function Home() {
  return (
    <div className="home">

      <section className="home-bgd">
        <div className="home-content">
          <p>NEW STANDARD OF STYLE</p>

          <h1>STYLE <br />
              BEYOND <br />
              TRENDS</h1>

          <p>MODERN LOOKS FOR THE EVERYDAY MAN</p>

          <button className='shop-btn'>SHOP NOW </button>
          
        </div>
      </section>

      <section className='home-bgd-btm'>
        <div className="home-bgd-btm-cnt">
          <img src="/src/icons/diamond.svg" alt="" />
          <p>Premium Quality Fabrics</p>
          <img src="/src/icons/dress-hook.svg" alt="" />
          <p>Trendy & Modern Styles</p>
          <img src="/src/icons/exchange-hand.svg" alt="" />
          <p>Easy Returns & Exchanges</p>
          <img src="/src/icons/credit_card.svg" alt="" />
          <p>Secure Payments</p>
        </div>
      </section>


      <section className='category'>
        <div className='cat-head'>
          <div className="cat-head-cnt">
            <h1>SHOP BY CATEGORY</h1>
            <p>Explore our Latest Collections</p>
          </div>

          <div className='cat-head-view'>
            <p>View All →</p> 
          </div>
        </div>

        <div className="category-container">
          {categories.map((category) => {
            return (
            <div className="category-card" key={category.id}>
              <img src={category.image} alt={category.name} />
              <div className="category-card-content">
                <h3>{category.name}</h3>
                <p>Shop Now →</p>
              </div>
            </div>
            );
          })}
        </div>  
      </section>

      <section className="featured">
      <div className="featured-header">
        <div className="featured-head">
          <h1>FEATURED PRODUCTS</h1>
          <p>Discover Our Trending Styles</p>
        </div>

        <div className="featured-view">
          <p>View All →</p>
        </div>
      </div>

        <div className="featured-container">
          {products.map((product) => {
            return (
              <div className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <img className="wishlist-icon" src="/src/icons/favorite-heart.svg" alt="Wishlist"/>
                </div>

                <div className="product-details">
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{`₹${product.price}`}</p>
                  </div>
                  
                  <button className="cart-btn" type="button">
                    <img src="/src/icons/shopping_cart.svg" alt="Cart" />
                  </button>
               </div>

              </div>
                  );
            })}
          </div>
      </section>

    </div>
  )
}