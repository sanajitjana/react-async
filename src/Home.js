import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("Message");
  }, []);

  return (
    <>
      <h1>This is my Home Page</h1>
    </>
  );
};

export default Home;
