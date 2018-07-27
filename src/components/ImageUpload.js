// Image upload and download for display example component

import React, { Component } from "react";
import { Storage } from "aws-amplify";
import { S3Image } from "aws-amplify-react";
import Dropzone from "react-dropzone";

Storage.configure({ track: true });

// export default class S3ImageUpload extends React.Component {
//   onChange(e) {
//       const file = e.target.files[0];
//       Storage.put('example.png', file, {
//           contentType: 'image/png'
//       })
//       .then (result => console.log(result))
//       .catch(err => console.log(err));
//   }

//   render() {
//       return (
//           <input
//               type="file" accept='image/png'
//               onChange={(e) => this.onChange(e)}
//           />
//       )
//   }
// }

class ImageViewer extends Component {
  handleUpload(event) {
    const file = event.target.files[0];
    const path = file.name;
    console.log(file);
    Storage.put(path, file)
    .then(() => this.setState({ path }))
    .then(path => console.log(this))
    .catch(err => alert(err));
  }
  onUploadProgress(event) {
    progressEvent => {
      console.log(
        "Upload Progress: " + (progressEvent.loaded / progressEvent.total) * 100
      );
    };
  }
  // uploadFile(event) {
  //     const file = event.target.files[0];
  //     const name = file.name;

  //     Storage.put(ket, file).then(() => {
  //       this.setState({ file: name });
  //     });
  //   }

  render() {
    return (
      <div>
        <p>Pick a file</p>
        <Dropzone onChange={this.handleUpload.bind(this)} />

        {this.state && <S3Image path={this.state.path} /> }
        {/* {this.state && console.log(this) } */}

        {/* X = uploadtos3()

        Itemfile ={“file” : x}

        Dynamodb.put_item(Item= Itemfile) */}
      </div>
    );
  }
}

export default ImageViewer;
