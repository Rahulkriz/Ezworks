import React, { useState } from "react";
import "./ClientsNameex.css";
import "./ClientsName.css";

export default function  () {
  const [isActive, setIsActive] = useState(false);
  const handleclick = () => {
    setIsActive((current) => !current);
    // console.log(isActive);
  };

  return (
    <>
      <div
        className={isActive ? "company_box_ex Active" : "company_box_ex"}
        onClick={handleclick}
      >
        <div className="comp_box_line1_ex">
          <div
            className={isActive ? "company_name_ex Active" : "company_name_ex"}
          >
            {!isActive ? "Company Name" : "Mckinsey & Company"}
          </div>
          <div className={isActive ? "ccde_ex Active-white" : "ccde_ex"}>
            {!isActive ? "CODE" : "MCKY"}
          </div>
        </div>
        <div
          className={
            isActive ? "comp_box_line2_ex Active-white" : "comp_box_line2_ex"
          }
        >
          <div
            className={isActive ? "entities_ex Active-white" : "entities_ex"}
          >
            8 Entities
          </div>
          <div className={isActive ? "users_ex Active-white" : "users_ex"}>
            64 Users
          </div>
        </div>
      </div>
    </>
  );
}
