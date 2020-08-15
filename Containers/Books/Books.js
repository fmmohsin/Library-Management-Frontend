import React, { PureComponent} from 'react';
import AddBook from '../../Component/Book/AddBook'
import Book from '../../Component/Book/Book'
import './Books.css'
import axios from 'axios'
import AuthDetails from '../../Context/AuthDetails'

class Books extends PureComponent {
    static contextType = AuthDetails;
    constructor(props) {
        super(props);
        this.state = {
            books: [
            ]
        }
    }
    onSave = (book) => {
        axios.post('http://localhost:1234/book',book).then((res)=>{
            this.setState((state) => ({
                books: [...state.books,
                { ...res.data }]
            }));
        })
    }
    onDelete = (id) => {
        axios.delete('http://localhost:1234/book/'+id).then(res=>{
            let updatedBooks = this.state.books.filter((book) => book._id !== res.data._id)
            this.setState({books: updatedBooks});
        })

    }

componentDidMount(){
axios.get('http://localhost:1234/book/'+this.context.id,{params:{return:this.props.return }}).then((res)=>{
    this.setState({books:res.data})
})
}

onRequest=(id)=>{
    axios.post('http://localhost:1234/transaction/create',{bookid:id,userid:this.context.id,return:this.props.return}).then((res)=>{
        alert("Request Submitted Successfully");
        axios.get('http://localhost:1234/book/'+this.context.id,{params:{return:this.props.return }}).then((res)=>{
    this.setState({books:res.data})
})
})
}

    render() {  
        let updatedBooks=this.state.books;
        const books = updatedBooks.map((book) => {
            return (<tr key={book._id}><Book id={book._id} name={book.bookName} author={book.author} availability={book.availability} onclick={(this.context.isAdmin)?this.onDelete:this.onRequest} btnName={(this.context.isAdmin)?'Delete':'Request'}/></tr>)
        })
        return (
            <div className="books">
                {(this.props.isAdmin)?<AddBook onSave={this.onSave} />:null}
                <table>
                    <thead>
                        <tr>
                            <th>BookName</th>
                            <th>Author</th>
                            <th>Availability</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        );
    }

}
export default Books;