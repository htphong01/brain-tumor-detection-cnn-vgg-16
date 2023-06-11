import React from "react";
import { Icon } from "@iconify/react";
import { MODAL_TYPES } from "@src/constants";

function List({ list, handleRecord }) {
  return (
    <ul>
      <li className="adobe-product">
        <div className="products">No.</div>
        <span className="status">Patient</span>
        <span className="status">Doctor</span>
        <span className="status">Time</span>
        <span className="action">Action</span>
      </li>
      {list?.length === 0 && (
        <li className="adobe-product">Don&apos;t have any employee</li>
      )}
      {list?.map((item, index) => (
        <li className="adobe-product" key={index}>
          <div className="products">{index + 1}</div>
          <span className="status">{item.patient.name}</span>
          <span className="status">{item.doctor.name}</span>
          <span className="status">
            {new Date(item.createdAt).toDateString()}
          </span>
          <span className="action">
            <Icon
              icon="mdi:add-bold"
              fontSize={20}
              onClick={() => handleRecord(MODAL_TYPES.EDIT, item)}
            />

            <Icon
              icon="material-symbols:info"
              fontSize={20}
              onClick={() => handleRecord(MODAL_TYPES.VIEW, item)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default List;
