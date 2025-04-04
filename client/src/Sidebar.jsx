// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   // Example state for notification counts (you can update this based on your app's logic)
//   const [notificationCounts] = useState({
//     dashboard: 2,
//     skills: 0,
//     nextSteps: 1,
//     jobSectors: 0,
//     values: 5,
//   });

//   const styles = {
//     sidebar: {
//       width: "250px",
//       height: "100vh",
//       backgroundColor: "white",
//       padding: "20px",
//       position: "fixed",
//       left: "0",
//       top: "0",
//       display: "flex",
//       flexDirection: "column",
//       boxShadow: "4px 0 10px rgba(0, 0, 0, 0.2)", // Adds shadow
//       zIndex: "1000", // Ensures it appears above the navbar
//       transition: "transform 0.3s ease-in-out",
//     },
//     header: {
//       fontSize: "20px",
//       fontWeight: "bold",
//       marginBottom: "20px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//     list: {
//       listStyleType: "none",
//       padding: "0",
//       margin: "0",
//     },
//     listItem: {
//       margin: "10px 0",
//       position: "relative", // So we can position the badge absolutely
//     },
//     link: {
//       textDecoration: "none",
//       color: "#333",
//       fontSize: "18px",
//       fontWeight: "500",
//       padding: "10px",
//       display: "block",
//       borderRadius: "5px",
//       transition: "background 0.3s, transform 0.2s",
//     },
//     linkHover: {
//       backgroundColor: "#ddd",
//       transform: "scale(1.05)",
//     },
//     badge: {
//       position: "absolute",
//       top: "-5px",
//       right: "-10px",
//       backgroundColor: "red",
//       color: "white",
//       borderRadius: "50%",
//       width: "20px",
//       height: "20px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "12px",
//     },
//     hidden: {
//       display: "none", // Hide on smaller screens
//     },
//   };

//   return (
//     <div
//       style={{
//         ...styles.sidebar,
//         ...(window.innerWidth <= 600 ? styles.hidden : {}),
//       }}
//     >
//       <div style={styles.header}>
//         Career Tools
//         <span className="material-symbols-outlined">menu_book</span>
//       </div>

//       <ul style={styles.list}>
//         <li style={styles.listItem}>
//           <Link
//             to="/dashboard"
//             style={styles.link}
//             onMouseEnter={(e) => (e.target.style.background = "#ddd")}
//             onMouseLeave={(e) => (e.target.style.background = "transparent")}
//           >
//             Dashboard
//             {notificationCounts.dashboard > 0 && (
//               <div style={styles.badge}>
//                 {notificationCounts.dashboard}
//               </div>
//             )}
//           </Link>
//         </li>
//         <li style={styles.listItem}>
//           <Link
//             to="/skills"
//             style={styles.link}
//             onMouseEnter={(e) => (e.target.style.background = "#ddd")}
//             onMouseLeave={(e) => (e.target.style.background = "transparent")}
//           >
//             My Skills
//             {notificationCounts.skills > 0 && (
//               <div style={styles.badge}>
//                 {notificationCounts.skills}
//               </div>
//             )}
//           </Link>
//         </li>
//         <li style={styles.listItem}>
//           <Link
//             to="/next-steps"
//             style={styles.link}
//             onMouseEnter={(e) => (e.target.style.background = "#ddd")}
//             onMouseLeave={(e) => (e.target.style.background = "transparent")}
//           >
//             My Next Steps
//             {notificationCounts.nextSteps > 0 && (
//               <div style={styles.badge}>
//                 {notificationCounts.nextSteps}
//               </div>
//             )}
//           </Link>
//         </li>
//         <li style={styles.listItem}>
//           <Link
//             to="/job-sectors"
//             style={styles.link}
//             onMouseEnter={(e) => (e.target.style.background = "#ddd")}
//             onMouseLeave={(e) => (e.target.style.background = "transparent")}
//           >
//             My Job Sectors
//             {notificationCounts.jobSectors > 0 && (
//               <div style={styles.badge}>
//                 {notificationCounts.jobSectors}
//               </div>
//             )}
//           </Link>
//         </li>
//         <li style={styles.listItem}>
//           <Link
//             to="/values"
//             style={styles.link}
//             onMouseEnter={(e) => (e.target.style.background = "#ddd")}
//             onMouseLeave={(e) => (e.target.style.background = "transparent")}
//           >
//             My Values
//             {notificationCounts.values > 0 && (
//               <div style={styles.badge}>
//                 {notificationCounts.values}
//               </div>
//             )}
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }
