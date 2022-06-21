
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import React, { useState } from "react";

function addData(){
        
     
       
         

    
}


function Form() {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
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
                    console.error(name);
                    console.warn(name);
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
              type="submit"
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
  }
  export default Form;