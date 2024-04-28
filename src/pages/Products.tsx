import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";




interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
]

const img1 = "https://m.media-amazon.com/images/I/81ENMk6KsJL._AC_SX522_.jpg";
const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";


const arr: DataType[] = [
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Iphone 15 Pro",
    price: 1500,
    stock: 31,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 245690,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Iphone 15 Pro",
    price: 1500,
    stock: 31,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 245690,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Iphone 15 Pro",
    price: 1500,
    stock: 31,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 245690,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Iphone 15 Pro",
    price: 1500,
    stock: 31,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 245690,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Iphone 15 Pro",
    price: 1500,
    stock: 31,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
];


const Products = () => {

  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboardProductBox", "Products", true), []);

  return (
    <div className="adminContainer">

      {/* <!-- sidebar --> */}
      <AdminSidebar />

      {/* <!-- main --> */}
      <main>{Table()}</main>

      {/* <!-- manage-product --> */}
      <Link to="/admin/product/new" className="manageBtn"><FaPlus /></Link>

    </div>
  )
}

export default Products