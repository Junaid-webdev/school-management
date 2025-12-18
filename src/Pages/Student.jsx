import React, { useState } from 'react';
import {
  Table, Box, TableBody, Typography, Divider,
  TableCell, TableContainer, TableHead,
  TableRow, Paper, Stack
} from '@mui/material';
import Modal from '@mui/material/Modal';
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Addform from './products/AddProduct';
import Editform from './products/EditProduct';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const students = [
  { id: 1, name: "John Doe", subject: "Math", class: "IV" },
  { id: 2, name: "Jane Smith", subject: "Science", class: "VI" },
  { id: 3, name: "Alice Johnson", subject: "English", class: "VIII" },
  { id: 4, name: "Bob Brown", subject: "History", class: "XII" },
];

export default function Student() {
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);

  const deleteStudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `Student ${id} deleted`, "success");
      }
    });
  };

  const editData = (id, name, subject, course) => {
    setFormid({ id, name, subject, course });
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
        <Typography variant="h5" sx={{ p: 2 }}>
          Student Information
        </Typography>
        <Divider />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.subject}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <EditIcon
                      sx={{ color: "blue", cursor: "pointer" }}
                      onClick={() =>
                        editData(
                          student.id,
                          student.name,
                          student.subject,
                          student.class
                        )
                      }
                    />
                    <DeleteIcon
                      sx={{ color: "darkred", cursor: "pointer" }}
                      onClick={() => deleteStudent(student.id)}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
