import Image from "next/image";
import icon from "../../public/assets/playIcon.svg";
import style from "./playIcon.module.css";

const PlayIcon = () => {
  return (
    <div className={style.playIconWrapper}>
      <Image  alt="icon" src={icon} />
    </div>
  );
};

export default PlayIcon;
