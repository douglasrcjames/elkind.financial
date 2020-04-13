import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="center-text">
                    <h1 className="no-padding m-margin-t large-font">Elkind Financial</h1>
                    <h2 className="no-padding no-margin">Insurance &amp; Financial Consulting</h2>
                </div>
               
                <hr/>
                <br/>
                <div className="center m-width">
                    <div className="video-container">
                        <iframe
                            title="Minute.tech Intro Video"
                            className="center-text"
                            src="https://www.youtube.com/embed/ARWU4JOCd_0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen" />
                    </div>
                </div>

                <h2><a id="Mission" className="anchor" href="/#">Mission</a>Mission</h2>
                <ul>
                    <li>Financial Literacy For All</li>
                    <li>Proper Integration of Technology and Finance</li>
                    <li>Insurance Made Easy</li>
                    <ul>
                        <li>Medicare Supplement and Advantage</li>
                        <li>Life Insurance Timeline</li>
                        <li>Auxiliary Insurance and Insurance Basics</li>
                    </ul>
                    <li>Creating Generational Wealth and Passive Income</li>
                </ul>
                <p>
                    I'm not alone in this Mission! I'm lucky to have the Strong Family behind my clients everything they need when it comes to finances.
                </p>
                
                <div className="center-text blue">
                    <a href="http://www.strongfamilyfinancial.com/" rel="noopener noreferrer" target="_blank" className="display-block">
                        <button>Visit Strong Family Financial</button>
                    </a>
                </div>
               
                <br/><br/>

                <h2><a id="Credentials" className="anchor" href="/#">Credentials</a>Credentials</h2>
                <p>
                    <b>Insurance Producer License:</b> Oklahoma, Texas, Missouri, and Kansas.
                </p>
                <p>
                    <b>Contracted Companies:</b> Mutual of Omaha, TransAmerica, Aetna, Cigna, Atlantic Coast Life, Sentinel, United Health (AARP), United National Life, Prosperity Life
                </p>
                <p>
                    <b>National Insurance Producer Number:</b> 19318345
                </p>

                <div className="full-width">
                    <div className="l-container center-text">
                        <h2 className="s-margin-b"><a id="Contact" className="anchor" href="/#">Contact</a>Age 65 or older?</h2>
                        <p>Call for a Free Medicare Consultation! 408-320-2536</p>
                    </div>
                </div>

               
                


            </div>
        )
    }
}
