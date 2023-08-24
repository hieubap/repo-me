import React, { Component } from "react";
import QRCode from "react-qr-code";
import { QrReader } from "react-qr-reader";
import readXlsxFile from "read-excel-file";

class Camera extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ value: "123" });
    // }, 3000);
  }
  handleScan = (data) => {
    if (data) {
      this.setState({ data });
    }
  };
  handleError = (err) => {
    this.setState({ err });
  };
  render() {
    return (
      <div>
        <div style={{ color: "red" }}>
          {JSON.stringify(this.state) || "NOT"}
        </div>
        <input
          id="1234"
          type="file"
          onChange={(e) => {
            readXlsxFile(e.target.files[0]).then((rows) => {
              console.log(rows, "rows");
            });
          }}
        />
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "30%", width: "50%" }}
          value={"value"}
          viewBox={`0 0 256 256`}
        />
        {/* <QrReader
          delay={500}
          onError={this.handleError}
          onResult={(data) => {
            if (data) {
              this.props.onScan && this.props.onScan(data);
              this.setState({ dataScan: data?.getText() });
            }
          }}
          style={{ width: "100%" }}
          constraints={{
            facingMode: "environment",
          }}
        /> */}
      </div>
    );
  }
}
export default Camera;
