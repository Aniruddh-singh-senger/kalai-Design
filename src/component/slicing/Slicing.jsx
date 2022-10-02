import React from "react";
import { NavLink } from "react-router-dom";
import Position from "./Position";
import Orders from "./Orders";
import { Route, Routes } from "react-router-dom";
import "./Slicing.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slicing = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="slicingContainer">
        <div className="userDistribution">
          <p style={{ marginTop: "23px", fontSize: "14px", fontWeight: "600" }}>
            {" "}
            User Distribution
          </p>
          <div className="tableContainer" style={{ marginTop: "36px" }}>
            <table class="styled-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User</th>
                  <th>Stragegy</th>
                  <th>Margin</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>

                  <td>RA392-kalai </td>
                  <td className="stragegyContainer">
                    <div className="Stragegy">10</div>
                  </td>
                  <td>7,65,35,250</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr class="active-row">
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr class="active-row">
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr class="active-row">
                  <td>6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="entryDetails">
          <p onClick={() => setShow(true)} className="entryinfo">
            Entry Details
          </p>
          <div className="infoContainer">
            <div className="infoNavbar">
              <div>
                <NavLink
                  to="Position"
                  style={{ fontWeight: "600", fontSize: "14px" }}
                  className={({ isActive }) => (isActive ? "pageActive" : "")}
                >
                  Position
                </NavLink>
                <NavLink
                  to="Orders"
                  style={{ fontWeight: "600", fontSize: "14px" }}
                  className={({ isActive }) => (isActive ? "pageActive" : "")}
                >
                  Orders
                </NavLink>
              </div>
              <div className="infoform">
                <input type="text" placeholder="UserID/Status" />
                <i class="fa fa-filter" aria-hidden="true"></i>
              </div>
            </div>
            <Routes>
              <Route path="Position" element={<Position />} />
              <Route path="Orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
        <div className="model_box">
          <Modal
            show={show}
            dialogClassName="modalWidth"
            onHide={() => setShow(false)}
            centered
          >
            <Modal.Header className="entrymodalContainer">
              <Modal.Title className="entrymodalTitle">Entry Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modalDetailContainer">
                <div style={{display:"flex"}}>
                  <div className="purchaseContainer">Expiry Date <i class="fa fa-calendar" aria-hidden="true"></i></div>
                  <div className="purchaseContainer">Product Type <i class="fa fa-caret-down" aria-hidden="true"></i></div>
                </div>
                <button className="modalButton">Place Order</button>
              </div>

              <div className="tableContainer" style={{ marginTop: "8px",borderRadius: "0px 0px 10px 10px" }}>
            <table className="styledTable" style={{ marginBottom: "0px" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Instrument</th>
                  <th>Strike</th>
                  <th>Leg</th>
                  <th>Type</th>
                  <th>Lots</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td >
                    <div className="boxContainer">BANKNIFTY<i class="fa fa-caret-square-o-down" aria-hidden="true"></i></div>
                  </td>
                  <td >
                    <div className="boxContainer">36000</div>
                  </td>
                  <td >
                    <div className="boxContainer">CE <i class="fa fa-caret-square-o-down" aria-hidden="true"></i></div>
                  </td>
                  <td >
                    <div className="boxContainer">BUY <i class="fa fa-caret-square-o-down" aria-hidden="true"></i></div>
                  </td>
                  <td >
                    <div className="boxContainer">1</div>
                  </td>
                  <td><i class="fa fa-times-circle" aria-hidden="true" style={{fontSize:"22px",color:"red"}}></i></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td >
                    <div className="boxContainer">NIFTY <i class="fa fa-caret-square-o-down" aria-hidden="true"></i></div>
                  </td>
                  <td >
                    <div className="boxContainer">36000</div>
                  </td>
                  <td >
                    <div className="boxContainer">PE <i class="fa fa-caret-square-o-down" aria-hidden="true"></i></div>
                  </td>
                  <td >
                    <div className="boxContainer">SELL <i class="fa fa-caret-square-o-down" aria-hidden="true"></i></div>
                  </td>
                  <td >
                    <div className="boxContainer">1</div>
                  </td>
                  <td><i class="fa fa-times-circle" aria-hidden="true" style={{fontSize:"22px",color:"red"}}></i></td>
                </tr>
              </tbody>
            </table>
            <div className="tableFooter">
            <i class="fa fa-plus-circle" aria-hidden="true" style={{fontSize:"22px",color:"darkturquoise"}}></i>
            </div>
          </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Slicing;
