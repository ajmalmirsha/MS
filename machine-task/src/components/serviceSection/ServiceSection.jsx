import Image from "next/image";
import style from "./serviceSection.module.css";
import img1 from "../../public/assets/img1.svg";
import img2 from "../../public/assets/img2.svg";
import img3 from "../../public/assets/img3.svg";
import img4 from "../../public/assets/img4.svg";

const ServiceSection = () => {
  return (
    <div className={style.container}>
      <h3>Lorem ipsum dolor sit amet, consectetur </h3>

      <div className={style.wrapper}>
        <div className={style.leftWrapper}>
          <ImgCard src={img1} />
          <ImgCard src={img3} />
        </div>
        <div className={style.rightWrapper}>
          <ImgCard src={img2} />
          <ImgCard src={img4} />
        </div>
      </div>
    </div>
  );
};

const ImgCard = ({ src }) => {
  return (
    <div className={style.imgCardWrapper}>
      <Image alt="src" layout="responsive" src={src} />
      <div className={style.contentWrapper}>
        <h3>Consectetur adipiscing elit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst.{" "}
        </p>
      </div>
    </div>
  );
};

export default ServiceSection;
