import React from 'react';
import {ButtonText} from "./ButtonText";
import fox from "./images/fox.jpg";
import mcfly from "./images/mcfly.jpg";
import pinkfrank from "./images/pinkfrank.jpg";
import pizza from "./images/pizza.jpg";

const imgArray = [
    fox, mcfly, pinkfrank,pizza
];

export class BTContainer extends React.Component {
constructor(props) {
    super(props);
    this.state={src: fox};
    this.handleChange =this.handleChange.bind(this);

}

handleChange(e, index){
    this.setState({src: imgArray[index]});
}



render (){
   return (
       <div>
           {imgArray.map((img, index) => <ButtonText action={this.handleChange} index={index}/>)}
           <img src={this.state.src}/>
       </div>
   );
}


}