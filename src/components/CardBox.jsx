import { useContext } from "react";
import bg_main from "../assets/1.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import { MainContext } from "./ContainBox";
const CardBox = () => {
  const { cardNumber, CVC,name, month, year } = useContext(MainContext);
  return (
    <div className="left-box">
      <img src={bg_main} alt="bg-1" />
      <div className="card-box">
        <div className="card-one">
          <img src={card1} alt="card1" />
          <span className="chip"></span>
          <span className="circle"></span>
          <div className="box">
            <h1 className="card-num">{cardNumber || "0000 0000 0000 0000"}</h1>
            <div className="box-2">
              <h3>{name || "Jane Appleseed"}</h3>
              <div className="time">
                <span>{month || '00'}</span>/<span>{year || '00'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-two">
          <img src={card2} alt="card2" />
          <h1>{CVC || "000"}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
