import { useEffect, useState } from "react";

export default function Counter() {
  let [clockData, setClockData] = useState({
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0
  });

  useEffect(() => {
    const sec = 1000;

    //using const when declaring a variable
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    let clockInterval = setInterval(() => {

      //to get proper positive value of remaing days, times ,hrs increasing the time of ending date

      const end = new Date("Aug 05, 2023 12:00:00").getTime();
      const current = new Date().getTime();

      const remaining = end - current;

      let dd = Math.floor(remaining / day);
      let hh = Math.floor((remaining % day) / hour);
      let mm = Math.floor((remaining % hour) / min);
      let ss = Math.floor((remaining % min) / sec);

      setClockData(previous => {
        return { ...previous, dd, hh, mm, ss };
      });
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    }
  }, []);






  return (
    <div className="flex-w flex-c-m cd100 p-b-33">
      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 days">{clockData.dd}</span>
        <span className="s2-txt1">Days</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 hours">{clockData.hh}</span>
        <span className="s2-txt1">Hours</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 minutes">{clockData.mm}</span>
        <span className="s2-txt1">Minutes</span>
      </div>

      <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
        <span className="l2-txt1 p-b-9 seconds">{clockData.ss}</span>
        <span className="s2-txt1">Seconds</span>
      </div>
    </div>
  );
}