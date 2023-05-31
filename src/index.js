import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import Begin from "./Begin";
import TableComponent from "./TableComponent";
// import FormComponent from "./FormComponent";
import "./index.css";
// import App from "./App";
import { useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Root() {
  const [state, setState] = useState({ number: 1, color: "red" });

  // console.log("re-render?", state);

  // useEffect(() => {
  //   const store = {
  //     data: [],
  //   };

  //   function getData() {
  //     const inputs = document.getElementsByTagName("input");
  //     return {
  //       first: inputs[0].value,
  //       last: inputs[1].value,
  //       email: inputs[2].value,
  //       phone: inputs[3].value,
  //       location: inputs[4].value,
  //     };
  //   }

  //   function updateTable() {
  //     document.getElementById("data-table").innerHTML = store.data
  //       .map(
  //         (item, index) =>
  //           `<tr>
  //     <td>${index + 1}</td>
  //     <td>${item.first}</td>
  //     <td>${item.last}</td>
  //     <td>${item.email}</td>
  //     <td>${item.phone}</td>
  //     <td>${item.location}</td>
  //     <td><button class="edit">Edit</button><button class="del">Del</button></td>
  //     </tr>`
  //       )
  //       .join("");
  //     // thêm sự kiện cho nút
  //     const editBtns = document.getElementsByClassName("edit");
  //     const delBtns = document.getElementsByClassName("del");

  //     for (let i = 0; i < editBtns.length; i++) {
  //       editBtns[i].onclick = function onEdit() {
  //         const editData = getData();
  //         store.data.splice(i, 1, editData);
  //         updateTable();
  //       };
  //       delBtns[i].onclick = function onEdit() {
  //         store.data.splice(i, 1);
  //         updateTable();
  //       };
  //     }
  //   }

  //   document.getElementById("button").onclick = function onCreate() {
  //     const newData = getData();
  //     store.data.push(newData);

  //     updateTable(store.data);
  //   };

  //   fetch(
  //     "https://raw.githubusercontent.com/tuandq2112/trainning-fe/api/api/user.json",
  //     {
  //       // method: "delete",
  //       // headers: {
  //       //   Authorization: "Bearer a...."
  //       // },
  //       // body: {
  //       // }
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res, "data???");
  //       store.data = res.data;
  //       updateTable();
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });

  //   // setTimeout(() => {
  //   //   setState(20);
  //   // }, 2000);
  // }, [state.color]); // dependencies
  // setState(state+1);

  return (
    <>
      <TableComponent data={state} />
    </>

    // <div className="body">
    //   <div class="wrap">
    //     <h2>thêm sửa xóa với html + css + js</h2>
    //     <div class="container">
    //       <div class="wrap-table">
    //         <table>
    //           <thead>
    //             <tr class="head">
    //               <th>ID</th>
    //               <th>First</th>
    //               <th>Last</th>
    //               <th>Email</th>
    //               <th>Phone</th>
    //               <th>Location</th>
    //               <th>Action</th>
    //             </tr>
    //           </thead>
    //           <tbody id="data-table"></tbody>
    //         </table>
    //       </div>

    //       <div class="class-form">
    //         <label>First</label>
    //         <input />

    //         <label>Last</label>
    //         <input />

    //         <label>Email</label>
    //         <input />

    //         <label>Phone</label>
    //         <input />

    //         <label>Location</label>
    //         <input />

    //         <button id="button" onclick="onCreate()">
    //           Create
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

root.render(<Root />);
