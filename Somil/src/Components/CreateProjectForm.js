import React from 'react'
import styles from '../styles/createProjectForm.module.css'

const CreateProjectForm = () => {
    return (
        <div>
            <form className={`${styles.createProjectForm}`}>
                
                <div className={`${styles.projectTitleDiv}`}>
                    <div className={`${styles.inputLabelDiv}`}>
                        <label htmlFor='inputLabel' className={`${styles.label}`}>Project name: </label>
                    </div>
                    <div className={`${styles.inputDiv}`}>
                        <input
                            type='text' />
                    </div>
                </div>

                <div className={`${styles.projectDescriptionDiv}`}>
                    <div className={`${styles.areaLabelDiv}`}>
                        <label htmlFor='areaLabel' className={`${styles.label}`}>Project Description:</label>
                    </div>
                    <div className={`${styles.textAreaDiv}`}>
                        <textarea className={styles.descriptionTextArea} />
                    </div>
                </div>

                <div className={`${styles.buttonDiv}`}>
                    <button type='submit'>
                        Create Project
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateProjectForm