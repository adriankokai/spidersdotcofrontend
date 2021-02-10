import React, { Component } from "react";
import M from "materialize-css";

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
    instance.open();
    console.log(instance.isOpen);
  }
  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav sidenav-fixed"
          style={{zIndex: '998'}}
        >
          <div style={{paddingTop: '11vh'}} className="container">

            <h5 className="blue-text" >{this.props.heading}</h5>
            {
              Array.isArray(this.props.tutorialPages) ?

              this.props.tutorialPages.map(tutorialPage => (
                <li onClick={() => this.props.changeContent(tutorialPage.content)}>
                  {tutorialPage.heading}
                </li>
              ))

              :

              null
            }
          </div>

        </ul>
      </div>
    );
  }
}

export default Sidenav;