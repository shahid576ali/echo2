import React, { useState } from 'react';
import styles from '../styles/userTable.module.css';

const UserTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEdit = (id) => {
    console.log(`Edit user with id: ${id}`);
  };

  const handleRemove = (id) => {
    console.log(`Remove user with id: ${id}`);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page on change
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.controls}>
        <label htmlFor="rowsPerPage" className={styles.label}>Entries per page:</label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className={styles.select}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.scrollableTable}>
        <table className={styles.customTable}>
          <thead>
            <tr>
              <th className={`${styles.tableHeading}`}>Sr. No</th>
              <th className={`${styles.tableHeading}`}>Name</th>
              <th className={`${styles.tableHeading}`}>Member Status</th>
              <th className={`${styles.tableHeading}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={row.id} className={styles.tableRow}>
                <td>{indexOfFirstRow + index + 1}</td>
                <td>{row.name}</td>
                <td>{row.status}</td>
                <td>
                  <button
                    onClick={() => handleEdit(row.id)}
                    className={`${styles.actionButton} ${styles.editButton}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(row.id)}
                    className={`${styles.actionButton} ${styles.removeButton}`}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.paginationContainer}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className={styles.paginationButton}>
          Previous
        </button>
        <span className={styles.paginationText}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className={styles.paginationButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
