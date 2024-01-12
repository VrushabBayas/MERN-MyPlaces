import React from "react";
import UsersList from "../components/UsersList";
import profile from "../../Assets/Images/smalldp.png";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Vrushabh",
      image: profile,
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
