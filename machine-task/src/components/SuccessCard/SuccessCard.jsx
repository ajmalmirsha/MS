import style from "./successCard.module.css";

const SuccessCard = () => {
  return (
    <div className={style.container}>
      <div className={style.itemWrapper}>
        <h3>8Years</h3>
        <h4>of Success</h4>
      </div>
      <div className={style.hr} />
      <div className={style.itemWrapper}>
        <h3>200+</h3>
        <h4>Members</h4>
      </div>
      <div className={style.hr} />
      <div className={style.itemWrapper}>
        <h3>150+</h3>
        <h4>All Over The USA</h4>
      </div>
      <div className={style.hr} />

      <div className={style.itemWrapper}>
        <h3>200k</h3>
        <h4>Satisfied Clients</h4>
      </div>
    </div>
  );
};

export default SuccessCard;
