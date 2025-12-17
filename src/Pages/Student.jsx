import { useState } from "react";
import Box from "@mui/material/Box";
import "./Student.css";

function Student() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const students = [
    { id: 1, name: "Amit Sharma", grade: "10th", age: 15, phone: "9876543210" },
    { id: 2, name: "Riya Verma", grade: "9th", age: 14, phone: "9876543211" },
    { id: 3, name: "Karan Singh", grade: "10th", age: 16, phone: "9876543212" },
    { id: 4, name: "Sneha Khan", grade: "8th", age: 13, phone: "9876543542" },
  ];

  return (
    <>
      <Box height={30} />
      <div className="table-container">
        <div className="table-header">
          <h1>Student Information</h1>
          <button className="add-btn" onClick={() => setShowAddModal(true)}>
            Add Student
          </button>
        </div>

        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setSelectedStudent(student)}
                >
                  {student.id}
                </td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.age}</td>
                <td>{student.phone}</td>
                <td>
                  <button
                    className="btn view"
                    onClick={() => setSelectedStudent(student)}
                  >
                    View
                  </button>
                  <button className="btn update">Update</button>
                  <button
                    className="btn delete"
                    onClick={() => {
                      setStudentToDelete(student);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ADD STUDENT MODAL */}
        {showAddModal && (
          <div className="modal-overlay right-modal">
            <div className="modal">
              <h2>Add Student</h2>
              <input type="text" placeholder="Student Name" />
              <input type="text" placeholder="Grade" />
              <input type="number" placeholder="Age" />
              <input type="text" placeholder="Phone" />
              <div className="modal-actions">
                <button className="btn update">Save</button>
                <button
                  className="btn delete"
                  onClick={() => setShowAddModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW STUDENT MODAL */}
        {selectedStudent && (
          <div className="modal-overlay right-modal">
            <div className="modal">
              <h2>Student Details</h2>
              <p><strong>Name:</strong> {selectedStudent.name}</p>
              <p><strong>Grade:</strong> {selectedStudent.grade}</p>
              <p><strong>Age:</strong> {selectedStudent.age}</p>
              <p><strong>Phone:</strong> {selectedStudent.phone}</p>
              <div className="modal-actions">
                <button
                  className="btn delete"
                  onClick={() => setSelectedStudent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DELETE CONFIRM MODAL */}
        {showDeleteModal && (
          <div className="modal-overlay center-modal">
            <div className="modal">
              <h2>Confirm Delete</h2>
              <p style={{ textAlign: "center" }}>
                Are you sure you want to delete <br />
                <strong>{studentToDelete?.name}</strong>?
              </p>
              <div className="modal-actions center-actions">
                <button
                  className="btn delete"
                  onClick={() => {
                    alert("Deleted Successfully");
                    setShowDeleteModal(false);
                    setStudentToDelete(null);
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

export default Student;
