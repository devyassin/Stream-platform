import React from "react";
import "./MostPopular.css";
import { Card, Title, CardWrapper, mostPopularData, Button } from "../index";

const MostPopular = () => {
  const arrayCards = mostPopularData.map((card) => (
    <Card
      key={card.id}
      url={card.url}
      gameName={card.gameName}
      gameType={card.gameType}
      gameRate={card.gameRate}
      gameDownload={card.gameDownload}
    />
  ));
  return (
    <>
      <CardWrapper>
        <Title whiteTitle={"Most Popular"} pinkTitle={"Right Now"} />
        <div className="cards">{arrayCards}</div>
        <div className="move--btn">
          <Button text={"Discover Popular"} />
        </div>
      </CardWrapper>
    </>
  );
};

export default MostPopular;
