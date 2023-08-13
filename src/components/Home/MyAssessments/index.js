import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import {
  Avatar,
  Skeleton,
  Switch,
  Modal,
  Button,
  Progress,
  notification,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import plus from "../../assets/plus.png";
import assessmentimg from "../../assets/assessmentimg.png";
import link from "../../assets/link.png";
import calender from "../../assets/calender.png";
import lp from "../../assets/lp.png";
import Form from "../Form";
import search from "../../assets/search.png";
import filter from "../../assets/filter.png";
import bar from "../../assets/bar.png";

function Report() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [datasource, setDataSource] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleOverview = () => {
    setSelected(!selected);
    dispatch({ type: "selectedOverview", payload: selected });
  };

  const data = [
    {
      id: 1,
      name: "Math Assessment",
      date: "20 Apr 2023",
      duration: "00",
      questions: "20",
    },
    {
      id: 2,
      name: "Assessment 2",
      date: "22 Apr 2023",
      duration: "45",
      questions: "15",
    },
    {
      id: 3,
      name: "Assessment 3",
      date: "25 Apr 2023",
      duration: "60",
      questions: "30",
    },
  ];

  return (
    <div className="MyAssessment">
      <span className="Myassessmob">
        <p className="heading">My Assessment</p>
        {window.innerWidth < 768 && (
          <span>
            <img src={search} className="imgMob" alt="search" />
            <img src={filter} className="imgMob" alt="filter" />
            <img
              src={bar}
              onClick={toggleOverview}
              className="imgMob"
              alt="bar"
            />
          </span>
        )}
      </span>

      <div className="myassessmentCover">
        <div className="firstAssessment">
          <img
            src={plus}
            onClick={showModal}
            className="imgplus"
            alt="total assessment"
          />
          <p className="asseHeading">New Assessment</p>
          <p className="asseSubHeading">
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
        {data.map((assessment) => (
          <div className="assessmentList">
            <div className="assessmentRow">
              <img
                src={assessmentimg}
                className="imgHead"
                alt="total assessment"
              />
              <span className="asseHeadingWrapper">
                <p className="asseHeading">{assessment.name}</p>
                <span className="job">
                  <p className="headD14">Job</p>
                  <p className="adate">
                    <img
                      src={calender}
                      className="imgdate"
                      alt="total assessment"
                    />
                    <p className="asseSubHeading">{assessment.date}</p>
                  </p>
                </span>
              </span>
            </div>
            <div className="bottomAssessment">
              <div className="bottomComponents">
                <span>
                  <p className="headD14">{assessment.duration}</p>
                  <p className="asseSubHeading">Duration</p>
                </span>
                <span>
                  <p className="headD14">{assessment.questions}</p>
                  <p className="asseSubHeading">Questions</p>
                </span>
              </div>
              <div className="bottomComponents">
                <span className="shareWrapper">
                  <img src={link} className="imgdate" alt="total assessment" />
                  <p className="headD14">Share</p>
                </span>
                <span>
                  {/* <p className="circleOverlap">Duration</p> */}
                  <img src={lp} className="imgdate" alt="total assessment" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title="Create New Assessment"
        open={isModalOpen}
        onOk={handleOk}
        className="formModal"
        footer={null}
        onCancel={handleCancel}
      >
        <Form />
      </Modal>
    </div>
  );
}

export default Report;
