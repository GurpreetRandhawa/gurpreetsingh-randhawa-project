import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
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
  console.log(plans);
  return <section className="package"></section>;
}
