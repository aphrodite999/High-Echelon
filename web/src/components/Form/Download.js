import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
// import downloadFile from "../../images/downloads/6 Major Mistakes When Choosing an EP Attorney.pdf";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  .field {
    ${tw`mb-6`}
  }
  .label {
    ${tw`text-sm font-semibold text-black block mb-1`}
  }
  [type="email"],
  [type="text"] {
    ${tw`w-full bg-transparent text-white px-4 py-3 border border-solid border-gray-100 rounded-sm focus:border-blue-300 focus:ring-blue-300`}
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false, isSubmitted: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    this.setState({ visible: true });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(
        () => form.remove(),
        this.setState({ isSubmitted: true }),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "downloadFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="download-form-ajax-response">
          {this.state.isSubmitted && (
            <ButtonSolid
              // href={downloadFile}
              target="_blank"
              text="Download Guide"
            />
          )}
        </div>
        <form
          name="PDF Lead Magnet"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="PDF Lead Magnet" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              id="name"
              required={true}
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              id="email"
              required={true}
            />
          </div>

          <div className="mt-2">
            <ButtonGhost type="submit" text="Download Guide" />
          </div>
        </form>
      </StyledForm>
    );
  }
}
