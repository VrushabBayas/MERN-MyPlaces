import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";

export default function UsersList(props) {
  if (!props.items.length) {
    return (
      <div className="center">
        <h2>No Users Found.</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => {
        return <UserItem user={user} key={user.id} />;
      })}
    </ul>
  );
}
