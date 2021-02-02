import React, { Component } from 'react';
import Table from './Table/Table';
import Form from './Form/Form';

 class BookList extends Component {
   state = {
     bookList: []
    //  list:[]
     
   }
   addRow = values => {
     this.setState(prevState =>{
       let bookArray = [...prevState.bookList,values];
       return {
         bookList:bookArray
       }
     })
   }
   render(){

   return(
   <div className = {'container'}>
    
     <Form getValues = {values => this.addRow(values)}/>
     <Table bookList = {this.state.bookList} />
   </div>
   )
   }
 }
export default BookList
