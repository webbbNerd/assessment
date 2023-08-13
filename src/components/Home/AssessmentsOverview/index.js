import React, { useEffect, useState, useRef } from "react";
import { Space, Table, Tag, Button, notification } from "antd";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import frame1 from "../../assets/Frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";

function List() {
  return (
    <div className="asoverwiew">
      <p className="heading">Assessment Overview</p>
      <div className="assessmentCover">
        <div className="assessHeading">
          <p className="headingTop">Total Assessment</p>
          <div className="assessInnerHeading">
            <img src={frame1} className="img" alt="total assessment" />
            <span>
              <p>34</p>
            </span>
          </div>
        </div>
        <div className="assessHeading">
          <p className="headingTop">Candidates</p>
          <div className="assessInnerHeading1">
            <img src={frame2} className="img" alt="total assessment" />
            <span>
              <span className="asIHead1">
                <p>11,145</p>
                <p className="innerSubNumber">+81</p>
              </span>
              <p className="innerSubHeading">Total Candidates</p>
            </span>
            <span>
              <span className="asIHead1">
                <p>1,14</p>
                <p className="innerSubNumber">+81</p>
              </span>
              <p className="innerSubHeading">Who Attampted</p>
            </span>
          </div>
        </div>
        <div className="assessHeading">
          <p className="headingTop">Candidates source</p>
          <div className="assessInnerHeading1">
            <img src={frame3} className="img" alt="total assessment" />
            <span>
              <span className="asIHead1">
                <p>11000</p>
                <p className="innerSubNumber">+81</p>
              </span>
              <p className="innerSubHeading">E-Mail</p>
            </span>
            <span>
              <span className="asIHead1">
                <p>1,45</p>
                <p className="innerSubNumber">+81</p>
              </span>
              <p className="innerSubHeading">Social Share</p>
            </span>
            <span>
              <span className="asIHead1">
                <p>1,45</p>
                <p className="innerSubNumber">+81</p>
              </span>
              <p className="innerSubHeading">Unique Link</p>
            </span>
          </div>
        </div>
        <div className="assessHeading">
          <p className="headingTop">Total Purpose</p>
          <div className="assessInnerHeading">
            <img src={frame4} className="img" alt="total assessment" />
            <span>
              <p>11</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
