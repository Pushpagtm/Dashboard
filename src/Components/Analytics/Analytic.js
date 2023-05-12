import React from 'react';
import Widget from '../Widget/Widget';
import '../../assets/css/analytic.css';
import Chart from '../chart/Chart';
import Featured from '../featured/Featured';
import TableDash from '../table/TableDash';
function Analytic() {
  return (
    <>
    <div className="homeContainer">
       <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
         
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
         <TableDash/>
        </div>
        </div>
      
     

    </>
  );
}

export default Analytic;