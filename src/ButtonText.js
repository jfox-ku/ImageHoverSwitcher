import React from 'react';

export class ButtonText extends React.Component {
    constructor(props){
        super(props);
        this.state={index: this.props.index};
    }



    render(){
        return <div>
        <h1 onMouseOver={(e) => this.props.action(e, this.state.index)}>placeholder</h1>



    </div>;
}


}