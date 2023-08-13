import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import AssessmentOverview from "./AssessmentsOverview";
import Assessment from "./MyAssessments";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { overview } = useSelector((state) => ({
    overview: state.overview,
  }));
  const [selected, setSelected] = useState(true);

  const handleToggle = (newSelected) => {
    if (selected !== newSelected) {
      setSelected(newSelected);
    }
  };

  return (
    <div>
      <div className="header">
        {/* {window.innerWidth < 768 && (
          <div className="trigger" onClick={openCollapsed}>
            <img src={ham} className="imgMenu" alt="ham" />
          </div>
        )} */}
        <p className="heading" style={{}}>
          Assessment
        </p>
        <p
          className={selected ? "subheading selected" : "subheading unselected"}
          onClick={() => handleToggle(true)}
        >
          My Assessments
        </p>
        <p
          className={selected ? "subheading unselected" : "subheading selected"}
          onClick={() => handleToggle(false)}
        >
          Unstop Assessments
        </p>
      </div>
      {overview && <AssessmentOverview />}
      <Assessment />
    </div>
  );
}

export default Home;
