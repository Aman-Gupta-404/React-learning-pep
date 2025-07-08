import React from "react";
import { useParams } from "react-router";

const userData = [
  {
    id: "1",
    name: "Aman",
  },
  {
    id: "2",
    name: "Raj",
  },
  {
    id: "3",
    name: "Mohan",
  },
];

function User() {
  let params = useParams();
  console.log({ params });

  return (
    <div>
      Here from users component:{" "}
      {userData.find((item) => item.id === params.userId)?.name}
    </div>
  );
}

export default User;
