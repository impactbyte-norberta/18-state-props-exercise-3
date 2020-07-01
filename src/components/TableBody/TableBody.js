import React from 'react';

function TableBody(props) {
    return (
        <tbody>
            <tr>
                <td>{props.student.name}</td>
                <td>{props.student.age}</td>
                <td>{props.student.sex}</td>
                <td>{props.student.address}</td>
            </tr>
        </tbody>
    );
}

export default TableBody;
