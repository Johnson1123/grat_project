import React from "react";
import { images } from "../../../../assets";
import './Admin_home.css'
import {
  useApproveCarMutation,
  useDeleteCarMutation,
  useRejectCarMutation,
} from "../../../../slice/mutation/authApi";

function List({ data }) {
  const [deleteCar, { isLoading, error }] = useDeleteCarMutation();
  const [approve, { isLoading: isApproving, error: ApproveError }] =
    useApproveCarMutation();
  const [reject, { isLoading: isRejecting, error: RejectError }] =
    useRejectCarMutation();
  const handleDelete = async (id) => {
    try {
      const res = await deleteCar({ carId: id }).unwrap();
      console.log("Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const handleApprove = async (id) => {
    try {
      const res = await approve({ carId: id }).unwrap();
      console.log("Approved");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (id) => {
    try {
      const res = await reject({ carId: id }).unwrap();
      console.log("rejected");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="all-div">
         <div className="flex justify-between p-3 rounded-md bg-slate-200 items-center mt-3 list-container">
      <p className="w-[7%] truncate">{data.id}</p>
      <div className="flex gap-2 items-center w-[15%] truncate image-list">
        <img
          src={images.car2}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <p>{"Johnson"}</p>
      </div>
      <p className="w-[10%] truncate">{"Mecedze Benz"}</p>
      <p className="w-[10%] truncate">{"Audi"}</p>
      <p className="w-[12%] truncate">{"Electrice engine"}</p>

      <p className="flex items-center justify-start gap-2  w-[1%] truncate">
        <span
          className={`h-[10px] w-[10px] ${
            data?.status === "rejected"
              ? "bg-red-500"
              : data?.status === "pending"
              ? "bg-[#7e7e7e]"
              : "bg-[green]"
          } rounded-full`}
        ></span>
        {data?.status}
      </p>
      {data?.status === "pending" ? (
        <View />
      ) : data?.status === "rejected" ? (
        <View />
      ) : data?.status === "approved" ? (
        <View />
      ) : null}
      {data?.status === "approved" ? (
        <Reject id={data.id} handle={handleReject} />
      ) : data?.status === "rejected" ? (
        <Approve id={data.id} handle={handleApprove} />
      ) : data?.status === "pending" ? (
        <Approve id={data.id} handle={handleApprove} />
      ) : null}
      {data?.status === "approved" ? (
        <Delete id={data.id} handle={handleDelete} />
      ) : data?.status === "rejected" ? (
        <Delete id={data.id} handle={handleDelete} />
      ) : data?.status === "pending" ? (
        <Reject id={data.id} handle={handleReject} />
      ) : null}
    </div>
    </div>
 
  );
}

export default List;

function View() {
  return (
    <button className="bg-[#7e7e7e] px-3 py-1 rounded-md text-white w-[8%] truncate btn-list">
      View
    </button>
  );
}
function Delete({ id, handle }) {
  return (
    <button
      className="bg-red-600 px-3 py-1 rounded-md w-[10%] truncate text-white btn-list"
      onClick={() => handle(id)}
    >
      Delete
    </button>
  );
}
function Approve({ id, handle }) {
  return (
    <button
      className="bg-[green] px-3 py-1 rounded-md w-[10%] truncate text-white btn-list"
      onClick={() => handle(id)}
    >
      Approve
    </button>
  );
}
function Reject({ id, handle }) {
  return (
    <button
      className="bg-[#171242] px-3 py-1 rounded-md text-white btn-list"
      onClick={() => handle(id)}
    >
      Rejected
    </button>
  );
}
