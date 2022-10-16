import React from "react";
import "./GamingLab.css";
import {
  CardWrapper,
  Title,
  ExpendedCard,
  gameLabData,
  Button,
} from "../index";

const GamingLab = () => {
  const arrayExpendedCard = gameLabData.map((expendCard) => {
    return <ExpendedCard key={expendCard.id} {...expendCard} />;
  });

  return (
    <>
      <CardWrapper>
        <Title whiteTitle="Your Gaming" pinkTitle="Library" />
        {arrayExpendedCard}
      </CardWrapper>
      <div className="move-btn--2">
        <Button text={"View Your Library"} />
      </div>
    </>
  );
};

export default GamingLab;
