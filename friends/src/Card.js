import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: []
        }
    }



    //Updates the state, because the props take a long time to mount
    componentDidUpdate() {
        if(this.state.friends.length < 1){
            this.setState({ friends: this.props.friends })
        }
    }


    render() {
        console.log('state', this.state.friends)
        return(
            <div>
                {/* {setTimeout(() => (
                    console.log(this.state.friends),
                    this.state.friends.map(each => (
                        <div>
                            {each.name}
                        </div>
                    ))
                )), 10000} */}
                
            </div>
        )
    }
}

export default Card