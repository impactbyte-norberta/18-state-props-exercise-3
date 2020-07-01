// ============ Cara 1

// import React from 'react';

// function TableBody(props) {
//     return (
//         <tbody>
//             <tr>
//                 <td>{props.student.name}</td>
//                 <td>{props.student.age}</td>
//                 <td>{props.student.sex}</td>
//                 <td>{props.student.address}</td>
//             </tr>
//         </tbody>
//     );
// }

// export default TableBody;

// ============= Cara 2

import React from 'react';

function TableBody(props) {
    const rows = props.students.map((student, index) => (
        <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.sex}</td>
            <td>{student.address}</td>
        </tr>
    ));
    return <tbody>{rows}</tbody>;
}

export default TableBody;
