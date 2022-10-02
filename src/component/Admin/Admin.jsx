import React,{useState} from "react";
import "./Admin.css";
import { Button,Modal,Input } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {

  const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        <div>
          <div className="searchform">
            <div style={{ display: "flex",alignItems:"center" }}>
              <input type="text" placeholder="UserID" />
              <input type="text" placeholder="UserName" />
              <i class="fa fa-filter" aria-hidden="true"></i>
            </div>
            <i class="fa fa-user-plus" style={{fontSize:"20px",cursor:'pointer'}} onClick={handleShow} aria-hidden="true"></i>
          </div>
        </div>
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        dialogClassName="dialogWidth"
        centered
      >
        <Modal.Header className="modalContainer"  closeButton>
          <Modal.Title className="modalTitle">Client Details</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form className="fillField">
            <input type="text" placeholder="UserID" />
            <input type="text" placeholder="UserName" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="2Factor" />
            <input type="text" placeholder="JoiningDate" />
            <input type="text" placeholder="NickName" />
            <div style={{position:'relative',padding:"0 10px"}}>
            <span style={{fontSize:'13px'}}>Status <input className="checkboxField" type="checkbox" /></span>
            </div>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Save
          </Button>
          
        </Modal.Footer>
      </Modal>
       </div> 
        <div className="tableContainer">
          <table class="styled-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Status</th>
                <th>UserID</th>
                <th>UserName</th>
                <th>JoiningDate</th>
                <th>Enable</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className='inputChange'/> 1
                </td>
                <td className="status"><div>
                </div></td>
                <td>RA392</td>
                <td>Ashiwarya kalasaran</td>
                <td>20-feb-2022</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  {" "}
                  <i class="fa fa-user-plus" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                </td>
              </tr>
              <tr class="active-row">
                <td>
                  <input type="checkbox" className='inputChange'/> 2
                </td>
                <td className="status"><div>
                </div></td>
                <td>RA392</td>
                <td>Ashiwarya kalasaran</td>
                <td>20-feb-2022</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  {" "}
                  <i class="fa fa-user-plus" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                </td>
              </tr>
              
              <tr>
                <td>
                  <input type="checkbox" className='inputChange'/> 3
                </td>
                <td className="status"><div>
                </div></td>
                <td>RA392</td>
                <td>Ashiwarya kalasaran</td>
                <td>20-feb-2022</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  {" "}
                  <i class="fa fa-user-plus" style={{fontSize:"20px"}} aria-hidden="true"></i>
                </td>
              </tr>
              <tr class="active-row">
                <td>
                  <input type="checkbox" className='inputChange'/> 4
                </td>
                <td className="status"><div>
                </div></td>
                <td>RA392</td>
                <td>Ashiwarya kalasaran</td>
                <td>20-feb-2022</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  {" "}
                  <i class="fa fa-user-plus" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className='inputChange'/> 5
                </td>
                <td className="status"><div>
                </div></td>
                <td>RA392</td>
                <td>Ashiwarya kalasaran</td>
                <td>20-feb-2022</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  {" "}
                  <i class="fa fa-user-plus" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                </td>
              </tr>
              <tr class="active-row">
                <td>
                  <input type="checkbox" className='inputChange'/> 6
                </td>
                <td className="status"><div>
                </div></td>
                <td>RA392</td>
                <td>Ashiwarya kalasaran</td>
                <td>20-feb-2022</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  {" "}
                  <i class="fa fa-user-plus" style={{fontSize:"20px"}}  aria-hidden="true"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <button>Login All</button>
        </div>
      </div>
    </>
  );
};

export default Admin;
