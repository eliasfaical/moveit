import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from '../styles/components/CompleteChalenge.module.css';

export function CompleteChalenge() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChalenge}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}