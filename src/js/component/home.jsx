import React from "react";
import ContainerCards from "./containerCards.jsx";
import Footer from "./footer.jsx";
import Jumbotron  from './Jumbotron.jsx';

const Home = () => {
  return (
    <>
      <Jumbotron />
      <ContainerCards/>
      <Footer/>
    </>
  );
};

export default Home;
