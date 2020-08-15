import React from 'react'
const TableGenerator=(props)=>{
        return (
          <table className="MyClassName">
            <thead>
              <tr>
                {props.titles.map(title =>
                  <th key={title}>{title}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {props.rows.map((row, i) =>
                <tr key={i}>
                  {row.map((col, j) =>
                    <td key={j}>{col}</td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        );
}
export default TableGenerator;