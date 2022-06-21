import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";


function Post() {
    const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const postData = (e) => {
    e.preventDefault();
    axios.post(`https://jsonplaceholder.typicode.com/posts`,{
        title,
        body
    }).then(res=>console.log("Posting data",res))
    .catch((err) => console.log(err));
} 


 const arr = data.map((data, index) => {
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );
  });

return (
    <div className="Get">
      <h1> axios</h1>
      <form>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)}/>
        <br/>

        <label>Body</label>
        <input type="text" value={body} onChange={(e) =>setBody(e.target.value)}/>
        <br/>
    <button onClick={postData}> Post </button>
    </form>
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

export default Post;
