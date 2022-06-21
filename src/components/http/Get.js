import React, { useEffect, useState } from "react";
import axios from "axios";

function Get() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

 const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
        <td>{'Edit'}</td>
        <td>{'Del'}</td>
      </tr>
    );
  });

return (
    <div className="Get">
      <h1> axios</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {arr}
      </table>
    </div>
  );
}

export default Get;
