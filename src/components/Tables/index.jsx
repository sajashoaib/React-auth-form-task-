import React from 'react';
import './style.css';
import { useThemeContext } from '../contexts/ThemeContext';

const Tables = ({ isLoading, columns, data, onRowClick = () => { } }) => {
  const { theme } = useThemeContext();

  return (
    <>
      <table className={theme}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>

        {!isLoading && (
          <tbody>
            {data.map((row) => (
              <tr key={row._id} onClick={() => onRowClick(row)}>
                {columns.map((column) => (
                  <td key={`${row._id + column.key}`}>
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isLoading && <h1>Loading...</h1>}
    </>
  );
};






// const Tables = ({ isLoading, columns, data, onRowClick = () => {} }) => {
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column.key}>{column.title}</th>
//             ))}
//           </tr>
//         </thead>

//         {!isLoading && (
//           <tbody>
//             {Array.isArray(data) && data.length > 0 ? (
//               data.map((row) => (
//                 <tr key={row.id} onClick={() => onRowClick(row)}>
//                   {columns.map((column) => (
//                     <td key={`${row.id + column.key}`}>
//                       {column.render ? column.render(row) : row[column.key]}
//                     </td>
//                   ))}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={columns.length}>No data available.</td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>

//       {isLoading && <h1>Loading...</h1>}
//     </>
//   );
// };

export default Tables;










