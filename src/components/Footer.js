import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
        };
    }

    render() {
        return (
            <>
            <br/>
            <hr/>
            <br/>
            <footer>
                <div style={{textAlign: "center", padding: "0 0 25px 0"}}>
                    &copy;
                    {' '}
                    {this.state.year}
                    {' '}
                    Elkind Financial
                </div>
            </footer>
            </>
        )
    }
}
