import React from "react";

//Components
import NavBar from "../../components/NavBar";
import TourList from "../../components/TourList/index";
import Footer from "../../components/Footer/index";

export default function index() {
  return (
    <React.Fragment>
      <NavBar />
      <TourList />
      <Footer />
    </React.Fragment>
  );
}
