import React, { Component } from 'react';
import Row from '../Table/Row';

 class Table extends Component {
    render() {
        const {bookList} = this.props;
        const createList = bookList.map((item,index) =>{
            return <Row key = {index} title={item.title} author={item.author} isbn={item.isbn} />
        });
        
        return (
            <table class="u-full-width">

            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                </tr>
            </thead>
            <tbody id="book-list">{createList}</tbody>

        </table>
        )
    }
}

export default Table
