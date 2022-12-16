import "./Footer.scss";
import logo from "../../assets/icons/Logo1.png";
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__logo">
        <img src={logo}></img>
      </div>
      <div className="footer__text">
        People <span className="footer__heart">❤️</span>Our Food
      </div>
    </section>
  );
}
