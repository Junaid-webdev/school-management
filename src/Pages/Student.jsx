import React, { useEffect, useState } from "react";
import {
  Table,
  Box,
  TableBody,
  Typography,
  Divider,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

import Addform from "./products/AddProduct";
import Editform from "./products/EditProduct";

const API_URL = "http://127.0.0.1:8000/api/student";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Student() {
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState(null);
const getTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find(c => c.startsWith("token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};
  // FETCH FROM DATABASE
  const fetchStudents = async () => {
    try {
      const token = getTokenFromCookie() // yahin se token aayega
      console.log(token)
      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      console.log(res.data)
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students:", err.response || err);
    }
};


  useEffect(() => {
    fetchStudents();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    fetchStudents();
  };

  const handleEditClose = () => {
    setEditOpen(false);
    fetchStudents();
  };

  const deleteStudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${API_URL}/${id}`);
        fetchStudents();
      }
    });
  };

  const editData = (student) => {
    setFormid(student);
    setEditOpen(true);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Addform CloseEvent={handleClose} />
        </Box>
      </Modal>

      <Modal open={editopen} onClose={handleEditClose}>
        <Box sx={style}>
          <Editform CloseEvent={handleEditClose} fid={formid} />
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Student Information</Typography>
          <Button variant="contained" onClick={handleOpen}>
            Add Student
          </Button>
        </Box>

        <Divider />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class ID</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Mother Name</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>


         <TableBody>
  {students.length > 0 ? (
    students.map((student) => (
      <TableRow key={student.id}>
        {/* ID */}
        <TableCell>{student.id}</TableCell>

        {/* Name */}
        <TableCell>{student.name}</TableCell>

        {/* Class ID */}
        <TableCell>{student.class_id}</TableCell>

        {/* Father Name */}
        <TableCell>{student.father_name}</TableCell>

        {/* Mother Name */}
        <TableCell>{student.mother_name ?? "-"}</TableCell>

        {/* Mobile */}
        <TableCell>{student.number}</TableCell>

        {/* Address */}
        <TableCell>{student.address}</TableCell>

        {/* Action */}
        <TableCell>
          <Stack direction="row" spacing={2}>
            <EditIcon
              sx={{ color: "blue", cursor: "pointer" }}
              onClick={() => editData(student)}
            />
            <DeleteIcon
              sx={{ color: "darkred", cursor: "pointer" }}
              onClick={() => deleteStudent(student.id)}
            />
          </Stack>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={8} align="center">
        No Data Found
      </TableCell>
    </TableRow>
  )}
</TableBody>

        </Table>
      </TableContainer>
    </>
  );
}
