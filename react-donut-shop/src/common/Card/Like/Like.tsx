import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Style from "./Like.module.css";

interface Props {
  liked: boolean;
  onClick(): void;
}
const Like = ({ liked, onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(liked);
  return (
    <div
      className={[Style.likeBtn, isLiked ? Style.liked : null].join(" ")}
      onClick={() => {
        setIsLiked((prev) => !prev);
        onClick();
      }}
    >
      {!isLiked && <AiOutlineHeart />}
      {isLiked && <AiFillHeart />}
    </div>
  );
};

export default Like;
