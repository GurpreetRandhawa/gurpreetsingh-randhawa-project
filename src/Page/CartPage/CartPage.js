import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CartPage.scss";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function CartPage() {
  const { planID } = useParams();
  const [plans, setplans] = useState([]);
  useEffect(() => {
    axios
      .get(BACK_END + "/plans")
      .then((response) => {
        setplans(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const selectedplan = plans.filter((plan) => plan.id === planID);
  return (
    <>
      <Header />
      <section className="cart">
        <div className="cart__heading">Your Selected Plan</div>
        {selectedplan.map((plan) => (
          <div className="package__list" key={plan.id}>
            <div className="package__image-container">
              <img className="package__image" src={plan.image} alt="" />
            </div>
            <div className="package__title">{plan.title}</div>
            <div className="package__price">{plan.price}</div>
            <div className="package__ingredients">
              <div className="package__in">{plan.roti}</div>
              <div className="package__in">{plan.vegetable}</div>
              <div className="package__in">{plan.rice}</div>
              <div className="package__in">{plan.dessert}</div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
