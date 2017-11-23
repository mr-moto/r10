import React, { Component } from "react";
import Session from "./Session";
import { connect } from "react-redux";

class SessionContainer extends Component {
    static route = {
        navigationBar: {
            title: "Session"
        }
    };
    render() {
        console.log(this.props);
        const { sessionData } = this.props;
        return (
            <Session
                sessionData={sessionData}
                // pass single speaker data
            />
        );
    }
}

// const mapStateToProps = (state) => {
//   return {
//     single speaker data
//   }
// }

// export default connect(mapStateToProps)(SessionContainer);
export default SessionContainer;
