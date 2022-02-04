import { Form, Input, InputNumber, Button, Select, DatePicker } from "antd";
import { DoubleLeftOutlined, FileDoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Contact1 = () => {
  const { Option } = Select;
  const contactForm = () => (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder=" Full Name"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        ></input>
      </div>
      <br />
      
      
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder=" Email"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
      <br />
      <div className="form-group">
        <input
          type="phone"
          className="form-control"
          placeholder=" Phone Number"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      
      <br />
      <div className="form-group">
        <textarea
          type="text"
          className="form-control"
          placeholder=" Enter Your statements"
          style={{height:"150px"}}
        ></textarea>
      </div>

      <br />
      <Button
        type="primary submit"
        className="mb-3"
        block
        shape="round"
        icon={<FileDoneOutlined style={{ fontSize: "120%" }} />}
        size="large"
      >
        Submit
      </Button>
      <br />
      <Link to="/">
        <Button
          type="danger"
          className="mb-3"
          block
          shape="round"
          icon={<DoubleLeftOutlined style={{ fontSize: "120%" }} />}
          size="large"
        >
          Back
        </Button>
      </Link>
    </form>
  );

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2>Contact Us</h2>
            {contactForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact1;
