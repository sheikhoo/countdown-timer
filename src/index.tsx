import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
  id?: string;
  count: number;
  border?: boolean;
  showTitle?: boolean;
  direction?: "right" | "left";
  noPoints?: boolean;
  responsive?: boolean;
  color?: string;
  backgroundColor?: string;
  size?: number;
  labelSize?: number;
  hideDay?: boolean;
  hideHours?: boolean;
  dayTitle?: string;
  hourTitle?: string;
  minuteTitle?: string;
  secondTitle?: string;
  onEnd?: () => void;
}

const CountdownTimer: React.FC<Props> = ({
  className = "",
  id = "",
  count = 0,
  border = false,
  showTitle = false,
  direction = "left",
  noPoints = false,
  color = "#000",
  backgroundColor = "#fff",
  responsive = false,
  size = 18,
  labelSize = 12,
  hideDay = false,
  hideHours = false,
  dayTitle = "Day",
  hourTitle = "Hour",
  minuteTitle = "Min",
  secondTitle = "Sec",
  onEnd = () => {},
}) => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [newCount, setNewCount] = useState<number>(count);

  useEffect(() => {
    handleStart();
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    handleCountdown(count);
  }, [count]);

  const handleStart = () => {
    const interval = setInterval(() => {
      const updatedCount = newCount - 1;
      setNewCount(updatedCount >= 0 ? updatedCount : 0);
      if (newCount === 0) {
        onEnd();
        clearInterval(interval);
      }
    }, 1000);
    setTimer(interval);
  };

  const handleCountdown = (seconds: number) => {
    setNewCount(seconds);
  };

  const format = (time: number) => {
    let seconds: number | string = time % 60;
    let minutes: number | string = Math.floor(time / 60) % 60;
    let hours: number | string = Math.floor(time / 3600) % 24;
    let day: number | string = Math.floor(time / 86400);
    day = day < 10 ? `0${day}` : day;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    if (showTitle) {
      const borderClass = border ? "border" : "";
      const responsiveClass = responsive ? "responsive" : "";
      const classBox = `countBox ${direction}`;
      return (
        <div
          style={{ fontSize: `${size}px` }}
          className={`${classBox} ${borderClass} ${responsiveClass}`}
        >
          <div className="countBoxItem">
            <div style={{ fontSize: `${labelSize}px` }} className={"label"}>
              {secondTitle}
            </div>
            <div className={"count"} style={{ color, backgroundColor }}>
              {seconds}
            </div>
          </div>
          {!noPoints && <span className={"split"}>:</span>}
          <div className={"countBoxItem"}>
            <div style={{ fontSize: `${labelSize}px` }} className={"label"}>
              {minuteTitle}
            </div>
            <div className={"count"} style={{ color, backgroundColor }}>
              {minutes}
            </div>
          </div>
          {!hideHours && !noPoints && <span className={"split"}>:</span>}
          {!hideHours && (
            <div className={"countBoxItem"}>
              <div style={{ fontSize: `${labelSize}px` }} className={"label"}>
                {hourTitle}
              </div>
              <div className={"count"} style={{ color, backgroundColor }}>
                {hours}
              </div>
            </div>
          )}
          {!hideDay && !noPoints && <span className={"split"}>:</span>}

          {!hideDay && (
            <div className={"countBoxItem"}>
              <div style={{ fontSize: `${labelSize}px` }} className={"label"}>
                {dayTitle}
              </div>
              <div className={"count"} style={{ color, backgroundColor }}>
                {day}
              </div>
            </div>
          )}
        </div>
      );
    }
    const borderClass = border ? "border" : "";
    const responsiveClass = responsive ? "responsive" : "";
    const classBox = `inline ${direction}`;
    return (
      <div
        style={{ fontSize: `${size}px` }}
        className={`${classBox} ${borderClass} ${responsiveClass}`}
      >
        {!hideDay && (
          <span className={"count"} style={{ color, backgroundColor }}>
            {day}
          </span>
        )}
        {!hideDay && !noPoints && <span className={"split"}>:</span>}
        {!hideHours && (
          <span className={"count"} style={{ color, backgroundColor }}>
            {hours}
          </span>
        )}
        {!hideHours && !noPoints && <span className={"split"}>:</span>}
        <span className={"count"} style={{ color, backgroundColor }}>
          {minutes}
        </span>
        {!noPoints && <span className={"split"}>:</span>}
        <span className={"count"} style={{ color, backgroundColor }}>
          {seconds}
        </span>
      </div>
    );
  };

  //   render() {
  //   const { count } = this.state;
  //   const { className, id } = this.props;
  return (
    <div
      className={`root-react-component-countdown-timer ${className}`}
      id={id}
    >
      <div className="displayedTime">{format(count)}</div>
    </div>
  );
  //   }
};

export default CountdownTimer;
