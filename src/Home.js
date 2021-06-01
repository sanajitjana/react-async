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
      <div className="container text-center">
        <h1 className="my-5">
          API Data Fetch using{" "}
          <b>
            <i> async</i>
          </b>
        </h1>
        <table
          className="table table-hover"
          style={{ border: "1px solid black" }}
        >
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr>
                <td scope="row" style={{ height: "55px" }}>
                  {index + 1}
                </td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5 className="my-5">
          Copyright &copy; 2021 Sanajit Jana. All Rights Reserved.
        </h5>
      </div>
    </>
  );
};

export default Home;
