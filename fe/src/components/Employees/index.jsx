import { useState, useEffect } from "react";
import ListEmployee from "./List";
import AddEmployee from "./Add";
import { convertArrayToObject } from "@utils";
import ReactLoading from "react-loading";
import { addUser } from "@api/admin";
import { getAllEmployee } from "@api/employee";
import toast from "@utils/toast";

function Employees() {
  const [listEmployee, setListEmployee] = useState([]);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddEmployee = async (userData) => {
    try {
      setIsLoading(true);
      const { data } = await addUser(userData);
      setListEmployee([...listEmployee, data]);
      setIsOpenAdd(false);
      setIsLoading(false);
      toast.success("Add new employee successful");
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      toast.error(error?.response?.statusText);
    }
  };

  const fetchEmployee = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllEmployee();
      setListEmployee(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <div className="main-container">
      {isLoading && (
        <div className="loading">
          <ReactLoading
            type="spinningBubbles"
            color="#ffffff"
            height={60}
            width={60}
          />
        </div>
      )}
      {isOpenAdd && (
        <AddEmployee
          setIsOpenAdd={setIsOpenAdd}
          handleSubmit={handleAddEmployee}
        />
      )}
      <div className="content-wrapper">
        <div className="content-section">
          <div className="content-section-heading">
            <div className="content-section-title">List of employees</div>
            <div>
              <button
                className="content-button status-button"
                onClick={() => setIsOpenAdd(true)}
              >
                Add
              </button>
            </div>
          </div>
          <ListEmployee list={listEmployee} />
        </div>
      </div>
    </div>
  );
}

export default Employees;
