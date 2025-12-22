import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import "./TeacherTable.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/list")
      .then(res => {
        setTeachers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Box height={30} />

      <div className="table-container">
        {/* Header */}
        <div className="table-header">
          <h1>Teacher Information</h1>
          <button className="add-btn" onClick={() => setShowAddModal(true)}>Add Teacher</button>
        </div>

        {/* Table */}
        <table className="teacher-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Experience</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setSelectedTeacher(teacher)}
                >
                  {teacher.id}
                </td>

                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.experience} Years</td>
                <td>{teacher.phone}</td>

                <td>
                  <button
                    className="btn view"
                    onClick={() => setSelectedTeacher(teacher)}
                  >
                    View
                  </button>

                  <button className="btn update">Update</button>

                  {/* ✅ DELETE BUTTON (पहले जैसा) */}
                  <button
                    className="btn delete"
                    onClick={() => { setTeacherToDelete(teacher); setShowDeleteModal(true); }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ADD TEACHER MODAL */}
        {showAddModal && (
          <div className="add-overlay">
            {/* CLOSE ICON */}
            <div className="add-close" onClick={() => setShowAddModal(false)}>
              ×
            </div>

            <div className="add-modal">
              <h2>Add Teacher</h2>

              <div className="add-body">
                <input type="text" placeholder="Teacher Name" />
                <input type="text" placeholder="Subject" />
                <input type="number" placeholder="Experience" />
                <input type="text" placeholder="Phone" />
              </div>

              {/* FOOTER */}
              <div className="add-footer">
                <button className="btn update">Save</button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW TEACHER MODAL */}
        {selectedTeacher && (
          <div className="modal-overlay view-modal-overlay">
            <div className="modal view-modal">
              <h2>Teacher Details</h2>

              <p><strong>Name:</strong> {selectedTeacher.name}</p>
              <p><strong>Subject:</strong> {selectedTeacher.subject}</p>
              <p><strong>Phone:</strong> {selectedTeacher.phone}</p>

              <div className="modal-actions">
                <button className="btn delete" onClick={() => setSelectedTeacher(null)}>Close</button>
              </div>
            </div>
          </div>
        )}

    {/* DELETE CONFIRM MODAL */}
{showDeleteModal && (
  <div className="delete-modal-overlay">
    <div className="delete-modal">
      <h2>Confirm Delete</h2>
      <p>
        Are you sure you want to delete <br />
        <strong>{teacherToDelete?.name}</strong>?
      </p>

      <div className="modal-actions">
        <button
          className="btn delete"
          onClick={() => {
            // Perform delete logic here
            console.log("Deleted:", teacherToDelete);
            setShowDeleteModal(false);
          }}
        >
          Yes, Delete
        </button>
        <button
          className="btn update"
          onClick={() => setShowDeleteModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </>
  );
}

export default Teachers;
