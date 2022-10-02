import React from 'react'

const Orders = () => {
  return (
    <>
    <div className="positionContainer">
    <div className="orderContainer" style={{}}>
          <table class="styledTable">
            <thead>
              <tr>
                <th>S.No</th>
                <th>User</th>
                <th>Symbol</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                   1
                </td>
            
                <td>RA392-kalai </td>
                <td >BANKNIFTY2280437900CE</td>
                <td>NRML</td>
                <td>
                  .225
                </td>
                <td>
                  Completed
                </td>
                <td></td>
              </tr>
              <tr class="activeRow">
                <td>
                   2
                </td>
                <td>RA392-kalai </td>
                <td >BANKNIFTY2280437900CE</td>
                <td>NRML</td>
                <td>
                  .225
                </td>
                <td>
                  Rejected
                </td>
                <td>Margin Error</td>
              </tr>
              <tr>
                <td>
                   3
                </td>
            
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="activeRow">
                <td>
                   4
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td> 
                </td>
              </tr>
              <tr>
                <td>
                   5
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      <button style={{color:"black",fontWeight:"600"}}>Clear Orders</button>
      </div>
    </>
  )
}

export default Orders