import React from "react";
import RestaurantDetails from "./RestaurantDetails";

const data = [
  {
    id: 1,
    title: "Ghar Jaisa 3.0",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wliruhzpc6aepfplmkha",
    mrp: "₹ 199.00",
    sellingPrice: "₹ 132.00",
    discount: "33%",
    rating: "4.2",
  },
  {
    id: 2,
    title: "Urban Chili ",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vf80rfdhlag31g0ldoff",
    mrp: "₹ 399.00",
    sellingPrice: "₹ 149.00",
    discount: "33%",
    rating: "4.0",
  },
  {
    id: 3,
    title: "North Indian",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/thrhpg7wboobiwpnf6v7",
    mrp: "₹ 120.00",
    sellingPrice: "₹ 60.00",
    discount: "50%",
    rating: "3.2",
  },
  {
    id: 4,
    title: "New Dastarkhan",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oxdv1otk7vcqxszppctu",
    mrp: "₹ 185.00",
    sellingPrice: "₹ 92.00",
    discount: "50%",
    rating: "4.2",
  },
  {
    id: 5,
    title: "Salt and Pepper",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f3g4v8q9wnppp84nnsxo",
    mrp: "₹ 279.00",
    sellingPrice: "₹ 224.00",
    discount: "50%",
    rating: "2.2",
  },
  {
    id: 6,
    title: "Param Foods Products",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zvqv0cmlp2e5doqv5lps",
    mrp: "₹ 120.00",
    sellingPrice: "₹ 60.00",
    discount: "50%",
    rating: "3.8",
  },
  {
    id: 7,
    title: "Raj ratna restaurant 3.746 mins₹ 199 for two North Indian",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tektklrcxdsrvatbzmxm",
    mrp: "₹ 225.00",
    sellingPrice: "₹ 168.00",
    discount: "25%",
    rating: "4.9",
  },
  {
    id: 8,
    title: "A Nawabi Kababia Zaika-e-lucknow",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/olw5wurhx7r8rga7iwan",
    mrp: "₹ 220.00",
    sellingPrice: "₹ 196.00",
    discount: "27%",
    rating: "3.4",
  },
  {
    id: 9,
    title: "EAT A BURGER",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lwtdaemfoqzdierlayz5",
    mrp: "₹ 95.00",
    sellingPrice: "₹ 110.00",
    discount: "18%",
    rating: "2.6",
  },
  {
    id: 10,
    title: "Only Mo Mo 's",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cwgppnlcc64vmulm69tx",
    mrp: "₹ 5.00",
    sellingPrice: "₹ 460.00",
    discount: "18%",
    rating: "3.2",
  },
  {
    id: 11,
    title: "Ghar Jaisa 3.0",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wliruhzpc6aepfplmkha",
    mrp: "₹ 199.00",
    sellingPrice: "₹ 132.00",
    discount: "33%",
    rating: "4.8",
  },
  {
    id: 12,
    title: "Urban Chili ",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vf80rfdhlag31g0ldoff",
    mrp: "₹ 399.00",
    sellingPrice: "₹ 149.00",
    discount: "33%",
    rating: "3.5",
  },
  {
    id: 13,
    title: "North Indian",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/thrhpg7wboobiwpnf6v7",
    mrp: "₹ 120.00",
    sellingPrice: "₹ 60.00",
    discount: "50%",
    rating: "3.1",
  },
  {
    id: 14,
    title: "New Dastarkhan",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oxdv1otk7vcqxszppctu",
    mrp: "₹ 185.00",
    sellingPrice: "₹ 92.00",
    discount: "50%",
    rating: "3.2",
  },
  {
    id: 15,
    title: "Salt and Pepper",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f3g4v8q9wnppp84nnsxo",
    mrp: "₹ 279.00",
    sellingPrice: "₹ 224.00",
    discount: "50%",
    rating: "2.8",
  },
  {
    id: 16,
    title: "Param Foods Products",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zvqv0cmlp2e5doqv5lps",
    mrp: "₹ 120.00",
    sellingPrice: "₹ 60.00",
    discount: "50%",
    rating: "4.8",
  },
  {
    id: 17,
    title: "Raj ratna restaurant 3.746 mins₹ 199 for two North Indian",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tektklrcxdsrvatbzmxm",
    mrp: "₹ 225.00",
    sellingPrice: "₹ 168.00",
    discount: "25%",
    rating: "3.9",
  },
  {
    id: 18,
    title: "A Nawabi Kababia Zaika-e-lucknow",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/olw5wurhx7r8rga7iwan",
    mrp: "₹ 220.00",
    sellingPrice: "₹ 196.00",
    discount: "27%",
    rating: "3.5",
  },
  {
    id: 19,
    title: "EAT A BURGER",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lwtdaemfoqzdierlayz5",
    mrp: "₹ 95.00",
    sellingPrice: "₹ 110.00",
    discount: "18%",
    rating: "2.8",
  },
  {
    id: 20,
    title: "Only Mo Mo 's",
    imgURL:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cwgppnlcc64vmulm69tx",
    mrp: "₹ 5.00",
    sellingPrice: "₹ 460.00",
    discount: "18%",
    rating: "2.4",
  },
];

const DataDetails = () => {
  return (
    <div>
      <RestaurantDetails details={data} />
    </div>
  );
};

export default DataDetails;
