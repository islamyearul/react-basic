import React, { Component } from 'react';

class Lists extends Component {
    render() {

        const Country = ['Bangladesh', 'Pakistan', 'Turkey', 'Nepal', "Japan"];
        const DataItem = Country.map((data)=>{
            return(
                <li>{data}</li>
            );
        })

        return  <div>
            <ol>
               {DataItem}
            </ol>


        </div>
    }
}

export default Lists;