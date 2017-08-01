import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ImageItem = ({ image_url }) => (
  <div className="imageItem">
    <img src={image_url} alt="" className="imageItem__image" />
  </div>
);

export default class ImageList extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        image_url: PropTypes.string
      })
    )
  };

  render() {
    return (
      <div className="imageList row">
        {this.props.data.map((image, index) => (
          <div key={index} className="col-md-3">
            <ImageItem {...image} />
          </div>
        ))}
      </div>
    );
  }
}
