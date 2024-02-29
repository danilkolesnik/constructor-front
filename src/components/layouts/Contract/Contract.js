/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { PreLoader } from '../../../services/preLoader';
import { serialize, serializeFront } from '../../../services/generateHTMLfromRichText';
import { numerateDocument } from '../../../services/numerateDocument';
import './table.css';

export default function ContractForm() {
  const [data] = useState(PreLoader());
  const contractName = JSON.parse(sessionStorage.getItem('contract_name'));
  const documentFontSize = `14px`;
  useEffect(() => {
    // NUMERATE DOCUMENT WITH '[number]'
    const changedFrontTable = numerateDocument(
      document.getElementById('front-table').innerHTML,
      data[1],
    );
    const changedContractTable = numerateDocument(
      document.getElementById('contract').innerHTML,
      data[1],
    );
    // return changed table
    document.getElementById('front-table').innerHTML = changedFrontTable.join(' ');
    document.getElementById('contract').innerHTML = changedContractTable.join(' ');
  }, []);
  return (
    <>
      <div id='contract' style={{ width: 'calc(100vw/2)' }} className='document-table'>
        <table
          className='table-container'
          style={{
            borderTop: '1px solid #c8c8df',
            borderLeft: '1px solid #c8c8df',
            borderCollapse: 'collapse',
            textAlign: 'center',
            fontSize: '16px',
          }}
        >
          <tr
            style={{
              borderRight: '1px solid #c8c8df',
              borderBottom: '1px solid #c8c8df',
              borderCollapse: 'collapse',
            }}
          >
            <td
              style={{
                borderBottom: '1px solid #c8c8df',
                borderRight: '1px solid #c8c8df',
                padding: '5px',
                fontSize: '19px',
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              {contractName[0]}
            </td>
            {data[1] && (
              <td
                style={{
                  borderBottom: '1px solid #c8c8df',
                  borderRight: '1px solid #c8c8df',
                  padding: '5px',
                  fontSize: '19px',
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                {contractName[1]}
              </td>
            )}
          </tr>
          {data[0].map((contract, i) => (
            <tr
              style={{
                borderRight: '1px solid #c8c8df',
                borderBottom: '1px solid #c8c8df',
                borderCollapse: 'collapse',
              }}
            >
              <td
                style={{
                  borderBottom: '1px solid #c8c8df',
                  borderRight: '1px solid #c8c8df',
                  padding: '5px',
                  textAlign: 'justify',
                  verticalAlign: 'top',
                  fontSize: documentFontSize,
                }}
              >
                {serialize(contract.children)}
              </td>
              {data[1] && data[1][i]?.children && (
                <td
                  style={{
                    borderBottom: '1px solid #c8c8df',
                    borderRight: '1px solid #c8c8df',
                    padding: '5px',
                    textAlign: 'justify',
                    verticalAlign: 'top',
                    fontSize: documentFontSize,
                  }}
                >
                  {serialize(data[1][i].children)}
                </td>
              )}
            </tr>
          ))}
        </table>
      </div>
      {/* FRONT TABLE */}
      <div className='display-table'>
        <table
          className='table-container'
          id='front-table'
          style={{
            borderTop: '1px solid #c8c8df',
            borderLeft: '1px solid #c8c8df',
            borderCollapse: 'collapse',
            textAlign: 'center',
            fontSize: '16px',
            fontFamily: 'Arial',
          }}
        >
          <tr
            style={{
              borderRight: '1px solid #c8c8df',
              borderBottom: '1px solid #c8c8df',
              borderCollapse: 'collapse',
              fontFamily: 'Arial',
            }}
          >
            <td
              style={{
                borderBottom: '1px solid #c8c8df',
                borderRight: '1px solid #c8c8df',
                fontSize: '19px',
                textAlign: 'center',
                fontWeight: 600,
                fontFamily: 'Arial',
              }}
            >
              {contractName[0]}
            </td>
            {data[1] && (
              <td
                style={{
                  borderBottom: '1px solid #c8c8df',
                  borderRight: '1px solid #c8c8df',
                  fontSize: '19px',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontFamily: 'Arial',
                }}
              >
                {contractName[1]}
              </td>
            )}
          </tr>
          {data[0].map((contract, i) => (
            <tr
              style={{
                borderRight: '1px solid #c8c8df',
                borderBottom: '1px solid #c8c8df',
                borderCollapse: 'collapse',
                fontFamily: 'Arial',
              }}
            >
              <td
                style={{
                  borderBottom: '1px solid #c8c8df',
                  borderRight: '1px solid #c8c8df',
                  textAlign: 'justify',
                  verticalAlign: 'top',
                  padding: '5px',
                  fontFamily: 'Arial',
                }}
              >
                {serializeFront(contract.children)}
              </td>
              {data[1] && data[1][i]?.children && (
                <td
                  style={{
                    borderBottom: '1px solid #c8c8df',
                    borderRight: '1px solid #c8c8df',
                    padding: '5px',
                    textAlign: 'justify',
                    verticalAlign: 'top',
                  }}
                >
                  {serializeFront(data[1][i].children)}
                </td>
              )}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
