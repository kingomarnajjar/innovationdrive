import React, { Component } from 'react';
import { Alert } from 'reactstrap';

// export default class ThankYouAlert extends React.Component {
//     render() {
//       return (
//         <div className="ThankYouAlert">

//         </div>
//       );
//     }
//   }

 export default class ThankYouAlert extends Component {
    constructor(props) {
      super(props);

      this.state = {
        visible: true
      };

      this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
      this.setState({ visible: false });
    }

    render() {
      return (
        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
      );
    }
  }

