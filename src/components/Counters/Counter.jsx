import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import { FaPeopleArrows } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiAerosol } from "react-icons/gi";
import { BsHourglassSplit } from "react-icons/bs";

const Counter = () => {
  return (
    <div className="counterContainer">
      <div className="counterBox">
        <CountUp
          className="counterNumber"
          start={0}
          end={7492}
          duration={4.75}
        />
        <FaPeopleArrows className="counterIcons" />
        <span className="counterText">Happy Customers</span>
      </div>

      <div className="counterBox">
        <CountUp
          className="counterNumber"
          start={0}
          end={2552}
          duration={4.75}
        />
        <AiOutlineFundProjectionScreen className="counterIcons" />
        <span className="counterText">Projects Completed</span>
      </div>

      <div className="counterBox">
        <CountUp
          className="counterNumber"
          start={0}
          end={3232}
          duration={4.75}
        />
        <GiAerosol className="counterIcons" />
        <span className="counterText">Resolved Tickets</span>
      </div>

      <div className="counterBox">
        <CountUp
          className="counterNumber"
          start={0}
          end={6324}
          duration={4.75}
        />
        <BsHourglassSplit className="counterIcons" />
        <span className="counterText">Hour's worked</span>
      </div>
    </div>
  );
};

export default Counter;
