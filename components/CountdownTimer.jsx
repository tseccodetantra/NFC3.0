import React, { useEffect, useState } from 'react';
import styles from '../styles/countdown.module.css'; // Ensure correct path to the CSS file

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.countContainer}>
      <h2 className={styles.countHeader}>Hackathon Starts in...</h2>
      <div className={styles.countContent}>
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <div className={styles.countBox}>
              <span className={styles.countValue}>{timeLeft.days}</span>
              <span className={styles.countLabel}>Days</span>
            </div>
            <div className={styles.countBox}>
              <span className={styles.countValue}>{timeLeft.hours}</span>
              <span className={styles.countLabel}>Hours</span>
            </div>
            <div className={styles.countBox}>
              <span className={styles.countValue}>{timeLeft.minutes}</span>
              <span className={styles.countLabel}>Minutes</span>
            </div>
            <div className={styles.countBox}>
              <span className={styles.countValue}>{timeLeft.seconds}</span>
              <span className={styles.countLabel}>Seconds</span>
            </div>
          </>
        ) : (
          <p>Time's up!</p>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
