import React, { useEffect, useState } from "react";
import io from "socket.io-client";
// import ProductList from "../components/ProductList";
import Notification from "../components/Notitications";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/products")
  //     .then((res) => {
  //       setProducts((prevState) => [...prevState, res.data]);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  const [isNotification, setIsNotification] = useState(false);
  const [notification, setNotification] = useState({});

  const popup = () => {
    const socket = io("http://localhost:5000");
    socket.on("notification", (res) => {
      console.log(res.title);

      setIsNotification(true);
      setNotification(() => {
        return {
          title: res.title,
          content: res.content,
        };
      });
    });
  };
  useEffect(() => {
    if (!isNotification) {
      popup();
    }
  }, [isNotification]);

  return (
    <div>
      {/* <ProductList products={products}></ProductList> */}
      {/* {isNotification ? (
        <Notification notification={notification}></Notification>
      ) : (
        <div></div>
      )} */}
      {isNotification && (
        <Notification notification={notification}></Notification>
      )}
    </div>
  );
};

export default Home;
