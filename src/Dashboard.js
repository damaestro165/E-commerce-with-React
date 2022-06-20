import React from "react";

function Dashboard() {
  const Card = (props) => {
    const style = {
      backgroundColor: props.color,
    };
    return (
      <div className="box-card">
        <div className="in--card" style={style}>
          <h6>{props.title}</h6>
          <h3>{props.number}</h3>
        </div>
      </div>
    );
  };
  return (
    <div className="container-fluid">
      <h4 className="border-bottom m-1 p-2">Dashboard</h4>
      <div className="container">
        <Card title="cart" number="7" color="rgb(5, 77, 53)" />
        <Card title="Wish List" number="23" color="rgb(14, 54, 40)" />
        <Card title="Wallet Balance" number="$2023" color="rgb(51, 66, 61)" />
        <Card title="Total Order" number="30" color="rgb(5, 77, 53)" />
      </div>
    </div>
  );
}
export default Dashboard;
