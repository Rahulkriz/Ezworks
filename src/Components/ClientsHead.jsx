import React from "react";
import "./ClientsHead.css";

export default function ClientsHead() {
  return (
    <>
      <div className="client_main"></div>
      <div className="client_box">Clients</div>
      <div className="sort_icon"><i class="fa-solid fa-arrow-down-wide-short"></i></div>
      <div className="creation_time">Creation Time</div>
      <div className="plus_square"><i class="fa-solid fa-square-plus fa-2x"></i></div>
      <div className="search_bar"></div>
      <div className="month"></div>
      <div className="client_main_mobile"></div>
      <div className="client_box_mobile">Clients</div>
      <div className="sort_icon_mobile"><i class="fa-solid fa-arrow-down-wide-short"></i></div>
      <div className="creation_time_mobile">Creation Time</div>
      <div className="plus_square_mobile"><i class="fa-solid fa-square-plus fa-2x"></i></div>
      <div className="search_bar_mobile"></div>
      <div className="month_mobile"></div>
    </>
  );
}
