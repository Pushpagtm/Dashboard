import React from 'react';
import "../../assets/css/userview.scss";
import TableDash from '../table/TableDash';

function ViewProduct(props) {
    return (
        <div className="single">
      
        <div className="singleContainer">
         
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">IamProduct</h1>
                  <div className="detailItem">
                    <span className="itemKey">Product Category</span>
                    <span className="itemValue">Backery</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Number:</span>
                    <span className="itemValue">23</span>
                  </div>
                
                 
                </div>
              </div>
            </div>
            
          </div>
          <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <TableDash/>
        </div>
        
        </div>
      </div>
    );
}

export default ViewProduct;