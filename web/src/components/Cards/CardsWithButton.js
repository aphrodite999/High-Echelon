import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonUnderline from "../Button/ButtonUnderline";

const Cards = ({
  className,
  cards,
  cardHeadingLevel,
  cardHeadingSize,
  cardHeadingClassName,
  cardTextSize,
  columnCount,
  columnGap,
}) => {
  const CardHeadingTag = cardHeadingLevel;
  return (
    <div className={`${className}`}>
      <div className={`grid ${columnCount} ${columnGap}`}>
        {cards.map((card, i) => {
          return (
            <div key={i}>
              <GatsbyImage
                image={card.image}
                alt={card.heading}
                className="mb-6"
              />
              <CardHeadingTag
                className={`${cardHeadingSize} ${cardHeadingClassName}`}
              >
                {card.heading}
              </CardHeadingTag>
              <p className={`${cardTextSize}`}>{card.text}</p>
              <ButtonUnderline href={card.link} text="Learn More" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
