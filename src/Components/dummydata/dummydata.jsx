const products = [
    {
      id: 1,
      img: "https://via.placeholder.com/300",
      name: "Nike Air Max 270",
      type: "Sneakers",
      size: ["7", "8", "9", "10"],
      color: "Black",
      gender: "Men",
      price: 150,
      onSale: false,
      discount: 20, // 20% off
      discountedPrice: 120,
    },
    {
      id: 2,
      img: "https://via.placeholder.com/300",
      name: "Adidas Ultraboost",
      type: "Sneakers",
      size: ["6", "7", "8", "9"],
      color: "White",
      gender: "Women",
      price: 180,
      onSale: false,
      discount: 0,
      discountedPrice: 180,
    },
    {
      id: 3,
      img: "https://via.placeholder.com/300",
      name: "Puma Running Shoes",
      type: "Sneakers",
      size: ["8", "9", "10", "11"],
      color: "Blue",
      gender: "Men",
      price: 120,
      onSale: true,
      discount: 15,
      discountedPrice: 102,
    },
    {
      id: 4,
      img: "https://via.placeholder.com/300",
      name: "Gucci Leather Bag",
      type: "Bag",
      size: ["Medium", "Large"],
      color: "Brown",
      gender: "Unisex",
      price: 450,
      onSale: false,
      discount: 10,
      discountedPrice: 405,
    },
    {
      id: 5,
      img: "https://via.placeholder.com/300",
      name: "Louis Vuitton Handbag",
      type: "Bag",
      size: ["Small", "Medium"],
      color: "Black",
      gender: "Women",
      price: 700,
      onSale: false,
      discount: 0,
      discountedPrice: 700,
    },
    {
      id: 6,
      img: "https://via.placeholder.com/300",
      name: "Nike Duffle Bag",
      type: "Bag",
      size: ["Large"],
      color: "Gray",
      gender: "Unisex",
      price: 90,
      onSale: true,
      discount: 5,
      discountedPrice: 85.5,
    },
    {
      id: 7,
      img: "https://via.placeholder.com/300",
      name: "Hugo Boss Leather Belt",
      type: "Belt",
      size: ["M", "L", "XL"],
      color: "Black",
      gender: "Men",
      price: 80,
      onSale: false,
      discount: 0,
      discountedPrice: 80,
    },
    {
      id: 8,
      img: "https://via.placeholder.com/300",
      name: "Tommy Hilfiger Casual Belt",
      type: "Belt",
      size: ["S", "M", "L"],
      color: "Brown",
      gender: "Men",
      price: 60,
      onSale: false,
      discount: 15,
      discountedPrice: 51,
    },
    {
      id: 9,
      img: "https://via.placeholder.com/300",
      name: "Gucci Designer Belt",
      type: "Belt",
      size: ["M", "L"],
      color: "Gold",
      gender: "Unisex",
      price: 200,
      onSale: true,
      discount: 25,
      discountedPrice: 150,
    },
    {
      id: 10,
      img: "https://via.placeholder.com/300",
      name: "Reebok Running Sneakers",
      type: "Sneakers",
      size: ["7", "8", "9", "10"],
      color: "Red",
      gender: "Men",
      price: 110,
      onSale: false,
      discount: 0,
      discountedPrice: 110,
    },
    {
      id: 11,
      img: "https://via.placeholder.com/300",
      name: "Nike Revolution 6",
      type: "Sneakers",
      size: ["6", "7", "8", "9"],
      color: "Gray",
      gender: "Women",
      price: 130,
      onSale: true,
      discount: 18,
      discountedPrice: 106.6,
    },
    {
      id: 12,
      img: "https://via.placeholder.com/300",
      name: "Adidas Performance Belt",
      type: "Belt",
      size: ["S", "M", "L"],
      color: "Blue",
      gender: "Unisex",
      price: 45,
      onSale: true,
      discount: 10,
      discountedPrice: 40.5,
    },
    {
      id: 13,
      img: "https://via.placeholder.com/300",
      name: "Fendi Leather Bag",
      type: "Bag",
      size: ["Small"],
      color: "Red",
      gender: "Women",
      price: 600,
      onSale: false,
      discount: 0,
      discountedPrice: 600,
    },
    {
      id: 14,
      img: "https://via.placeholder.com/300",
      name: "Adidas Backpack",
      type: "Bag",
      size: ["Medium"],
      color: "Black",
      gender: "Unisex",
      price: 110,
      onSale: true,
      discount: 12,
      discountedPrice: 96.8,
    },
    {
      id: 15,
      img: "https://via.placeholder.com/300",
      name: "Balenciaga Sneakers",
      type: "Sneakers",
      size: ["7", "8", "9"],
      color: "White",
      gender: "Unisex",
      price: 900,
      onSale: true,
      discount: 30,
      discountedPrice: 630,
    },
  ];
  
  export default products;