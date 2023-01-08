import React from "react";
import "./ClientsName.css";

import { useState } from "react";

export default function ClientsName () {
  const [isActive, setIsActive] = useState(true);
  const handleclick = () => {
    setIsActive((current) => !current);

    // console.log(isActive);
  };
  return (
    <>
      <div
        className={isActive ? "company_box Active" : "company_box"}
        onClick={handleclick}
      >
        <div className="comp_box_line1">
          <div className={isActive ? "company_name Active" : "company_name"}>
            {!isActive ? "Company Name" : "Mckinsey & Company"}
          </div>
          <div className={isActive ? "ccde Active-white" : "ccde"}>
            {!isActive ? "CCDE" : "MCKY"}
          </div>
        </div>
        <div className="comp_box_line2">
          <div className={isActive ? "entities Active-white" : "entities"}>
            8 Entities
          </div>
          <div className={isActive ? "users Active-white" : "users"}>
            {!isActive ? "64 Users" : "MCKY"}
          </div>
        </div>
      </div>
    </>
  );
}
