import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  TextField,
  MenuItem,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useAppStore } from "../../AppStore";
import Swal from "sweetalert2";

function Editform({ fid, CloseEvent }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const rows = useAppStore((state) => state.rows);
  const setRows = useAppStore((state) => state.setRows);

  // ✅ Load selected row data
  useEffect(() => {
    if (fid) {
      setName(fid.name || "");
      setPrice(fid.price || "");
      setCategory(fid.category || "");
    }
  }, [fid]);

  // ✅ UPDATE PRODUCT
  const updateUser = async () => {
    try {
      await updateDoc(doc(db, "products", fid.id), {
        name,
        price: Number(price),
        category,
        date: new Date().toLocaleDateString("en-GB"),
      });

      // ✅ Instant UI update (NO REFRESH)
      setRows(
        rows.map((row) =>
          row.id === fid.id
            ? { ...row, name, price, category }
            : row
        )
      );

      CloseEvent();
      Swal.fire("Updated!", "Product updated successfully", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Update failed", "error");
    }
  };

  const categories = ["Mobile", "Laptop", "TV", "Remote"];

  return (
    <>
      <Typography variant="h5" align="center">
        Update Product
      </Typography>

      <IconButton
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={CloseEvent}
      >
        <CloseIcon />
      </IconButton>

      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"  sx={{ width: "600px", maxWidth: "100%" }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Price"
               sx={{ width: "600px", maxWidth: "100%" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Category"
               sx={{ width: "600px", maxWidth: "100%" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              size="small"
            >
              {categories.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={updateUser}  sx={{ width: "600px", maxWidth: "100%" }}>
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Editform;
