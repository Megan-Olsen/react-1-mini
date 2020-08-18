import React, {Component} from 'react'

class Directory extends Component {
    constructor(){
        super()
    }

    render(){
        return(<div>
            <h1>A list of my friends</h1>
            <form>
                <input placeholder="Name"/>
                <input  placeholder="image"/>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default Directory