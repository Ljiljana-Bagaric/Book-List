import React, {Component} from 'react';
import Error from '../Error/Error';

class Form extends Component {
state= {
    error:null
}

setError = (type,msg) => {
    this.setState({
        error : {
            type,
            msg
        }
    })
    setTimeout(() =>{
        this.setState({
            error:null
        })
    },3000)
}
    addBook = e => {
        e.preventDefault();
        let values = {
            title: e.target.title.value,
            author: e.target.author.value,
            isbn: e.target.isbn.value
        }
       

        if (!values.title ||!values.author || !values.isbn) {
            this.setError('error','Please fill in all fields!');

        } else {
            this.setError('validate','The Book is Added To The List!');
            this.props.getValues(values);
            e.target.reset();
        }

    }



    render() {
        return (
        <>
      <Error error = {this.state.error}/>
            <h1 > Add Book </h1> 
            <form onSubmit = {this.addBook}>
            <div class = "shade" > </div> 
            <div >
            <label htmlFor = "title"> Title </label>  
            <input type = "text"
            id = "title"
            class = "u-full-width"
            placeholder = "Please, Enter Book Title" />
            </div> 
             <div >
            <label htmlFor = "author"> Author </label>  
            <input type = "text"
            id = "author"
            class = "u-full-width"
            placeholder = "Please, Enter Author"/>
            </div> 
            <div >
            <label htmlFor = "isbn" > ISBN# </label> <input type = "text"
            id = "isbn"
            class = "u-full-width"
            placeholder = "Please, Enter ISBN"/>
            </div>
            <div>
            <input type = "submit"
            value = "Submit"
            class = "u-full-width"
            id = "btn"/>

            </div> 
             </form> 
             </>
        )
    }
}

export default Form