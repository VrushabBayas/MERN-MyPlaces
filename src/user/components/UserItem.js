import React from "react";

import "./UserItem.css";
export default function UserItem({ user }) {
  return (
    <li key={user.id}>
      {user.name}
      {user.places}
      <img src={user.image} alt={user.name} />
    </li>
  );
}
