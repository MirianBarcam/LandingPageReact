import React from "react";
import NavBar from "./navbar.jsx";
import ContainerCards from "./containerCards.jsx";
import Footer from "./footer.jsx";
import Jumbotron  from './Jumbotron.jsx';


const Home = () => {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <ContainerCards/>
      <Footer/>
    </>
  );
};

export default Home;
