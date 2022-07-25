import React, { Component } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, image },
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " active";
    }

    return (
      <li className={className} onClick={onClick} onKeyDown={onClick}>
        <GatsbyImage image={image} />
      </li>
    );
  }
}
