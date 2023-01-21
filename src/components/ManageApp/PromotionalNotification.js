import "./style.css";
import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { MdDelete } from "react-icons/md";

const PromotionalNotification = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    { name: "Email Address", selector: (row) => row.name, sortable: true },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => handleOpen(row)}
          className="delete-icon"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Delete"
        >
          <MdDelete />
        </button>
      ),
    },
  ];

  const getData = async () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("errorr", err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <div className="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div
            style={{
              margin: "3%",
              borderRadius: "7px",
              border: "1px solid gray",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                backgroundColor: "lightgray",
                border: "1px solid lightgray",
                padding: "10px",
              }}
            >
              ☰{" "}
              <span style={{ marginLeft: "10px" }}>
                PROMOTIONAL NOTIFICATION DASHBOARD
              </span>
            </div>
            <div style={{ margin: "20px 35px 0 35px" }}>
              Send Promotional Notification
            </div>
            <div className="inner-container">
              <div className="field">
                <div className="label">
                  Users Filter Option<span className="required">*</span>
                </div>
                <select name="users_filter" id="users_filter">
                  <option value="all">All</option>
                </select>
              </div>
              <div className="field">
                <div className="label">
                  Notification Title<span className="required">*</span>
                </div>
                <div className="field-input">
                  <input
                    type="text"
                    required
                    placeholder="Cityfurnish : Easy Furniture!"
                  />
                </div>
              </div>
              <div className="field">
                <div className="label">
                  Notification Heading<span className="required">*</span>
                </div>
                <div className="field-input">
                  <input
                    type="text"
                    required
                    placeholder="Grab new Epic @ offer Sale"
                  />
                </div>
              </div>
              <div className="field">
                <div className="label">
                  Meassge Body<span className="required">*</span>
                </div>
                <div className="field-input">
                  <input type="text" required />
                </div>
              </div>
              <div className="field">
                <div className="label">
                  Badge Icon<span className="required">*</span>
                  <div className="sub-label">
                    (Image size :{" "}
                    <i>
                      <b>1024 * 512</b>
                    </i>{" "}
                    pixel)
                  </div>
                </div>
                <div className="field-input">
                  <input type="file" accept="image/*" required />
                </div>
              </div>
            </div>
            <div>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#1876ba",
                  border: "none",
                  padding: "6px",
                  margin: "5px 35px 10px 35px",
                }}
              >
                SEND NOTIFICATION
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            title="NOTIFICATIONS"
          />
        </div>
      </div>
    </div>
  );
};
export default PromotionalNotification;
