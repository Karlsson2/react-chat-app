"use client";
import CreateForm from "../createForm/CreateForm";
import styles from "./searchbar.module.css";
import { useState } from "react";

export default function Searchbar() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(true);
  }

  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder="Search" />
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.5 9.75C19.5 11.9016 18.8016 13.8891 17.625 15.5016L23.5594 21.4406C24.1453 22.0266 24.1453 22.9781 23.5594 23.5641C22.9734 24.15 22.0219 24.15 21.4359 23.5641L15.5016 17.625C13.8891 18.8062 11.9016 19.5 9.75 19.5C4.36406 19.5 0 15.1359 0 9.75C0 4.36406 4.36406 0 9.75 0C15.1359 0 19.5 4.36406 19.5 9.75ZM9.75 16.5C10.6364 16.5 11.5142 16.3254 12.3331 15.9862C13.1521 15.647 13.8962 15.1498 14.523 14.523C15.1498 13.8962 15.647 13.1521 15.9862 12.3331C16.3254 11.5142 16.5 10.6364 16.5 9.75C16.5 8.86358 16.3254 7.98583 15.9862 7.16689C15.647 6.34794 15.1498 5.60382 14.523 4.97703C13.8962 4.35023 13.1521 3.85303 12.3331 3.51381C11.5142 3.17459 10.6364 3 9.75 3C8.86358 3 7.98583 3.17459 7.16689 3.51381C6.34794 3.85303 5.60382 4.35023 4.97703 4.97703C4.35023 5.60382 3.85303 6.34794 3.51381 7.16689C3.17459 7.98583 3 8.86358 3 9.75C3 10.6364 3.17459 11.5142 3.51381 12.3331C3.85303 13.1521 4.35023 13.8962 4.97703 14.523C5.60382 15.1498 6.34794 15.647 7.16689 15.9862C7.98583 16.3254 8.86358 16.5 9.75 16.5Z"
            fill="#DADADA"
          />
        </svg>
      </div>
      <button className={styles.filterButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
        >
          <path
            d="M37.1875 21H15.5663M7.9345 21H4.8125M7.9345 21C7.9345 19.9882 8.33644 19.0178 9.05189 18.3024C9.76734 17.5869 10.7377 17.185 11.7495 17.185C12.7613 17.185 13.7317 17.5869 14.4471 18.3024C15.1626 19.0178 15.5645 19.9882 15.5645 21C15.5645 22.0118 15.1626 22.9822 14.4471 23.6976C13.7317 24.4131 12.7613 24.815 11.7495 24.815C10.7377 24.815 9.76734 24.4131 9.05189 23.6976C8.33644 22.9822 7.9345 22.0118 7.9345 21ZM37.1875 32.5622H27.1285M27.1285 32.5622C27.1285 33.5743 26.7256 34.5457 26.01 35.2613C25.2944 35.977 24.3238 36.379 23.3118 36.379C22.2999 36.379 21.3296 35.9753 20.6141 35.2599C19.8987 34.5444 19.4967 33.574 19.4967 32.5622M27.1285 32.5622C27.1285 31.5502 26.7256 30.5805 26.01 29.8649C25.2944 29.1493 24.3238 28.7472 23.3118 28.7472C22.2999 28.7472 21.3296 29.1492 20.6141 29.8646C19.8987 30.5801 19.4967 31.5504 19.4967 32.5622M19.4967 32.5622H4.8125M37.1875 9.43774H31.7538M24.122 9.43774H4.8125M24.122 9.43774C24.122 8.42594 24.5239 7.45558 25.2394 6.74013C25.9548 6.02468 26.9252 5.62274 27.937 5.62274C28.438 5.62274 28.9341 5.72142 29.3969 5.91314C29.8598 6.10486 30.2804 6.38587 30.6346 6.74013C30.9889 7.09438 31.2699 7.51495 31.4616 7.9778C31.6533 8.44066 31.752 8.93675 31.752 9.43774C31.752 9.93873 31.6533 10.4348 31.4616 10.8977C31.2699 11.3605 30.9889 11.7811 30.6346 12.1354C30.2804 12.4896 29.8598 12.7706 29.3969 12.9623C28.9341 13.1541 28.438 13.2527 27.937 13.2527C26.9252 13.2527 25.9548 12.8508 25.2394 12.1354C24.5239 11.4199 24.122 10.4495 24.122 9.43774Z"
            stroke="#DEDEE0"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button className={styles.addNew} onClick={handleClick}>
        Add new +
      </button>
      {showForm && <CreateForm setShowForm={setShowForm}></CreateForm>}
    </div>
  );
}
