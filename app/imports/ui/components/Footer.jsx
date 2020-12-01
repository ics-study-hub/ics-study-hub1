import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '10px' };
    return (
        <footer>
          <br/>
          <br/>
          <div style={divStyle} className="ui center aligned container">
            <hr />
            Department of Information and Computer Sciences <br />
            University of Hawaii<br />
            Honolulu, HI 96822 <br />
            <a href="https://ics-study-hub.github.io/">Our Home Page</a>
          </div>
        </footer>
    );
  }
}

export default Footer;
