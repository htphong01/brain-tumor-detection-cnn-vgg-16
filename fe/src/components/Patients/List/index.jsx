import React from 'react';
import { Icon } from '@iconify/react';

function ListPatient({ patients }) {
  return (
    <ul>
      <li className="adobe-product">
        <div className="products">No.</div>
        <span className="status">English</span>
        <span className="status" style={{ textAlign: 'center' }}>
          Category
        </span>
        <span className="status">Vietnamese</span>
        <span className="action">Pronounce</span>
      </li>
      {patients.length === 0 && (
        <li className="adobe-product">
          Don&apos;t have any patients
        </li>
      )}
      {patients.map((item, index) => (
        <li
          className="adobe-product"
          key={index}
        >
          <div className="products">{index + 1}</div>
          <span className="status">{item.name}</span>
          <span className="status" style={{ textAlign: 'center' }}>
            {item.createdAt}
          </span>
          <span className="action">
            <Icon icon="el:speaker" fontSize={20} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListPatient;
