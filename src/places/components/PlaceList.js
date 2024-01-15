import React from "react";

import "./PlaceList.css";
import Card from "../../shared/UIElements/Card/Card";
import PlaceItem from "./PlaceItem";
export default function PlaceList({ places }) {
  if (places.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="place-list">
        {places.map((place) => {
          return <PlaceItem key={place.id} place={place} />;
        })}
      </ul>
    );
  }
}
