import React, {
    Component
} from 'react';



class Error extends Component {

    render() {
        const { error
        } = this.props;
        return (
            error != null && (
                <div className= {error.type}>            
                {error.msg}
                </div>
                
                )

        )
    }
}

export default Error