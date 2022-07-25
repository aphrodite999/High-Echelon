import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  select,
  textarea {
    ${tw`text-sm w-full bg-transparent px-4 py-2.5 border border-solid border-gray-300 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-800 focus:ring-opacity-30 transition-colors duration-300 ease-linear`}
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.value[0] });
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
          (document.getElementById("contact-form-ajax-response").innerHTML =
            "Thank you for contacting us! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "contactFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="contact-form-ajax-response"></div>
        <form
          name="Contact"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="mb-5">
            <label
              className="font-body text-sm font-semibold text-gray-900 block mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="mb-5">
              <label
                className="font-body text-sm font-semibold text-gray-900 block mb-1"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange}
                required={true}
              />
            </div>
            <div className="mb-5">
              <label
                className="font-body text-sm font-semibold text-gray-900 block mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              className="font-body text-sm font-semibold text-gray-900 block mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="textarea"
              name="message"
              onChange={this.handleChange}
              rows="4"
              required={false}
            />
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-semibold text-gray-900 block mb-1"
              htmlFor="resume"
            >
              Attach Your Resume
            </label>
            <input
              type="file"
              name="resume"
              onChange={this.handleAttachment}
              required={false}
            />
          </div>

          <ButtonSolid type="submit" text="Send Message" />
        </form>
      </StyledForm>
    );
  }
}
