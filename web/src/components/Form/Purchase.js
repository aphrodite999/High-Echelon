import React, { Component } from "react";
import { navigate } from "gatsby";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styled from "@emotion/styled";
import tw from "twin.macro";

import BackButton from "../ModalContent/BackButton";
import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledRange = styled.div`
  ${tw`max-w-[480px] my-18 mx-8 md:mx-18`}
  .input-range__label--value {
    .input-range__label-container {
      ${tw`relative bg-gray-50 text-gray-900 text-xs md:text-sm rounded border border-gray-300 px-2 md:px-3 py-1.5 -top-4 transform-none`}
    }
  }
  .input-range__track {
    ${tw`bg-gray-200`}
  }
  .input-range__label {
    ${tw`transform-none`}
  }
  .input-range__track--active,
  .input-range__slider {
    ${tw`bg-primary-400`}
  }
  .input-range__slider {
    ${tw`border-primary-400 w-6 h-6 focus:shadow-none active:scale-100 -mt-3.5`}
  }
  .input-range__label--min,
  .input-range__label--max {
    ${tw`-bottom-6 md:-bottom-1 md:w-[60px] text-gray-600`}
    .input-range__label-container {
      ${tw`left-0`}
    }
  }
  .input-range__label--min {
    ${tw`left-0 md:-left-18 md:text-right`}
  }
  .input-range__label--max {
    ${tw`right-0 md:-right-18`}
  }
`;

const invisible = "hidden";
const visible = "block lg:mb-20";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      budgetValue: 300000,
      percentValue: 20,
      progressBar: 10,
      step1: visible,
      step2: invisible,
      step3: invisible,
      step4: invisible,
      step5: invisible,
      step6: invisible,
      step7: invisible,
      step8: invisible,
      step9: invisible,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRangeChange = (name, value) => {
    this.setState({ [name]: value });
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
        () => (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "purchaseFormSubmission",
        }),
        navigate("/thank-you/")
      )
      .catch((error) => alert(error));
  };

  step1Next = () => {
    this.setState({ progressBar: 20 });
    this.setState({ step1: invisible });
    this.setState({ step2: visible });
  };

  step2Back = () => {
    this.setState({ progressBar: 10 });
    this.setState({ step2: invisible });
    this.setState({ step1: visible });
  };

  step2Next = () => {
    this.setState({ progressBar: 30 });
    this.setState({ step2: invisible });
    this.setState({ step3: visible });
  };

  step3Back = () => {
    this.setState({ progressBar: 20 });
    this.setState({ step3: invisible });
    this.setState({ step2: visible });
  };

  step3Next = () => {
    this.setState({ progressBar: 40 });
    this.setState({ step3: invisible });
    this.setState({ step4: visible });
  };

  step4Back = () => {
    this.setState({ progressBar: 30 });
    this.setState({ step4: invisible });
    this.setState({ step3: visible });
  };

  step4Next = () => {
    this.setState({ progressBar: 50 });
    this.setState({ step4: invisible });
    this.setState({ step5: visible });
  };

  step5Back = () => {
    this.setState({ progressBar: 40 });
    this.setState({ step5: invisible });
    this.setState({ step4: visible });
  };

  step5Next = () => {
    this.setState({ progressBar: 60 });
    this.setState({ step5: invisible });
    this.setState({ step6: visible });
  };

  step6Back = () => {
    this.setState({ progressBar: 50 });
    this.setState({ step6: invisible });
    this.setState({ step5: visible });
  };

  step6Next = () => {
    this.setState({ progressBar: 70 });
    this.setState({ step6: invisible });
    this.setState({ step7: visible });
  };

  step7Back = () => {
    this.setState({ progressBar: 60 });
    this.setState({ step7: invisible });
    this.setState({ step6: visible });
  };

  step7Next = () => {
    this.setState({ progressBar: 80 });
    this.setState({ step7: invisible });
    this.setState({ step8: visible });
  };

  step8Back = () => {
    this.setState({ progressBar: 70 });
    this.setState({ step8: invisible });
    this.setState({ step7: visible });
  };

  step8Next = () => {
    this.setState({ progressBar: 90 });
    this.setState({ step8: invisible });
    this.setState({ step9: visible });
  };

  step9Back = () => {
    this.setState({ progressBar: 80 });
    this.setState({ step9: invisible });
    this.setState({ step8: visible });
  };

  kFormatter(num) {
    if (Math.abs(num) > 80000 && Math.abs(num) <= 999999) {
      return "$" + Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k";
    } else if (Math.abs(num) > 999999) {
      return "$1M+";
    } else if (Math.abs(num) <= 80000) {
      return "under 80K";
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  }

  percentFormatter(num) {
    if (num >= 50) {
      return num + "% +";
    } else {
      return num + "%";
    }
  }

  render() {
    return (
      <>
        <div className="mb-8 lg:mb-16">
          <div className="relative overflow-hidden bg-gray-200 rounded-[49px] h-2 w-full max-w-[800px] mb-3">
            <div
              className="bg-primary-400 h-2 absolute left-0 z-10 transition-all duration-300 ease-linear"
              style={{ width: this.state.progressBar + "%" }}
            ></div>
          </div>
          <div className="text-gray-600 text-sm">
            {this.state.progressBar}% complete
          </div>
        </div>

        <form
          name="Purchase"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          className="max-w-[800px]"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Purchase" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          {/* Step 1 */}
          <div className={`${this.state.step1}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="is-this-your-first-time-buying-a-home"
              >
                Is this your first time buying a home?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="is-this-your-first-time-buying-a-home"
                    value="Yes"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step1Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Yes
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="is-this-your-first-time-buying-a-home"
                    value="No"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step1Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    No
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* Step 2 */}
          <div className={`${this.state.step2}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="where-in-the-home-buying-process-are-you"
              >
                Where in the home buying process are you?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="where-in-the-home-buying-process-are-you"
                    value="I'm just researching"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step2Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    I'm just researching
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="where-in-the-home-buying-process-are-you"
                    value="I'm going to open houses"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step2Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    I'm going to open houses
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="where-in-the-home-buying-process-are-you"
                    value="I'm making offers"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step2Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    I'm making offers
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="where-in-the-home-buying-process-are-you"
                    value="I have signed a purchase contract"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step2Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    I have signed a purchase contract
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step2Back} />
          </div>

          {/* Step 3 */}
          <div className={`${this.state.step3}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="what-type-of-home-are-you-looking-for"
              >
                What type of home are you looking for?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-home-are-you-looking-for"
                    value="Single Family"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step3Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Single Family
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-home-are-you-looking-for"
                    value="Multi Family"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step3Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Multi Family
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-home-are-you-looking-for"
                    value="Townhouse or Condo"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step3Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Townhouse or Condo
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step3Back} />
          </div>

          {/* Step 4 */}
          <div className={`${this.state.step4}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="how-will-you-use-your-new-home"
              >
                How will you use your new home?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-will-you-use-your-new-home"
                    value="Primary Residence"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step4Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Primary Residence
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-will-you-use-your-new-home"
                    value="Secondary / Vacation Home"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step4Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Secondary / Vacation Home
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-will-you-use-your-new-home"
                    value="Investment"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step4Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Investment
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step4Back} />
          </div>

          {/* Step 5 */}
          <div className={`${this.state.step5}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="have-you-or-your-spouse-served-in-the-us-military"
              >
                Have you or your spouse served in the US military?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="have-you-or-your-spouse-served-in-the-us-military"
                    value="Yes"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Yes
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="have-you-or-your-spouse-served-in-the-us-military"
                    value="No"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    No
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step5Back} />
          </div>

          {/* Step 6 */}
          <div className={`${this.state.step6}`}>
            <label
              className="heading-four mb-8 block"
              htmlFor="whats-your-budget"
            >
              What’s your budget?
            </label>

            <StyledRange>
              <InputRange
                minValue={80000}
                maxValue={1000000}
                formatLabel={(budgetValue) => this.kFormatter(budgetValue)}
                step={10000}
                name="whats-your-budget"
                value={this.state.budgetValue}
                onChange={(budgetValue) => this.setState({ budgetValue })}
              />
            </StyledRange>

            <ButtonSolid
              onClick={() => {
                this.handleRangeChange(
                  "whats-your-budget",
                  this.kFormatter(this.state.budgetValue)
                );
                this.step6Next();
              }}
              type="button"
              text="Next"
            />

            <BackButton onClick={this.step6Back} />
          </div>

          {/* Step 7 */}
          <div className={`${this.state.step7}`}>
            <label
              className="heading-four mb-8 block"
              htmlFor="whats-your-estimated-down-payment"
            >
              What’s your estimated down payment?
            </label>

            <StyledRange>
              <InputRange
                minValue={0}
                maxValue={50}
                formatLabel={(percentValue) =>
                  this.percentFormatter(percentValue)
                }
                step={1}
                name="whats-your-estimated-down-payment"
                value={this.state.percentValue}
                onChange={(percentValue) => this.setState({ percentValue })}
              />
            </StyledRange>

            <ButtonSolid
              onClick={() => {
                this.handleRangeChange(
                  "whats-your-estimated-down-payment",
                  this.percentFormatter(this.state.percentValue)
                );
                this.step7Next();
              }}
              type="button"
              text="Next"
            />

            <BackButton onClick={this.step7Back} />
          </div>

          {/* Step 8 */}
          <div className={`${this.state.step8}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="whats-your-estimated-credit-score"
              >
                What’s your estimated credit score?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="whats-your-estimated-credit-score"
                    value="Excellent: 720+"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step8Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Excellent: 720+
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="whats-your-estimated-credit-score"
                    value="Good: 680-719"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step8Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Good: 680-719
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="whats-your-estimated-credit-score"
                    value="Fair: 640-679"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step8Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Fair: 640-679
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="whats-your-estimated-credit-score"
                    value="Poor: 580-639"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step8Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Poor: 580-639
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step8Back} />
          </div>

          {/* Step 9 */}
          <div className={`${this.state.step9}`}>
            <p className="heading-four mb-8">Let Us Know How To Reach You</p>
            <p className="text-sm text-gray-`600">
              One of our experienced loan officers will reach out to talk about
              the next steps.
            </p>

            <div className="grid md:grid-cols-2 gap-y-7 md:gap-x-6 w-full mb-8">
              <div>
                <label
                  className="font-body text-sm font-semibold text-gray-900 block mb-1"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  onChange={this.handleChange}
                  required={true}
                  className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-400 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                />
              </div>

              <div>
                <label
                  className="font-body text-sm font-semibold text-gray-900 block mb-1"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  onChange={this.handleChange}
                  required={true}
                  className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-400 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                />
              </div>

              <div>
                <label
                  className="font-body text-sm font-semibold text-gray-900 block mb-1"
                  htmlFor="phone-number"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  onChange={this.handleChange}
                  required={true}
                  className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-400 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                />
              </div>

              <div>
                <label
                  className="font-body text-sm font-semibold text-gray-900 block mb-1"
                  htmlFor="email-address"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email-address"
                  onChange={this.handleChange}
                  required={true}
                  className="text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-400 focus:ring-opacity-30 transition-colors duration-300 ease-linear"
                />
              </div>
            </div>

            <ButtonSolid type="submit" text="Submit" />

            <BackButton onClick={this.step9Back} />
          </div>
        </form>
      </>
    );
  }
}
