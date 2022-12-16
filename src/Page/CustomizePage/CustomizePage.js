import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CustomizePage.scss";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function CustomizePage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(BACK_END + "/food")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const veggiefood = foods.filter((food) => food.category === "vegetable");
  const ricefood = foods.filter((food) => food.category === "rice");
  const rotifood = foods.filter((food) => food.category === "roti");
  const dessertfood = foods.filter((food) => food.category === "dessert");

  return (
    <>
      <Header />
      <section className="custom">
        <div className="custom__title">SELECT YOUR OWN MENU</div>
        <div className="custom__veggie">Vegetable Options</div>
        <div className="custom__holder">
          {veggiefood.map((veggie) => (
            <div className="custom__list" key={veggie.id}>
              <div className="custom__image-container">
                <div className="custom__i-con">
                  <img className="custom__image" src={veggie.image} alt="" />
                </div>

                <div className="custom__para">{veggie.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="custom__veggie">Roti Options</div>
        <div className="custom__holder">
          {rotifood.map((roti) => (
            <div className="custom__list" key={roti.id}>
              <div className="custom__image-container">
                <div className="custom__i-con">
                  <img className="custom__image" src={roti.image} alt="" />
                </div>

                <div className="custom__para">{roti.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="custom__veggie">Rice Options</div>
        <div className="custom__holder">
          {ricefood.map((rice) => (
            <div className="custom__list" key={rice.id}>
              <div className="custom__image-container">
                <div className="custom__i-con">
                  <img className="custom__image" src={rice.image} alt="" />
                </div>

                <div className="custom__para">{rice.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="custom__veggie">Dessert Options</div>
        <div className="custom__holder">
          {dessertfood.map((dessert) => (
            <div className="custom__list" key={dessert.id}>
              <div className="custom__image-container">
                <div className="custom__i-con">
                  <img className="custom__image" src={dessert.image} alt="" />
                </div>

                <div className="custom__para">{dessert.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
