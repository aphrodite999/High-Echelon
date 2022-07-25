import React, { Component } from "react";
import styled from "@emotion/styled";
// import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div``;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(
        () =>
          (document.getElementById("newsletter-form-ajax-response").innerHTML =
            "Thank you for subscribing!"),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "newsletterFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div className="text-white font-bold mb-4">
          {this.props.text || "Subscribe to Our Newsletter"}
        </div>
        <div id="newsletter-form-ajax-response" className="text-white"></div>
        <form
          name="Newsletter"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          className="flex items-center"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Newsletter" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onBlur={this.handleChange} />
            </label>
          </div>

          <div className="w-full">
            <label className="hidden" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Enter your email address"
              required={true}
              className="w-full p-2.5 h-[50px] rounded-l"
            />
          </div>
          <ButtonSolid
            type="submit"
            className="rounded-l-none rounded-r w-[50px] min-w-0 h-[50px] before:rounded-l-none before:rounded-r"
            text="Submit"
          />
        </form>
      </StyledForm>
    );
  }
}
