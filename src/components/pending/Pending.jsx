import React from "react";
import "./Pending.scss";

export default function Pending() {
  return (
    <div className="pending">
      <div className="pending__amount">You have 4 pending tasks</div>
      <button className="pending__clear">Clear all</button>
    </div>
  );
}
