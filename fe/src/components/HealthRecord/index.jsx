import { useState, useEffect } from "react";
import ListHealthRecord from "./List";
import AddTestResult from "./Add";
import ReactLoading from "react-loading";
import { getAllHealthRecord } from "@api/healthRecord";
import { addNewTestResult } from "@api/testResult";
import toast from "@utils/toast";
import { MODAL_TYPES } from "@src/constants";

function Employees() {
  const [listHealthRecord, setListHealthRecord] = useState([]);
  const [isOpenAdd, setIsOpenAdd] = useState({
    state: false,
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedHealthRecord, setSelectedHealthRecord] = useState({});

  const handleRecord = (type, item) => {
    if(type === MODAL_TYPES.VIEW && item.testResult.length === 0) return;
    setIsOpenAdd({
      type,
      state: true,
    });
    setSelectedHealthRecord(item);
  };

  const handleAddTestResult = async (data) => {
    try {
      setIsLoading(true);
      await addNewTestResult(data);
      setIsLoading(false);
      await fetchHealthRecord();
      toast.success("Add new test result successful");
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      toast.error(error?.response?.statusText);
    }
  };

  const fetchHealthRecord = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllHealthRecord();
      console.log(data);
      setListHealthRecord(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthRecord();
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
      {isOpenAdd.state && (
        <AddTestResult
          type={isOpenAdd.type}
          setIsOpenAdd={setIsOpenAdd}
          handleSubmit={handleAddTestResult}
          selectedHealthRecord={selectedHealthRecord}
        />
      )}
      <div className="content-wrapper">
        <div className="content-section">
          <div className="content-section-heading">
            <div className="content-section-title">List of health records</div>
          </div>
          <ListHealthRecord
            list={listHealthRecord}
            handleRecord={handleRecord}
          />
        </div>
      </div>
    </div>
  );
}

export default Employees;
