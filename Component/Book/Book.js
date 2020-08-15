import React, { Fragment } from 'react';
import './Book.css'
const Book = (props) => {
    return (
        <Fragment>
            <td> {props.name} </td>
            <td> {props.author} </td>
            <td> {props.availability?'Yes':'No'} </td>
            <td> <button onClick={props.onclick.bind(this, props.id)} > {props.btnName} </button></td>
        </Fragment>
    );
}
export default Book;