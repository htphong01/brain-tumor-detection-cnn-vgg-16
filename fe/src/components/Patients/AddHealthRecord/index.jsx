import { useState, useEffect } from "react";
import { ROLES, GENDERS } from "@src/constants";
import { getAllEmployee } from "@src/api/employee";
import styles from "./styles.module.scss";

export default function AddHealthRecord({
  setIsOpenAdd,
  handleSubmit,
  patient,
}) {
  const [listDoctor, setListDoctor] = useState([]);
  const [userData, setUserData] = useState({
    patient: patient._id,
    doctor: "",
    symptoms: "",
    department: "",
  });

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = () => {
    if (Object.values(userData).includes("")) return;
    handleSubmit(userData);
  };

  useEffect(() => {
    getAllEmployee({ role: ROLES.DOCTOR }).then(({ data }) => {
      setListDoctor(data);
      if (data.length > 0) {
        setUserData({ ...userData, doctor: data[0]._id });
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["form-block"]}>
        <div className={styles.title}>Add new health record</div>
        <div className={styles.body}>
          <div className={styles.inputControl}>
            <label>Doctor:</label>
            <select
              name="doctor"
              value={userData.doctor}
              onChange={handleOnChange}
            >
              {listDoctor.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputControl}>
            <label>Department:</label>
            <input
              name="department"
              value={userData.department}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.inputControl}>
            <label>Symptoms:</label>
            <input
              name="symptoms"
              value={userData.symptoms}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.cancelBtn}
            onClick={() =>
              setIsOpenAdd({ healthRecord: false, patient: false })
            }
          >
            Cancel
          </button>
          <button className={styles.submitBtn} onClick={handleSubmitForm}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
