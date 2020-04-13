import React, { Component } from 'react'
import '../assets/css/Header.css'
import MediaQuery from "react-responsive";

export default class Header extends Component {
    render() {
        const menuArray = ['Mission', 'Credentials', 'Contact']
        return (
            <header className="nav-wrapper">
                <nav role="navigation" className="p-container">
                    <div className="nav-logo">
                        <img
                            className="responsive xsmall"
                            alt="elkind.financial logo"
                            src={require("../assets/images/logo.png")}
                            />
                        <span>
                            Elkind Financial
                        </span>
                    </div>
                    <MediaQuery minWidth={901}>
                        <div className="nav-links">
                            <ul>
                                {  menuArray.map((val, index)=>{
                                        return (
                                            <li key={index}>
                                                <a href={`/#${val}`}>
                                                    {val}
                                                    <span></span>
                                                    <span></span>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={900}>
                        <div className="menu-wrap">
                            <input type="checkbox" className="toggler"/>
                            <div className="hamburger"><div></div></div>
                            <div className="menu">
                                <div>
                                    <div>
                                        <ul>
                                            {  menuArray.map((val, index)=>{
                                                    return (
                                                        <li key={index}>
                                                            <a href={`/#${val}`}>
                                                                {val}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                </nav>
            </header>
        )
    }
}
