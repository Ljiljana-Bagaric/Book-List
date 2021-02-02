import React, { Component } from 'react';



class Row extends Component {
    // state = {
    //     list:[]
    // }
    // delItem = (id) => {
    // this.setState({
    //     list:[...this.state.list.filter(lists =>lists.id !== id)]
    // });
    // }
    // delBook=(list) =>{
    // if (list.className= 'delete') {
    //     list.parentElement.parentElement.remove();
    // }    
    // }
    render(){
        return (
            
               <tr>
                   <td> {this.props.title} </td>
                   <td>{this.props.author}</td>
                   <td>{this.props.isbn}</td>
                   <td><a href = "/" class="delete">X</a></td>

                   
                   
                   </tr> 
           
        )
    }
}

export default Row
