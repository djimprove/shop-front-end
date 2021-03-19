import ReactDom from "react-dom";

const index = ({ notification }) => {
  return ReactDom.createPortal(
    <div className="fixed top-0 w-full  h-screen flex items-start pt-40 justify-center">
      <div className="bg-white shadow-lg h-64 w-2/3 p-6 border-2 border-green-200 rounded-lg ">
        <div className="text-2xl uppercase">{notification.title}</div>
        <div className="pt-6">notification content</div>
      </div>
    </div>,
    document.getElementById("notifications")
  );
};

export default index;
