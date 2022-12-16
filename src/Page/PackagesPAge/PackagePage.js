import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./PackagePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

export default function PackagePage() {
  const [plans, setplans] = useState([]);
  useEffect(() => {
    axios
      .get(BACK_END + "/plans")
      .then((response) => {
        setplans(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="package">
      <Header />
      <div className="package__heading">OUR EXCLUSIVE TIFFINS</div>
      <div className="package__box">
        {plans.map((plan) => (
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
            <Link to={"/" + plan.id} className="package__cart">
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
