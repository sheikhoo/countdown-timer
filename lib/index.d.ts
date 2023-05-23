import React from "react";
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
declare const CountdownTimer: React.FC<Props>;
export default CountdownTimer;
