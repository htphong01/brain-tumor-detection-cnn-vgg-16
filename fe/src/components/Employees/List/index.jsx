import React from "react";
import { Icon } from "@iconify/react";

function List({ list }) {
  return (
    <ul>
      <li className="adobe-product">
        <div className="products">No.</div>
        <span className="status">Code</span>
        <span className="status">Name</span>
        <span className="status">Gender</span>
        <span className="status">Role</span>
      </li>
      {list?.length === 0 && (
        <li className="adobe-product">Don&apos;t have any employee</li>
      )}
      {list?.map((item, index) => (
        <li className="adobe-product" key={index}>
          <div className="products">{index + 1}</div>
          <span className="status">{item.code}</span>
          <span className="status">{item.name}</span>
          <span className="status">{item.gender}</span>
          <span className="status">{item.role}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
