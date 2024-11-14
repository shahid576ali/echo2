import React from 'react'
import Sidebar from '../Components/Sidebar'
import styles from '../styles/Home.module.css'
import Card from '../Components/Card'
import { CardData } from "../Components/CardData"
import StatusUpdates from '../Components/StatusUpdates'
import Graph from '../Components/Graph'
import {projectData} from '../Components/ProjectData'
import { HomeUserData } from '../Components/HomeUserData'

const Home = () => {
  return (

    <div>
      <Sidebar />
      <div className={styles.pageTitleDiv}>
        <h1>Home</h1>
      </div>


      <div className={styles.cardDiv}>
        {CardData.map((val, key) => {
          return <Card
            key={key}
            title={val.title}
            subtitle={val.subtitle} />
        })}
      </div>

      <div className={`${styles.otherDiv}`}>

        <div className={`${styles.statusUpdateDiv}`}>
          <StatusUpdates data={HomeUserData} />
        </div>
        <div className={`${styles.graphDiv}`}>
          
          <Graph data={projectData} />
        </div>


      </div>
    </div>

  )
}

export default Home