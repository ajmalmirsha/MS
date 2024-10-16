import style from "./infoContainer.module.css";
import residenceImg from "../../public/assets/residenceImg.svg";
import playCardImg from "../../public/assets/playCardImg.svg";
import Image from "next/image";

const InfoContainer = () => {
  return (
    <div className={style.container}>
      <h3 className={style.heading}>Lorem Ipsum</h3>
      <p className={style.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
        velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
        velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis
        elit lorem, et varius ipsum dictum.
      </p>
      <div className={style.cardWrapper}>
        <Card
          no={"01"}
          heading={"Lorem ipsum dolor sit amet, consectetur"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          }
        />
        <Card
          no={"02"}
          heading={"Lorem ipsum dolor sit amet, consectetur"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          }
        />
        <Card
          no={"03"}
          isActive={true}
          heading={"Lorem ipsum dolor sit amet, consectetur"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
          }
        />
      </div>

      <br />

      <div className={style.resContainer}>
        <Image alt="residenceImg" src={residenceImg} />

        <div className={style.wrapper}>
          <div className={style.contentWrapper}>
            <h3>Lorem Ipsum dolor sit consectetur</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
              velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
              velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
              iaculis elit lorem, et varius ipsum dictum.{" "}
            </p>
          </div>

          <div className={style.playCardContainer}>
            <h4>Lorem Ipsum?</h4>
            <Image alt="playCardImg" layout="responsive" src={playCardImg} />
            <div className={style.cWrapper}>
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ isActive, no, heading, desc }) => {
  return (
    <div className={`${style.cardContainer} ${isActive && style.active}`}>
      <h3>{no}</h3>
      <hr />
      <h3>{heading}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default InfoContainer;
