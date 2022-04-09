import Pdf from "./Pdf";
import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
const UserOrders = (props) => {
  const [orders, setOrders] = useState(0);
  const [userDetails, setUserDetails] = useOutletContext([]);
  console.log("user order final ", userDetails.orders);
  useEffect(() => {
    setOrders(userDetails.orders);
  }, [userDetails, orders]);
  const myOrders = userDetails.orders;
  // orders = {};
  // useEffect(() => {
  //   // if (props.authCtx.user !== null) {
  //   let orders = props.authCtx.user.orders;
  //   orders.sort((a, b) => {
  //     let nameA = a.courseName.toLowerCase();
  //     let nameB = b.courseName.toLowerCase();
  //     // console.log(nameA, nameB);
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   setOrders(orders);
  //   // setAllOrders(orders);
  //   // }
  // }, [props.authCtx.user]);
  let nullUi = "No More Orders";
  let orderUi = null;
  // if (orders !== null) {
  console.log("orederr", orders);
  console.log("orederr222", userDetails?.orders);
  console.log("name", myOrders[0]["price"]);
  console.log("type", typeof myOrders[0]);
  console.log("type", myOrders?.length);
  orderUi = userDetails?.orders?.map((order) => {
    console.log("asdfsadf", myOrders[0]["order_id"]);
    console.log("asdfsadf", order?.course_name);

    return (
      <>
        <tr key={order.order_id}>
          <td>{order.course_name}</td>
          <td>{order.category}</td>
          <td>{new Date(order.course_bought_timestamp).toLocaleString()}</td>
          <td>{order.status}</td>
          <td>
            <i class="fas fa-rupee-sign"></i>
            {order.price}
          </td>
          <td>
            {/* <Pdf /> */}
          </td>
        </tr>
      </>
    );
  });

  // }
  return (
    <div class="col-md-9 col-lg-10 col-xl-10 scrollbar" style={{margin: "auto"}}>
      {/* <!-------- Dashboard ----------> */}
      <div class="dashboard" style={{ marginTop: "1 rem" }}>
        <p class="title m-0">Order</p>
        <p class="link m-0">
          <a href="index.html">Home</a>&ensp;/&ensp;Dashboard
        </p>
      </div>
      {/* <!----------------------------> */}

      {/* <!--------- Order Details--------------> */}
      <div class="order">
        <div class="list-header">
          <h4>My Orders</h4>
          {/* <ul class="list dropdown">
            
          </ul> */}
          {/* <div class="list dropdown">
            <select
              name="order"
              id="order"
              class="dropdown-toggle"
            // onChange={getSortedData}
            >
              <option class="list-item" value="course">
                Course Name
              </option>
              <option class="list-item" value="category">
                Category
              </option>
              <option class="list-item" value="date">
                Purchase Date
              </option>
            </select>
          </div> */}
        </div>
        {/* <!----------- // -------------> */}
        <div class="order-details">
          <table class="table table-bordered">
            <thead>
              <tr>
                <td>Course Name</td>
                <td>Cateogry</td>
                <td>Purchase Date</td>
                <td>Status</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>{orderUi}</tbody>
          </table>
        </div>
        .{/* <!----------------------------> */}
        <div class="end">{nullUi}</div>
        {/* <!----------------------------> */}
      </div>
      {/* <!-- // --> */}

      {/* <!-------- Footer ----------> */}
      <div class="footer_bottom_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="copyright-widget text-center">
                <p>Copyright LMS &copy; 2021. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
