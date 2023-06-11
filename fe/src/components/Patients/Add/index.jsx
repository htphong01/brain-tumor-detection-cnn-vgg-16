import { useState } from "react";
import { ROLES, GENDERS } from "@src/constants";
import styles from "./styles.module.scss";

export default function Add({ setIsOpenAdd, handleSubmit }) {
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    citizenId: "",
    birth: "",
    gender: GENDERS.MALE,
  });

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = () => {
    if (Object.values(userData).includes("")) return;
    handleSubmit(userData);
  };

  return (
    <div className={styles.container}>
      <div className={styles["form-block"]}>
        <div className={styles.title}>Add new patient</div>
        <div className={styles.body}>
          <div className={styles.inputControl}>
            <label>Name:</label>
            <input
              name="name"
              value={userData.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.inputControl}>
            <label>Phone Number:</label>
            <input
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.inputControl}>
            <label>Citizen ID:</label>
            <input
              name="citizenId"
              value={userData.citizenId}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.inputControl}>
            <label>Birth:</label>
            <input
              name="birth"
              value={userData.birth}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.inputControl}>
            <label>Gender:</label>
            <select
              name="gender"
              value={userData.gender}
              onChange={handleOnChange}
            >
              {Object.values(GENDERS).map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
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
