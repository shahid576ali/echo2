import React,{useState} from 'react'
import styles from '../styles/assignWorkForm.module.css'

const AssignWorkForm = () => {
    const [startDate,setStartDate] = useState(" ");
    const [endDate, setEndDate] = useState(" ");

    const today = new Date().toISOString().split("T")[0];

    return (
        <form className={`${styles.assignWorkForm}`}>
            <div className={`${styles.selectionDiv}`}>
                <div className={`selectionLabelDiv`}>
                    <label htmlFor='projectDropdown'>Select a Project: </label>
                </div>
                <div className={`${styles.projectSelectionDiv}`}>
                    <select id={`projectDropdown`}>
                        <option>Project 1</option>
                        <option>Project 2</option>
                        <option>Project 3</option>
                        <option>Project 4</option>
                    </select>
                </div>
            </div>


            <div className={`${styles.assignDiv}`}>
                <div className={`${styles.assignToLabelDiv}`}>
                    <label htmlFor='userDropDown'> Assign Project To: </label>
                </div>
                <div className={`${styles.assignToSelectionDiv}`}>
                    <select id={`userDropDown`}>
                        <option>User 1</option>
                        <option>User 2</option>
                        <option>User 3</option>
                        <option>User 4</option>
                    </select>
                </div>
            </div>

            <div className={`${styles.dateDiv}`}>

                <div className={`${styles.projectStartDiv}`}>
                    <label htmlFor={`projectStartDate`} className={`${styles.dateLabel}`}>Start Date: </label>
                    <input 
                    type='date'
                    id={`projectStartDate`}
                    className={`${styles.startDateInput}`}
                    name='startDate'
                    value = {startDate || undefined}
                    onChange={(e)=>{setStartDate(e.target.value)}} 
                    min={today}
                    required/>
                </div>

                <div className={`${styles.projectEndDiv}`}>
                    <label htmlFor={`projectEndData`} className={`${styles.dateLabel}`}>Expected End Date: </label>
                    <input 
                    type='date'
                    id={`projectEndDate`}
                    className={`${styles.endDateInput}`}
                    name='endDate'
                    value={endDate || undefined}
                    onChange={(e)=>{setEndDate(e.target.value)}}
                    min={startDate || today}
                    required/>
                </div>

            </div>

            <div className={`${styles.remarkMainDiv}`}>
                <div className={`${styles.remarkLabelDiv}`}>
                    <label htmlFor={`remark`}>Any Remarks:</label>
                </div>
                <div className={`${styles.remarkTextAreaDiv}`}>
                    <textarea
                    className={`${styles.remark}`}

                    />
                </div>
            </div>

            <div className={`${styles.submitButtonDiv}`}>
                <button type='submit' >Submit</button>
            </div>

        </form>
    )
}

export default AssignWorkForm