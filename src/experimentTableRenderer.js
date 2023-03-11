import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import Papa from 'papaparse';

let results

function CsvTableRenderer() {

  function doStuff(data) {
      //Data is usable here
      console.log("do sssss"+data[0]);
      }

  function parseData(url, callBack) {
      Papa.parse(url, {
          download: true,
          dynamicTyping: true,
          complete: function(results) {
              callBack(results.data);
          }
      });
  }

  

  return (  
    <div>
      <button onClick={parseData("src\MW-NIFTY-MIDSMALLCAP-400-29-Aug-2022.csv", doStuff)}>Load Local CSV File</button>
      
    </div>
  );
}

export default CsvTableRenderer;
