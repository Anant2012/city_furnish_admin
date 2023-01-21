import { React, useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { FaUserEdit } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./productList.css";

const Affliated_productList = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const handleOpen = () => {
    // to do
  };
  const onSearch = (val) => {
    console.log("called onsearch fun", val);
    setFilteredData(
      data.filter((x) => x.name.toLowerCase().match(val.toLowerCase()))
    );
  };
  const columns = [
    { name: "Product Name", selector: (row) => row.name, sortable: true },
    {
      name: "Image",
      selector: (row) => <img src={row.flag} style={{ width: "40px" }} />,
      sortable: true,
    },
    { name: "Website", selector: (row) => row.capital, sortable: true },
    {
      name: "Position",
      selector: (row) => (
        <div>
          <input type="number" style={{ width: "70px" }} />
          <div style={{ color: "blue", marginLeft: "10px" }}>Update</div>
        </div>
      ),
      sortable: true,
    },
    { name: "Added By", selector: (row) => row.name, sortable: true },
    {
      name: "Likes",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Publish</button>,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <FaUserEdit
            style={{ width: "20px", height: "24px", color: "gray" }}
          />
          <AiFillEye
            style={{ width: "20px", height: "24px", color: "brown" }}
          />
          <BsPlusLg
            style={{ width: "20px", height: "24px", color: "green" }}
          />
          <MdDelete style={{ width: "20px", height: "24px", color: "brown" }} />
        </div>
      ),
      sortable: true,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button
    //       onClick={() => handleOpen(row)}
    //       className="delete-icon"
    //       data-toggle="tooltip"
    //       data-placement="bottom"
    //       title="Delete"
    //     >
    //       <MdDelete />
    //     </button>
    //   ),
    // },
  ];

  const getData = async () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("errorr", err));

    // try {
    //   // console.log(userId);
    //   const url = "https://restcountries.com/v2/all";
    //   const response = await axios.get(url);
    //   if (response.status === 200) {
    //     console.log("wer", response.data);
    //     setData(data);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div
      style={{ margin: "1%", borderRadius: "7px", border: "1px solid gray" }}
    >
      <div
        style={{
          fontWeight: "bold",
          backgroundColor: "lightgray",
          border: "1px solid lightgray",
          padding: "0px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "1%",
            justifyContent: "space-between",
          }}
        >
          <div>
            ☰{" "}
            <span style={{ marginLeft: "10px" }}>
              Affiliate Product Order List
            </span>
          </div>
          <div>
            <button className="button">
              <BsPlusLg />
              Categorize
            </button>
            <button className="button">
              <CgDanger />
              DeCategorize
            </button>
            <button className="button">
              <BsPlusLg />
              Globalize
            </button>
            <button className="button">
              <CgDanger />
              Localize
            </button>
            <button className="button">
              <BsCheckLg />
              Publish
            </button>
            <button className="button">
              <CgDanger />
              UnPublish
            </button>
            <button className="button">
              <ImCross />
              Delete
            </button>
          </div>
        </div>
        <div className="mt-3">
          <Table
            columns={columns}
            data={filteredData}
            onSearch={onSearch}
            // title="SUBSCRIPTIONS LIST"
          />
        </div>
      </div>
    </div>
  );
};
export default Affliated_productList;
