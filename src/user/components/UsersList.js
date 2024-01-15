import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/UIElements/Avatar/Card/Card";

export default function UsersList(props) {
  if (!props.items.length) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found.</h2>
        </Card>
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
