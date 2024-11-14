import React from 'react'
import Sidebar from '../Components/Sidebar'
import styles from '../styles/users.module.css'
import { FaSearch } from "react-icons/fa";
import { UserTableData } from '../Components/UserTableData';
import UserTable from '../Components/UserTable';

const Users = () => {

  
  return (
    <>
    <Sidebar/>
    <div className={styles.pageTitleDiv}>
      <h1>Users</h1>
      
    </div>
    <div className={styles.pageContentDiv}>
      <div className={styles.inputDiv}>
      <input
      type='text'
      placeholder='Search by name'/>
      <button className={`${styles.searchButton}`}><FaSearch/></button>
      </div>
      <div className={`${styles.tableDiv}`}>
        <UserTable data={UserTableData}/>
      </div>
    </div>
    </>
  )
}

export default Users