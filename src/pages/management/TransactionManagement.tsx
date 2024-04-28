import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import { OrderItemType, OrderType } from "../../types"
import { Link } from "react-router-dom";


const img = "https://m.media-amazon.com/images/I/81ENMk6KsJL._AC_SX522_.jpg";

const orderItems: OrderItemType[] = [
    {
        name: "Iphone 15 Pro",
        photo: img,
        _id: "etjkyunmfhyk",
        quantity: 4,
        price: 1500,
    },
]

const TransactionManagement = () => {

    const [order, setOrder] = useState<OrderType>({
        name: "Farhan Ahmed",
        address: "77 Black Street",
        city: "Dhaka",
        state: "Mirpur",
        country: "Bangladesh",
        pinCode: 2634656,
        status: "Processing",
        subTotal: 4000,
        discount: 1200,
        shippingCharges: 0,
        tax: 200,
        total: 400 + 200 + 0 - 1200,
        orderItems,
        _id: "hdtghjtjtjkk"
    });


    const { name, address, city, country, state, pinCode, subTotal, shippingCharges, tax, discount, total, status } = order;

    const updateHander = () => {
        setOrder(prev => ({
            ...prev, status: prev.status === "Processing" ? "Shipped" : "Delivered",
        }))
    }

    return (
        <div className="adminContainer">

            {/* <!-- sidebar --> */}
            <AdminSidebar />

            {/* <!-- main --> */}
            <main className="productManagement">
                <section style={{
                    padding: "2rem"
                }}>
                    <h2>Order Items</h2>

                    {
                        order.orderItems.map(i => (
                            <ProductCard name={i.name} photo={i.photo} _id={i._id} quantity={i.quantity} price={i.price} />
                        ))
                    }
                </section>

                <article className="shippingInfoCard">
                    <h1>Order Info</h1>
                    <h5>User Info</h5>
                    <p>Name: {name}</p>
                    <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>

                    <h5>Amount Info</h5>
                    <p>Subtotal: {subTotal}</p>
                    <p>Shipping Charges: {shippingCharges}</p>
                    <p>Tax: {tax}</p>
                    <p>Discount: {discount}</p>
                    <p>Total: {total}</p>

                    <h5>Status Info</h5>
                    <p>Status:{" "}
                        <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"}>{status}</span>
                    </p>
                    <button onClick={updateHander}>Process Status</button>
                </article>
            </main>
        </div>
    )
}



const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
    <div className="transactionProductCard">
        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>${price} X {quantity} = ${price * quantity}</span>
    </div>
)



export default TransactionManagement