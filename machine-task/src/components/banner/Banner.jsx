import Image from "next/image";
import React from "react";
import BannerImg from "../../public/assets/bannerImg.svg";
import Navbar from "../navbar/Navbar";
import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.container}>
      <Image className={style.bannerImg} alt="bannerImg" src={BannerImg} layout="fill" objectFit="cover"/>
      <Navbar />
      <div className={style.contentWrapper}>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
          habitasse platea dictumst.{" "}
        </p>
      </div>
    </div>
  );
};

export default Banner;
