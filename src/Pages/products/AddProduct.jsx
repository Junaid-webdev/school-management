import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, Button,MenuItem,InputAdornment  } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { db } from "../../firebase-config";
import {collection,getDocs,addDoc,} from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../../AppStore";

function Addform({ CloseEvent }) {

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const setRows = useAppStore((state) => state.setRows);
    const empCollectionRef = collection(db, "products");


    
    const handleNameChange = (event) =>{
        setName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const creatUser = async () => {
    await addDoc(empCollectionRef,{
        name:name,
        price: Number(price),
        category: category,
        date: new Date().toLocaleDateString("en-GB")

    });
    getUsers();
    CloseEvent();
    Swal.fire("Submitted!","Your file has been submitted","success")
    };
      const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

    const currencies = [
  {
    value: 'Mobile',
    label: 'Mobile',
  },
  {
    value: 'Laptop',
    label: 'Laptop',
  },
  {
    value: 'TV',
    label: 'TV',
  },
  {
    value: 'Remote',
    label: 'Remote',
  },
];
    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Add Product
            </Typography>

            <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={CloseEvent}
            >
                <CloseIcon />
            </IconButton>
          
                 <Box height={20} />
                  <Box sx={{ width: "600px", maxWidth: "100%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" fullWidth onChange={handleNameChange} label="Name" value={name} variant="outlined" size="small" sx={{ width: "600px", maxWidth: "100%" }}   />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic"  type="number" fullWidth onChange={handlePriceChange} InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }} placeholder="0" label="Price" value={price}  variant="outlined" size="small" sx={{ width: "600px", maxWidth: "100%" }}  />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" select fullWidth onChange={handleCategoryChange} label="Category" value={category}  variant="outlined" size="small"   sx={{ width: "600px", maxWidth: "100%" }} >
                             {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                    </TextField>
                </Grid>
          <Grid item xs={12} textAlign="center">
  <Button variant="contained" onClick={creatUser}>
    Submit
  </Button>
</Grid>

            </Grid> 
            </Box>
                 <Box sx={{ m: 4}} />
        </>
    );
}

export default Addform;
