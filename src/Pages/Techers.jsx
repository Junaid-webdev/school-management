// import { useState } from "react";
// import Box from "@mui/material/Box";
// import "./TeacherTable.css"; // Make sure this file exists in the same folder

// function Teachers() {
//   const [showModal, setShowModal] = useState(false);

//   const teachers = [
//     { id: 1, name: "Mr. Sharma", subject: "Mathematics", experience: 10, phone: "9876543210" },
//     { id: 2, name: "Ms. Verma", subject: "English", experience: 7, phone: "9876501234" },
//     { id: 3, name: "Mr. Khan", subject: "Science", experience: 12, phone: "9876598765" },
//     { id: 4, name: "Mrs. Singh", subject: "Computer", experience: 5, phone: "9876512345" },
//   ];

//   return (
//     <>
//       <Box height={30} />

//       <div className="table-container">
//         {/* Header */}
//         <div className="table-header">
//           <h1>Teacher Information</h1>
//           <button className="add-btn" onClick={() => setShowModal(true)}>
//             + Add Teacher
//           </button>
//         </div>

//         {/* Table */}
//         <table className="teacher-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Subject</th>
//               <th>Experience</th>
//               <th>Phone</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {teachers.map((t) => (
//               <tr key={t.id}>
//                 <td>{t.id}</td>
//                 <td>{t.name}</td>
//                 <td>{t.subject}</td>
//                 <td>{t.experience} Years</td>
//                 <td>{t.phone}</td>
//                 <td>
//                   <button className="btn view">View</button>
//                   <button className="btn update">Update</button>
//                   <button className="btn delete">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Modal */}
//         {showModal && (
//           <div className="modal-overlay">
//             <div className="modal">
//               <h2>Add Teacher</h2>
//               <input placeholder="Teacher Name" />
//               <input placeholder="Subject" />
//               <input type="number" placeholder="Experience" />
//               <input placeholder="Phone" />

//               <div className="modal-actions">
//                 <button className="btn update">Save</button>
//                 <button className="btn delete" onClick={() => setShowModal(false)}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Teachers;
