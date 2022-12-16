import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Main from "../../components/main/Main";
import Comments from "../../components/comment/Comment";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const BACK_END = process.env.REACT_APP_BACKEND_URL;

function HomePage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(BACK_END + "/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Comments comm={comments} />
      <Footer />
    </>
  );
}
export default HomePage;
