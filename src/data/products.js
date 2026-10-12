import blueTshirt from '../images/products/blue-tshirt.webp';
import greenShirt from '../images/products/green-shirt.webp';
import hoodie from '../images/products/hoodie.webp';
import whiteShirt from '../images/products/white-shirt.webp';
import whiteTshirtDenim from '../images/products/white-tshirt-denim.webp';

const products = [
    {
        id: 1,
        name: "Classic White Shirt",
        category: "Shirts",
        price: 1299,
        image: whiteShirt,
        rating: 4.6
    },
    {
        id: 2,
        name: "Olive Casual Shirt",
        category: "Shirts",
        price: 1299,
        image: greenShirt,
        rating: 4.7
    },
    {
        id: 3,
        name: "Navy Blue T-Shirt",
        category: "T-Shirts",
        price: 999,
        image: blueTshirt,
        rating: 4.5
    },
    {
        id: 4,
        name: "Blue Slim-Fit Jeans",
        category: "Jeans",
        price: 1499,
        image: whiteTshirtDenim,
        rating: 4.6
    },
    {
        id: 5,
        name: "Charcoal Hoodie",
        category: "Hoodies",
        price: 1499,
        image: hoodie,
        rating: 4.8
    }
];



export default products;