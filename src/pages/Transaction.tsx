import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";


interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
]


const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 63,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 2500,
    discount: 370,
    quantity: 13,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Alex",
    amount: 9500,
    discount: 240,
    quantity: 36,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 63,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 2500,
    discount: 370,
    quantity: 13,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Alex",
    amount: 9500,
    discount: 240,
    quantity: 36,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 63,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 2500,
    discount: 370,
    quantity: 13,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Alex",
    amount: 9500,
    discount: 240,
    quantity: 36,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];


const Transaction = () => {

  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboardProductBox", "Transaction", true), []);

  return (
    <div className="adminContainer">

      {/* <!-- sidebar --> */}
      <AdminSidebar />

      {/* <!-- main --> */}
      <main>{Table()}</main>

    </div>
  )
}

export default Transaction