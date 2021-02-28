import styles from '../styles/components/Profile.module.css'
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="Avatar"/>
      <div>
        <strong>Fulano de Tal</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}</p>
      </div>
    </div>
  )
}