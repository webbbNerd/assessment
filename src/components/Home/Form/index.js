import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  notification,
} from "antd";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [form] = Form.useForm();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { Option } = Select;
  const { id } = useParams();

  const [selectedValues, setSelectedValues] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setSelectedValues([...selectedValues, inputValue]);
      setInputValue("");
    }
  };

  const handleSelect = (value) => {
    setSelectedValues(value);
  };

  const onFinish = async (values) => {
    console.log(values, "values captured");
    //   if (id) {
    //     setLoader(true);
    //     let { data, success, error, message } = await Request.updateForm(
    //       {
    //         ...values,
    //       },
    //       id
    //     );
    //     if (success) {
    //       notification.success({
    //         message: message || "Report Updated Successfully",
    //       });
    //     } else {
    //       notification.error({
    //         message: message || "Some Error Occured",
    //       });
    //     }
    //     setLoader(false);
    //   } else {
    //     setLoader(true);
    //     let { data, success, error, message } = await Request.submitForm({
    //       ...values,
    //     });
    //     if (success) {
    //       notification.success({
    //         message: message || "Report Added Successfully",
    //       });
    //       setTimeout(() => {
    //         navigate(`/report/${data._id}`);
    //       }, 0);
    //     } else {
    //       notification.error({
    //         message: message || "Some Error Occured",
    //       });
    //     }
    //     setLoader(false);
    //   }
  };

  // const apiFunction = async () => {
  //   setLoader(true);
  //   let { data, success, error, message } = await Request.fetchReport(id);
  //   if (success) {
  //     form.setFieldsValue(data);
  //   } else {
  //     notification.error({
  //       message: message || "Some Error Occured",
  //     });
  //   }
  //   setLoader(false);
  // };

  // useEffect(() => {
  //   if (id) {
  //     apiFunction();
  //   }
  // }, [id]);

  return (
    <div style={{ margin: "0 auto" }}>
      <div className="formHead">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout={"vertical"}
          autoComplete="off"
        >
          <Form.Item
            className="formHeading"
            label="Name of assessment"
            name="Nameofassessment"
          >
            <Input placeholder="Input Text" />
          </Form.Item>
          <Form.Item
            className="formHeading"
            label="Purpose of the test is"
            name="purpose"
          >
            <Select>
              <Select.Option placeholder="Select" value="demo">
                Demo
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="formHeading"
            label="Description"
            name="description"
          >
            <Select>
              <Select.Option placeholder="Select" value="demo">
                Demo
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="formHeading" label="Skills" name="skills">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              value={selectedValues}
              suffixIcon={null}
              className="selectAll"
              onChange={handleSelect}
            >
              {selectedValues.map((value) => (
                <Option key={value} value={value}>
                  {value}
                </Option>
              ))}
            </Select>
            <Input
              type="text"
              size="medium"
              value={inputValue}
              placeholder="Type Here"
              style={{ height: "50px", borderRadius: "0 0 8px 8px" }}
              onChange={handleInputChange}
              onKeyDown={handleInputPress}
            />
          </Form.Item>
          <Form.Item
            className="formHeading"
            label="Duration of assessment"
            name="duration"
          >
            <Input placeholder="HH:MM:SS" />
          </Form.Item>
          <Form.Item className="buttonForm">
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormPage;
