import React from 'react'
import styles from '../styles/projectStatusForm.module.css'

const ProjectStatusForm = () => {
    return (
        <>


            <form className={`${styles.projectStatusForm}`}>
                <div className={`${styles.inputContainer}`}>
                    <div className={`${styles.projectSelectionDiv}`}>
                        <label htmlFor="projectSelectionLabel">Project Name:</label>
                        <select id="projectSelectionLabel">
                            <option>Project 1</option>
                            <option>Project 2</option>
                            <option>Project 3</option>
                            <option>Project 4</option>
                        </select>
                    </div>

                    <div className={`${styles.statusSelectionDiv}`}>
                        <label htmlFor="statusSelectionLabel">Status:</label>
                        <select id="statusSelectionLabel">
                            <option>Active</option>
                            <option>Completed</option>
                            <option>Delayed</option>
                            <option>Remove</option>
                        </select>
                    </div>
                </div>

                <div className={`${styles.statusButtonDiv}`}>
                    <button type="button">Set Status</button>
                </div>
            </form>

        </>
    )
}

export default ProjectStatusForm