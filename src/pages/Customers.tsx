import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useCallback, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";






interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
]




const img1 = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


const arr: DataType[] = [
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img1} alt="Shoes" />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />
    ),
    name: "May Scoot",
    email: "may.scoot@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img1} alt="Shoes" />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />
    ),
    name: "May Scoot",
    email: "may.scoot@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img1} alt="Shoes" />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />
    ),
    name: "May Scoot",
    email: "may.scoot@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img1} alt="Shoes" />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />
    ),
    name: "May Scoot",
    email: "may.scoot@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];




const Customers = () => {

  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboardProductBox", "Customers", true), []);


  return (
    <div className="adminContainer">

      {/* <!-- sidebar --> */}
      <AdminSidebar />

      {/* <!-- main --> */}
      <main>{Table()}</main>

    </div>
  )
}

export default Customers