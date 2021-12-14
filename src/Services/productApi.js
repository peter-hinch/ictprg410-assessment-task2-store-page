// define a list of products that will render in the web store
const productList = [
  {
    id: 1,
    category: "room",
    title: "One Bedroom Apartment",
    imgUrl: "./images/stay-options/607a-07_7_orig.jpg",
    imgAlt: "One Bedroom Apartment",
    desc: "Our one bedroom apartments are spacious, with a queen size bed. They are ideal for any traveller.",
    feat: ["Single Bedroom w/ Queen Sized Bed", "Balcony", "LCD TV w/ DVD player", "Free Foxtel", "Free Wi-Fi", "Fridge w/ Freezer", "Gas Stove w/ Oven", "Dishwasher", "Internal Laundry Facilities", "Built in Wardrobes"],
    price: 152
  },
  {
    id: 2,
    category: "room",
    title: "Two Bedroom Apartment",
    imgUrl: "./images/stay-options/401b-08_orig.jpg",
    imgAlt: "Two Bedroom Apartment",
    desc: "Our two bedroom apartments are spacious, with a queen size bed in each bedroom. They are ideal for two or more people.",
    feat: ["Two Bedrooms w/ Queen Sized Beds", "Terrace", "LCD TV w/ DVD player", "Free Foxtel", "Free Wi-Fi", "Fridge w/ Freezer", "Gas Stove w/ Oven", "Dishwasher", "Internal Laundry Facilities", "Built in Wardrobes (both rooms)"],
    price: 161
  },
  {
    id: 3,
    category: "add-on",
    title: "Flowers on Arrival",
    imgUrl: "./images/add-ons/gettyimages-6155-001327-2048x2048.jpg", // image source: https://www.gettyimages.com.au/detail/photo/flowers-in-hotel-room-royalty-free-image/6155-001327
    imgAlt: "Flowers on Arrival",
    desc: "Surprise your partner or treat yourself to fresh flowers upon arrival at your room",
    price: 35
  },
  {
    id: 4,
    category: "add-on",
    title: "Champagne on Arrival",
    imgUrl: "./images/add-ons/44252421-champagne-in-bed-in-a-hotel-room-ice-bucket-glasses-and-fruits-on-white-linen.jpg", // image source: https://www.123rf.com/photo_44252421_champagne-in-bed-in-a-hotel-room-ice-bucket-glasses-and-fruits-on-white-linen.html
    imgAlt: "Champagne on Arrival",
    desc: "Celebrate a special occasion with a bottle of sparkling wine upon arrival at your room",
    price: 40
  },
  {
    id: 5,
    category: "product",
    title: "Kids Activity Pack",
    imgUrl: "./images/products/Kids-Holiday-Actvity-Book-My-Holiday-Album-Yellow.jpg", // image source: https://kidsplaycrafts.com.au/product/my-holiday-album-kids-activity-book-vol-2-100-pack
    imgAlt: "Kids Activity Pack",
    desc: "Occupy the kids with colouring and activities, includes a packet of colouring pencils",
    price: 12
  }
];

const getProducts = () => {
  return productList;
};

export { getProducts };