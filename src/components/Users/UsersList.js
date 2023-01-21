import { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

const UsersList = () => {
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
    { name: "Full Name", selector: (row) => row.name, sortable: true },
    { name: "User Name ", selector: (row) => row.name, sortable: true },
    { name: "User ID", selector: (row) => row.capital, sortable: true },
    {
      name: "Email",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Last Logout Date",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Last Login IP",
      selector: (row) => row.population,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => <button className="btn btn-success">Active</button>,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          <BiEdit style={{ width: "20px", height: "20px", color: "#7b5050" }} />
          <AiFillEye
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
          />
          <MdDelete
            style={{
              width: "20px",
              height: "20px",
              color: "red",
              marginLeft: "10px",
            }}
          />
        </div>
      ),
      sortable: true,
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
    <div className="mt-3">
      <Table
        columns={columns}
        data={filteredData}
        onSearch={onSearch}
        title="USERS LIST"
      />
    </div>
  );
};
export default UsersList;
