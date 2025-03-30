import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import styles from "./Card.module.css";

function BookCard({ handleLikedList, data }) {
  const { title, author, pages, image, language } = data;
  
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };
  return (
    <div
      className={`${styles.card} flex items-center bg-[#d1d5db] rounded-md shadow hover:bg-[#c1c0c2] p-4`}
    >
      <img className="rounded-md w-16" src={image} alt={title} />
      <div className={`${styles.text} flex flex-col flex-1 justify-between`}>
        <h3 className="text-[#333333] font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">{author}</p>
        <div>
          <span className="text-sm text-blue-400">{language}</span>
          <span className="text-sm text-gray-500">{pages} pages</span>
        </div>
      </div>

      {/* دکمه را سمت راست و وسط قرار دادیم */}
      <button
        onClick={likeHandler}
        className={`${styles.button} cursor-pointer transition ml-auto self-center`}
      >
        <FaHeart
          className={`size-5 ${
            like ? "text-red-500" : "text-white"
          } hover:size-6`}
          color={like ? "red" : "#fff"}
        />
      </button>
    </div>
  );
}

export default BookCard;
