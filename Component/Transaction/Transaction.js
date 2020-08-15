import React, { Fragment } from 'react';

const Transaction=(props)=>{
    return(
        <Fragment>
            <td>{props.userName}</td>
            <td>{props.bookName}</td>
            <td>{props.TransactionType}</td>
            <td><button onClick={props.onApprove.bind(this,props.id)}>Approve</button></td>
        </Fragment>
    );
}

export default Transaction;