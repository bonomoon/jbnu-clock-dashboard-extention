import {useState, useEffect} from 'react';

import classNames from 'classnames/bind';
import moment from "moment";

import styles from './CountdownTimer.module.css';

const cx = classNames.bind(styles);

function TimerItem(props) {
  const { value, name, containerStyleName } = props;

  return (
    <div className={cx(styles.itemContainer, containerStyleName)}>
      <div className={styles.itemContent}>
        <span className={styles.itemValue}>
          <strong>{value < 10 ? `0${value}` : value}</strong>
        </span>
        <span className={styles.itemName}>{name}</span>
      </div>
    </div>
  );
}

export default function CountdownTimer(props) {
  const { endDate } = props;

  const getDuration = () =>
    moment.duration(moment(endDate, "YYYYMMDD").diff(moment()));

  const [duration, setDuration] = useState(getDuration());

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(getDuration());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TimerItem containerStyleName={styles.item} value={duration.days()} name={"일"} />
        <TimerItem containerStyleName={styles.item} value={duration.hours()} name={"시간"} />
        <TimerItem containerStyleName={styles.item} value={duration.minutes()} name={"분"} />
        <TimerItem containerStyleName={styles.item} value={duration.seconds()} name={"초"} />
      </div>
    </div>
  );
}
