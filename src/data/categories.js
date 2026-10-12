import blackTshirt from '../images/categories/black-tshirt.webp';
import brownShirt from '../images/categories/brown-shirt.webp';
import jacketCargo from '../images/categories/jacket-cargo.webp';
import hoodie from '../images/categories/Modern Urban Streetwear Portrait.webp';


const categories = [
    {
        id: 1,
        name: "SHIRTS",
        image: brownShirt,
        path: "/collections/shirts"
    },
    {
        id: 2,
        name: "T-SHIRTS",
        image: blackTshirt,
        path: "/collections/tshirts"
    },
    {
    id: 3,
    name: "JACKETS & CARGOS",
    image: jacketCargo,
    path: "/collections/jackets"
    },
    {
    id: 4,
    name: "JACKETS & HOODIES",
    image: hoodie,
    path: "/collections/streetwear"
    }
];

export default categories;