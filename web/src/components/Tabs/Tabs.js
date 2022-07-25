import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Tab from "./Tab";

const StyledTabs = styled.ul`
  .tab-list {
    ${tw`gap-y-4 gap-x-2 flex flex-wrap justify-between max-w-lg mx-auto mb-10 md:mb-8`}
  }
  .tab-list-item {
    ${tw`opacity-30 cursor-pointer transition-all duration-300 ease-linear`}
    &.active {
      ${tw` opacity-100`}
    }
  }
`;
export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <StyledTabs className="tabs">
        <ul className="tab-list">
          {children.map((child) => {
            const { label, image } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                image={image}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </StyledTabs>
    );
  }
}
