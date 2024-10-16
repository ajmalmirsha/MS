import style from "./insights.module.css";
import icon from "../../public/assets/playIcon.svg";
import L1img from "../../public/assets/L1img.svg";
import L2img from "../../public/assets/L2img.svg";
import L3img from "../../public/assets/L3img.svg";
import Image from "next/image";

const Insights = () => {
  return (
    <div className={style.container}>
      <div className={style.headWrapper}>
        <h3>Latest Insights</h3>
        <div className={style.iconWrapper}>
          <div className={style.leftIcon}>
            <Image alt="icon" src={icon} />
          </div>
          <div className={style.rightIcon}>
            <Image alt="icon" src={icon} />
          </div>
        </div>
      </div>

      <div className={style.cardWrapper}>
        <ImgCard
          src={L1img}
          date="21 March 2023"
          content="dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"
        />
         <ImgCard
          src={L2img}
          date="21 March 2023"
          content="dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"
        />
         <ImgCard
          src={L3img}
          date="21 March 2023"
          content="dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"
        />
      </div>
    </div>
  );
};

const ImgCard = ({ src, date, content }) => (
  <div className={style.imgCard}>
    <Image alt="src" layout="responsive" src={src} />
    <div className={style.contentWrapper}>
      <p>{date}</p>
      <h5>{content}</h5>
      <button className={style.readMoreBtn}>Read More</button>
    </div>
  </div>
);

export default Insights;
