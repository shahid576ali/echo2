import React from 'react'
import Sidebar from '../Components/Sidebar'
import styles from '../styles/assignWork.module.css'
import AssignWorkForm from '../Components/AssignWorkForm'
import CreateProjectForm from '../Components/CreateProjectForm'
import ProjectStatusForm from '../Components/ProjectStatusForm'

const AssignWork = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.pageTitleDiv}>
        <h1>Assign Work</h1>
      </div>
      
      <div className={`${styles.mainContainer}`}>

        <div className={`${styles.assignWorkForm}`}>
          <AssignWorkForm />
        </div>

        <div className={`${styles.projectFormGroup}`}>

          <div className={`${styles.createProject}`}>
              <CreateProjectForm />
          </div>

          <div className={`${styles.changeProjectStatus}`}>
            <ProjectStatusForm />
            
          </div>

        </div>
      </div>
    </>
  )
}

export default AssignWork