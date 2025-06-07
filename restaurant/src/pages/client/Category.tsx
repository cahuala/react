import React from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";



type TabaleOrder ={
    id?: string
    orderId?: string
    category?: {
      type?: string | ""
      text?: string
      icon?: string
    }[]
    food?:Food[]
    order?:{}[]
    orderHistory?: string
  }
  type Food={
    id?: string
    name?: string
    description?: string
    price?: number
    available?: boolean
    type?: string
    image?: string
    hide?: boolean
    size?: string
  }
type PosMenuProps ={
  tableData: TabaleOrder;
  categoryType: string;
  showType: (event: React.MouseEvent<HTMLButtonElement>, type: string) => void;
}

const PosMenu: React.FC<PosMenuProps> = ({ tableData, categoryType, showType }) => {
  return (
    <div className="pos-menu">
      <div className="logo">
        <Link to="/">
          <div className="logo-img">
            <i className="fa fa-bowl-rice"></i>
          </div>
          <div className="logo-text">Pine & Dine</div>
        </Link>
      </div>
      <div className="nav-container">
        <PerfectScrollbar className="h-100">
          <ul className="nav nav-tabs">
            {tableData?.category?.map((category, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={
                    "nav-link" + (category.type === categoryType ? " active" : "")
                  }
                  onClick={(event:any) => showType(event, category.type ?? "")}
                  href="#/"
                >
                  <div className="nav-icon">
                    <i className={category.icon}></i>
                  </div>
                  <div className="nav-text">{category.text}</div>
                </a>
              </li>
            ))}
          </ul>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default PosMenu;
