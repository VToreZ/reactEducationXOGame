import React, {Component} from 'react'

class Arcicle extends Component {
    // const {article} = props
    state = {
        isOpen: true
    }

    render() {
        return (
        <div className="hello" style={{color: 'black'}}>
            <h2>
                {this.props.title}
                <button onClick={this.handleClick}>{this.state.isOpen ? "close" : "open"}</button> 
            </h2>
            {this.state.isOpen && this.props.body}
            <section style={{color: "silver"}}>  
                creation date: {(new Date()).toDateString()}
                random value: {Math.random()}
            </section>
        </div>
    )}
    handleClick = () => {
        console.log("------button clicked");
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



export default Arcicle