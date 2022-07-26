import React from "react";
import Card from "./card.jsx";
import "./../../styles/containerCards.css";

const ContainerCards = () => {

  return (
    <>
    <div class="row row-cols-1 row-cols-md-2 g-4 container-cards">
          <Card description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, diam eu hendrerit ultricies, dolor eros tincidunt lectus, et aliquet tortor nulla non libero. "/>
          <Card description="Donec vitae viverra nulla. Pellentesque pretium imperdiet velit. Suspendisse in semper augue, quis mattis dolor. Sed imperdiet augue a felis egestas feugiat. Morbi maximus tortor nisl, et facilisis quam finibus sit amet."/>
          <Card description="Phasellus dignissim, diam quis tempor efficitur, felis odio pharetra velit, vel pellentesque magna lacus non ante. Nulla mollis felis ac dui luctus elementum."/>
          <Card description=" Proin nec mi molestie, aliquet lectus ac, scelerisque dolor. Nulla facilisi. Maecenas sollicitudin vel libero vel faucibus. Aliquam eget nisi ligula. Nulla consectetur lectus et enim volutpat, ac laoreet ligula commodo."/>
    </div>

    </>
  );
};
export default ContainerCards;
