import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
    <div className="barSideNav">
      <div className="ez_logo">
        <img src="https://media.licdn.com/dms/image/C560BAQGM74Ib1l-ubw/company-logo_200_200/0/1626978272204?e=1681344000&v=beta&t=PYFTL5QBRsTLjYfgWFHsdSt9uyfEeNFnzbAwTd32AAY"></img>
      </div>
      <button className="sideNaV_btn1"></button>
      <button className="sideNaV_btn2"></button>
      <button className="sideNaV_btn3"></button>
    </div>
    <div className="barSideNav_mobile"></div>
    </>
  );
}
