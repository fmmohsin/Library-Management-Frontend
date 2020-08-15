import React, { Component } from 'react';
import Transaction from '../../Component/Transaction/Transaction'
import axios from 'axios'
class Transactions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [
            ]
        }
    }

componentDidMount(){
    axios.get('http://localhost:1234/transaction').then((res)=>{
    this.setState({transactions:res.data})
})
}
    onApprove=(id)=>{
        axios.put('http://localhost:1234/transaction/approve/'+id).then((res)=>{
            this.setState({transactions:res.data})
        })
    }
    render() {
        const transactions = this.state.transactions.map((transaction) => {
            return (<tr key={transaction._id}><Transaction  id={transaction._id} userName={transaction.UserDetail.name} bookName={transaction.BookDetail.bookName} TransactionType={transaction.TransactionType} onApprove={this.onApprove} /></tr>)
        })

        return (
            <div className="">
                 <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Book Name</th>
                            <th>Transaction Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {transactions}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
                
            </div>
        )
    }

}

export default Transactions;