import React from 'react';
import styles from '../styles/statusUpdates.module.css';



const statusColors = {
  Canceled: "red",
  Completed: "green",
  Active: "blue",
};

const StatusUpdates = ({data}) => {
  return (
    <div className={styles.userTable}>
      <div className={styles.header}>
        <h3>Status Updates</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={styles.userRow}>
              <td className={styles.userInfo}>
                <div className={styles.avatar}></div>
                <div className={styles.name}>{user.name}</div>
              </td>
              <td className={styles.project}>{user.project}</td>
              <td className={styles.status}>
                <span
                  className={styles.statusLabel}
                  style={{ backgroundColor: statusColors[user.status] }}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusUpdates;

