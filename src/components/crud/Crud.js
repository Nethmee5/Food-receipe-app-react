//1: table list ekk data view krnn, e data tik array ekk store kr gnn

//2: array ekt data add krn tiynn mokk hri form ekk hadal : form ekk thinw ek fill krl click krm add wenn on
//3: delete button ek click klm data ek delete wel  penn on
//4: update kiyl button ekk dil ek ebuwam data update wenn on

import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function BasicTable() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [arr, setArr] = useState([{ name: "nethmi", age: "12" }]);
  const [isChange, setIsChange] = useState(Math.random(100));

  const addData = (e) => {
    arr.push({ name: name, age: age });
    console.log(arr);
    setIsChange(Math.random(100));
  };
  useEffect(() => {}, [isChange]);

  //add ekt method

  const Form = () => {
    return (
      <div className="add">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="age"
            variant="outlined"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              console.log(age);
            }}
          />
          <br />

          <Button
            id="btn-submit"
            onClick={(e) => {
              addData(e);
            }}
            variant="contained"
          >
            submit
          </Button>
        </Box>
      </div>
    );
  };
  //delete ekt method ek


  
  const del = (item) => {
    //arr.pop({ name: name, age: age });
    var arrr = arr.filter((obj)=> item.name != obj.name)
    setArr(arrr);
    console.log(arr);
    setIsChange(Math.random(100));
  };
 
  

//// update arr break
// step 
// update krnn on date ek gnn on ex {age:,name:}
//oy data tik update klyutu./arr eke kothntd danne kiyl blnn ex : index 
//e dann on thnt value tik assign krnn arr[0] = {}
  //update ekt method ek
  const update = (item,index) => {

  
 
 var nr = arr;
 nr[index] = {name,age};
 setArr(nr);
  //arr[index]=item;
  }





  const List = () => {
    return arr.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell align="right">{index}</TableCell>

          <TableCell align="right">{item?.name}</TableCell>
          <TableCell align="right">{item.age}</TableCell>

          <TableCell>
            <Button variant="contained" style={{ backgroundColor: "red" }}
            onClick={(e) => {
                update(e);
              }}
            >
              Update
            </Button>
          </TableCell>
          <TableCell>
            <Button
              variant="contained"
              style={{ backgroundColor: "Green" }}
              onClick={(e) => {
                del(item);
              }}
            >
              
              Delete
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <Form />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{isChange ? <List /> : ""}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
