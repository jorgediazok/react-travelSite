import React from 'react';
import CardItem from '../components/CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel trough the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Practice Yachting in the middle of the Artic Ocean. Surreal."
              label="Extreme"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Camp in the Sahara Desert with a group of awesome Berebers."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Play football in the most isolated football field in the world."
              label="Weird"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
