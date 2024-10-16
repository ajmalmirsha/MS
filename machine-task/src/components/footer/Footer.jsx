import style from "./footer.module.css";
import footerImg from "../../public/assets/footerImg.svg";
import Image from "next/image";
import fb from "../../public/assets/fb.svg";
import x from "../../public/assets/x.svg";
import linkedin from "../../public/assets/linkedin.svg";
import youtube from "../../public/assets/youtube.svg";
import instagram from "../../public/assets/instagram.svg";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.vacancyWrapper}>
        <Image alt="footerImg" src={footerImg} />
        <div className={style.vacWrapper}>
          <div className={style.lWrapper}>
            <h3>Let’s work Together</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
              tristique euismod rcu tristique nisl id nibh. viverra feugiat
              viverra.Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div>
            <button>View Vacancies</button>
          </div>
        </div>
      </div>

      <div className={style.quickLinkWrapper}>
        <h3>Quick Links</h3>
        <h5>Home</h5>
        <h5>About Us</h5>
        <h5>Pricing</h5>
        <h5>Portfolios</h5>
        <h5>Insights</h5>
      </div>

      <div className={style.fTable}>
        <div className={style.sec}>
          <div className={style.item}>Lorem ipsum dolor sit amet</div>
          <div className={style.item}>Lorem ipsum dolor sit amet</div>
          <div className={style.item}>Lorem ipsum dolor sit amet</div>
        </div>

        <div className={style.sec}>
          <div className={style.item}>Lorem</div>
          <div className={style.item}>ipsum</div>
          <div className={style.item}>Consectetur</div>
          <div className={style.item}>Efficitur</div>
        </div>

        <div className={style.sec}>
          <h3>Contact Us</h3>
          <p>
            Lorem Ipsum, Iso lorem,Iso <br /> Lorem Posum
          </p>
          <p>+91 00000 00000</p>
          <p>info@demo.com</p>
          <br />
          <p>Follow us on</p>
          <div className={style.iconContainer}>
            <div className={style.iconWrapper}>
              <Image alt="fb" src={fb} />
            </div>

            <div className={style.iconWrapper}>
              <Image alt="x" src={x} />
            </div>

            <div className={style.iconWrapper}>
              <Image alt="linkedin" src={linkedin} />
            </div>

            <div className={style.iconWrapper}>
              <Image alt="youtube" src={youtube} />
            </div>

            <div className={style.iconWrapper}>
              <Image alt="instagram" src={instagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
