import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Finddomnode extends Component {
    ChangeImage(){
        var img = document.getElementById('img');
        ReactDOM.findDOMNode(img).src="https://static.remove.bg/remove-bg-web/bf16d3e558914c4f5e6b6bc5163ed745ee2977db/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png";

    }
    render() {
        return (
            <div>
                 <button onClick={this.ChangeImage}>Change image</button> <br></br>
                <img id='img' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=''></img>
            </div>
        );
    }
}

export default Finddomnode;