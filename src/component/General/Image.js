import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

/**
 * @param source -> relative path or import from react
 * @param src - absolute path (object) header for authorization(included / optional)
 * @param style - style for the image
 */
class Image extends React.Component {
  state = {
    src: this.props.source || ""
  };

  componentDidMount() {
    this.mounted = true;
    if (this.props.src && this.props.src.url) {
      axios({
        method: "GET",
        url: this.props.src.url,
        headers: this.props.src.header,
        responseType: "arraybuffer"
      })
        .then(res => Buffer.from(res.data, "binary").toString("base64"))
        .then(res =>
          this.mounted
            ? this.setState({ src: `data:image;base64,${res}` })
            : null
        )
        .catch(err => {
          console.log(err);
        });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return <img src={this.state.src} />;
  }
}

Image.propTypes = {
  src: PropTypes.object,
  style: PropTypes.object,
  source: PropTypes.string
};

export default Image;
