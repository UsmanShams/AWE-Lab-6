import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/actions";
import { useUser } from "../context/UserContext";

const Counter = ({ title = "Counter (Redux)" }) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { user } = useUser();

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{user.name}'s count: <strong>{count}</strong></p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;