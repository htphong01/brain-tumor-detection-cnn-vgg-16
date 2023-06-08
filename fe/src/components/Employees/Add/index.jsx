import { useState } from "react";
import { ROLES, GENDERS } from "@src/constants";
import styles from "./styles.module.scss";

export default function Add({ setIsOpenAdd, handleSubmit }) {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    citizenId: "",
    gender: GENDERS.MALE,
    role: ROLES.DOCTOR,
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
        <div className={styles.title}>Add new employee</div>
        <div className={styles.body}>
          <div className={styles.inputControl}>
            <label>Username:</label>
            <input
              name="username"
              value={userData.username}
              onChange={handleOnChange}
              required
            />
          </div>
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
            <label>Citizen ID:</label>
            <input
              name="citizenId"
              value={userData.citizenId}
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
          <div className={styles.inputControl}>
            <label>Role:</label>
            <select name="role" value={userData.role} onChange={handleOnChange}>
              {Object.values(ROLES).map((item, index) => (
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
            onClick={() => setIsOpenAdd(false)}
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
