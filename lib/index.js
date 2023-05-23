"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CountdownTimer = ({ className = "", id = "", count = 0, border = false, showTitle = false, direction = "left", noPoints = false, color = "#000", backgroundColor = "#fff", responsive = false, size = 18, labelSize = 12, hideDay = false, hideHours = false, dayTitle = "Day", hourTitle = "Hour", minuteTitle = "Min", secondTitle = "Sec", onEnd = () => { }, }) => {
    const [timer, setTimer] = (0, react_1.useState)();
    const [newCount, setNewCount] = (0, react_1.useState)(count);
    (0, react_1.useEffect)(() => {
        handleStart();
        return () => {
            clearInterval(timer);
        };
    }, []);
    (0, react_1.useEffect)(() => {
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
    const handleCountdown = (seconds) => {
        setNewCount(seconds);
    };
    const format = (time) => {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 3600) % 24;
        let day = Math.floor(time / 86400);
        day = day < 10 ? `0${day}` : day;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        if (showTitle) {
            const borderClass = border ? "border" : "";
            const responsiveClass = responsive ? "responsive" : "";
            const classBox = `countBox ${direction}`;
            return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { fontSize: `${size}px` }, className: `${classBox} ${borderClass} ${responsiveClass}` }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "countBoxItem" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { fontSize: `${labelSize}px` }, className: "label" }, { children: secondTitle })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: seconds }))] })), !noPoints && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "split" }, { children: ":" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "countBoxItem" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { fontSize: `${labelSize}px` }, className: "label" }, { children: minuteTitle })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: minutes }))] })), !hideHours && !noPoints && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "split" }, { children: ":" })), !hideHours && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "countBoxItem" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { fontSize: `${labelSize}px` }, className: "label" }, { children: hourTitle })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: hours }))] }))), !hideDay && !noPoints && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "split" }, { children: ":" })), !hideDay && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "countBoxItem" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { fontSize: `${labelSize}px` }, className: "label" }, { children: dayTitle })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: day }))] })))] })));
        }
        const borderClass = border ? "border" : "";
        const responsiveClass = responsive ? "responsive" : "";
        const classBox = `inline ${direction}`;
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { fontSize: `${size}px` }, className: `${classBox} ${borderClass} ${responsiveClass}` }, { children: [!hideDay && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: day }))), !hideDay && !noPoints && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "split" }, { children: ":" })), !hideHours && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: hours }))), !hideHours && !noPoints && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "split" }, { children: ":" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: minutes })), !noPoints && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "split" }, { children: ":" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "count", style: { color, backgroundColor } }, { children: seconds }))] })));
    };
    //   render() {
    //   const { count } = this.state;
    //   const { className, id } = this.props;
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `root-react-component-countdown-timer ${className}`, id: id }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "displayedTime" }, { children: format(count) })) })));
    //   }
};
exports.default = CountdownTimer;
