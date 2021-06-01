import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(result.data);
  };
  return (
    <>
      <div class="container mt-5">
        <table class="table shadow table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <th scope="row">{user.name}</th>
                <th scope="row">{user.email}</th>
                <th scope="row">{user.phone}</th>
                <th>Action</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
