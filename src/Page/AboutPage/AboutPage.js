import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import about1 from "../../assets/icons/about1.jpg";
import about2 from "../../assets/icons/about2.jpeg";
import about3 from "../../assets/icons/about3.jpg";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <section className="about">
      <Header />
      <div className="about__title">Who We Are</div>
      <div className="about__contain">
        <div className="about__left">
          <img src={about1} className="about__im"></img>
        </div>
        <div classname="about__right">
          <div className="about__img1">
            <img src={about2} className="about__im"></img>
          </div>
          <div className="about__img2">
            <img src={about3} className="about__im"></img>
          </div>
        </div>
      </div>
      <div className="about__head">
        We Love food. Sorry, we love Indian food.
      </div>
      <p className="about__para">
        Masala Kitchen is the Lower Mainland’s top choice when it comes to an
        affordable tiffin service. With a head chef that has real experience
        working in the industry as a trained cook for many years, you can expect
        nothing but the best and the most authentic tasting experience. We
        guarantee it.
      </p>
      <Footer />
    </section>
  );
}
