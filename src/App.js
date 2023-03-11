import "./App.css";
import React from 'react';
import { useState } from "react";
import {readString} from 'react-papaparse';
import csvinpfile from "./MW-NIFTY-MIDSMALLCAP-400-29-Aug-2022.csv"

function App() {

              //State to store table Column names
          const [tablecolumnNames, settablecolumnNames] = useState([]);

          //State to store all Row Values
          const [tablerowValues, settablerowValues] = useState([]);

          const csvreadandstore = {
              header: true,
              download: true,
              skipEmptyLines: true,
              complete: (csvreadresult, file) => {
              console.log('parsing complete:', csvreadresult, file)
              const columnnameArray = [];
              const rowvaluesArray = [];

              // Iterating data to get column name and their values
              csvreadresult.data.map((d) => {
                columnnameArray.push(Object.keys(d));
                rowvaluesArray.push(Object.values(d));
              });
              console.log('column names:', columnnameArray[0])  
              console.log('row 0:', rowvaluesArray[0])  
              console.log('row 1:', rowvaluesArray[1])  
              console.log('row 2:', rowvaluesArray[2]) 
              
                // Filtered Column Names
              settablecolumnNames(columnnameArray[0]);

                // Filtered Values
              settablerowValues(rowvaluesArray);
            
          },

          error:  (error, file) => {
            console.log('Error while parsing:', error, file)}


          };

          readString(csvinpfile, csvreadandstore)

 

 return(
  <div>
  <h1> Table Data</h1>
  
    <table style={{border: "2px solid red", margin: "5px auto"}} >
        <thead>
          <tr>
            {tablecolumnNames.map((rows, index) => {
              return <th style={{border: "1px solid black"}} key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tablerowValues.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td style={{border: "1px solid black"}} key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );



}


export default App;