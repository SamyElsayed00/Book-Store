import Carousel from "./Carousel";
import { assets } from "../assets/assets";

const TopRated = () => {
  const books = [
    {
      img: assets.book1,
      title: "Cooking Made Easy",
      author: "Emily Clark",
      rate: 4,
      desc: "Simple and delicious recipes for everyday cooking",
      price: 9.99,
    },
    {
      img: assets.book2,
      title: "Healthy Living",
      author: "John Miller",
      rate: 5,
      desc: "Your guide to nutritious meals and balanced life",
      price: 12.99,
    },
    {
      img: assets.book3,
      title: "Creative Baking",
      author: "Sarah Jones",
      rate: 3,
      desc: "Fun and easy recipes for baking enthusiasts",
      price: 7.49,
    },
    {
      img: assets.book4,
      title: "Everyday Desserts",
      author: "Mark Lee",
      rate: 4,
      desc: "Quick and tasty desserts for everyone",
      price: 10.99,
    },
    {
      img: assets.book1,
      title: "Everyday Desserts",
      author: "Mark Lee",
      rate: 4,
      desc: "Quick and tasty desserts for everyone",
      price: 4.99,
    },
    {
      img: assets.book2,
      title: "Everyday Desserts",
      author: "Mark Lee",
      rate: 4,
      desc: "Quick and tasty desserts for everyone",
      price: 12.99,
    },
    {
      img: assets.book3,
      title: "Everyday Desserts",
      author: "Mark Lee",
      rate: 4,
      desc: "Quick and tasty desserts for everyone",
      price: 9.99,
    },
  ];

  return (
    <div className="bg-white mb-10">
      <div className="container mx-auto px-6 md:px-20 relative">
        <h1 className="text-2xl font-bold text-center p-5 my-3">
          Top Rated Books
        </h1>
        <Carousel books={books}/>
      </div>
    </div>
  );
};

export default TopRated;
