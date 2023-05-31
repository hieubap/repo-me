import React, { useEffect, useState } from "react";

function TableComponent() {
  const [data, setData] = useState([1, 2, 3]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tuandq2112/trainning-fe/api/api/user.json"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div style={{ padding: 100, fontSize: 30 }}>
      {data?.map((item, idx) => (
        <div>{idx}</div>
      ))}
      {/* <div>state1= {state}</div>
      <div>state2= {state2}</div>
      <div
        style={{ backgroundColor: "blue", padding: 30, color: "white" }}
        onClick={onClick}
      >
        click me 1
      </div>
      <div
        style={{ backgroundColor: "blue", padding: 30, color: "white" }}
        onClick={onClick2}
      >
        click me 2
      </div> */}
    </div>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>head1</th>
    //       <th>head2</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>hàng 1</td>
    //       <td>hàng 2</td>
    //     </tr>
    //     <tr>
    //       <td>hàng 3</td>
    //       <td>hàng 4</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
}

export default TableComponent;
