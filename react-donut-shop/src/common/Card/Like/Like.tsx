import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Style from "./Like.module.css";

interface Props {
  liked: boolean;
  onClick(): void;
}
const Like = ({ liked, onClick }: Props) => {
  return (
    <div
      className={[Style.likeBtn, liked ? Style.liked : null].join(" ")}
      onClick={onClick}
    >
      {!liked && <AiOutlineHeart />}
      {liked && <AiFillHeart />}
    </div>
  );
};

export default Like;
