import { useState, useEffect } from "react";
import ListEmployee from "./List";
import AddPatient from "./Add";
import AddHealthRecord from "./AddHealthRecord";
import ReactLoading from "react-loading";
import { getAllPatient, addNewPatient } from "@api/patient";
import { addNewHealthRecord } from "@api/healthRecord";
import toast from "@utils/toast";

function Employees() {
  const [listPatient, setListPatient] = useState([]);
  const [citizenId, setCitizenId] = useState("");
  const [isOpenAdd, setIsOpenAdd] = useState({
    healthRecord: false,
    patient: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});

  const handleOpenAddHealthRecord = (patient) => {
    setIsOpenAdd({
      healthRecord: true,
      patient: false,
    });
    setSelectedPatient(patient);
  };

  const handleAddPatient = async (userData) => {
    try {
      setIsLoading(true);
      const { data } = await addNewPatient(userData);
      setListPatient([data, ...listPatient]);
      setIsOpenAdd({
        ...isOpenAdd,
        patient: false,
      });
      setIsLoading(false);
      toast.success("Add new patient successful");
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      toast.error(error?.response?.statusText);
    }
  };

  const handleAddHealthRecord = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      await addNewHealthRecord(data);
      setIsOpenAdd({
        ...isOpenAdd,
        healthRecord: false,
      });
      setIsLoading(false);
      toast.success("Add new health record successful");
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      toast.error(error?.response?.statusText);
    }
  };

  const fetchPatients = async (params = {}) => {
    try {
      setIsLoading(true);
      const { data } = await getAllPatient(params);
      setListPatient(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchPatients({ citizenId });
    }
  };

  useEffect(() => {
    fetchPatients();
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
      {isOpenAdd.patient && (
        <AddPatient
          setIsOpenAdd={setIsOpenAdd}
          handleSubmit={handleAddPatient}
        />
      )}
      {isOpenAdd.healthRecord && selectedPatient?._id && (
        <AddHealthRecord
          patient={selectedPatient}
          setIsOpenAdd={setIsOpenAdd}
          handleSubmit={handleAddHealthRecord}
        />
      )}
      <div className="content-wrapper">
        <div className="content-section">
          <div className="content-section-heading">
            <div className="content-section-title">List of patients</div>
            <div>
              <input
                value={citizenId}
                onChange={(e) => setCitizenId(e.target.value)}
                className="content-search-input"
                placeholder="Search by Citizen ID"
                onKeyDown={handleSearchKeyDown}
              />
              <button
                className="content-button status-button"
                onClick={() =>
                  setIsOpenAdd({
                    healthRecord: false,
                    patient: true,
                  })
                }
              >
                Add
              </button>
            </div>
          </div>
          <ListEmployee
            list={listPatient}
            handleOpenAddHealthRecord={handleOpenAddHealthRecord}
          />
        </div>
      </div>
    </div>
  );
}

export default Employees;
