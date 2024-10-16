import Image from "next/image";
import style from "./videoplayer.module.css";
import thumbnail from "../../public/assets/thumbnail.svg";
import PlayIcon from "../playIcon/PlayIcon";

const VideoPlayer = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Image objectFit="cover" layout="responsive" alt="thumbnail" src={thumbnail} />
        <div className={style.contentWrapper}>
          <PlayIcon />
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div>
            <h5>Sanchez Alexis</h5>
            <p>CEO & Founder of Demo</p>
          </div>
        </div>
      </div>

      <div className={style.detailsWrapper}>
        <div className={style.leftWrapper}>
          <h2>Lorem ipsum dolor sit amet, consectetur </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
            congue non sem et efficitur. Donec in dolor nec tellus iaculis
            sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
            convallis accumsan, nibh odio gravida felis, vitae mollis massa
            lectus a neque. Mauris mollis elit quis iaculis iaculis. Vestibulum
            molestie nisl eget aliquet scelerisque. Vivamus efficitur dui eget
            velit interdum, non dapibus nisi fringilla. Mauris fermentum
            venenatis volutpat. Quisque efficitur ultricies erat eget rutrum.
            Phasellus feugiat quam eget est dapibus, non eleifend justo
            fermentum. Sed et commodo arcu, id euismod dui.
          </p>
        </div>

        <div className={style.rightWrapper}>
          <div className={style.itemWrapper}>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem.
            </p>
          </div>
          <hr />
          <div className={style.itemWrapper}>
            <h4>Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
