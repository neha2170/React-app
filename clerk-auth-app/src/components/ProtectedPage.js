import React from "react";
import { UserButton } from "@clerk/clerk-react";

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>You are logged in and can view this page!</p>
      <UserButton />
    </div>
  );
};

export default ProtectedPage;
