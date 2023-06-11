import { Icon } from "@iconify/react";

function List({ list, handleOpenAddHealthRecord }) {
  return (
    <ul>
      <li className="adobe-product">
        <div className="products">No.</div>
        <span className="status">Name</span>
        <span className="status">Citizen ID</span>
        <span className="status  w-10">Gender</span>
        <span className="status w-10">Birth</span>
        <span className="action">Action</span>
      </li>
      {list?.length === 0 && (
        <li className="adobe-product">Don&apos;t have any patients</li>
      )}
      {list?.map((item, index) => (
        <li className="adobe-product" key={index}>
          <div className="products">{index + 1}</div>
          <span className="status">{item.name}</span>
          <span className="status">{item.citizenId}</span>
          <span className="status  w-10">{item.gender}</span>
          <span className="status w-10">{item.birth}</span>
          <span className="action">
            <Icon
              icon="mdi:add-bold"
              fontSize={20}
              onClick={() => handleOpenAddHealthRecord(item)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default List;
