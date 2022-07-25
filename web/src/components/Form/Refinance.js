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
      propertyValue: 300000,
      balanceValue: 200000,
      interestRateValue: 4,
      incomeValue: 50000,
      debtValue: 1000,
      progressBar: 6,
      step1: visible,
      step2: invisible,
      step3: invisible,
      step4: invisible,
      step5: invisible,
      step6: invisible,
      step7: invisible,
      step8: invisible,
      step9: invisible,
      step10: invisible,
      step11: invisible,
      step12: invisible,
      step13: invisible,
      step14: invisible,
      step15: invisible,
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
          event: "refinanceFormSubmission",
        }),
        navigate("/thank-you/")
      )
      .catch((error) => alert(error));
  };

  step1Next = () => {
    this.setState({ progressBar: 12 });
    this.setState({ step1: invisible });
    this.setState({ step2: visible });
  };

  step2Back = () => {
    this.setState({ progressBar: 6 });
    this.setState({ step2: invisible });
    this.setState({ step1: visible });
  };

  step2Next = () => {
    this.setState({ progressBar: 18 });
    this.setState({ step2: invisible });
    this.setState({ step3: visible });
  };

  step3Back = () => {
    this.setState({ progressBar: 12 });
    this.setState({ step3: invisible });
    this.setState({ step2: visible });
  };

  step3Next = () => {
    this.setState({ progressBar: 24 });
    this.setState({ step3: invisible });
    this.setState({ step4: visible });
  };

  step4Back = () => {
    this.setState({ progressBar: 18 });
    this.setState({ step4: invisible });
    this.setState({ step3: visible });
  };

  step4Next = () => {
    this.setState({ progressBar: 30 });
    this.setState({ step4: invisible });
    this.setState({ step5: visible });
  };

  step5Back = () => {
    this.setState({ progressBar: 24 });
    this.setState({ step5: invisible });
    this.setState({ step4: visible });
  };

  step5Next = () => {
    this.setState({ progressBar: 36 });
    this.setState({ step5: invisible });
    this.setState({ step6: visible });
  };

  step6Back = () => {
    this.setState({ progressBar: 30 });
    this.setState({ step6: invisible });
    this.setState({ step5: visible });
  };

  step6Next = () => {
    this.setState({ progressBar: 42 });
    this.setState({ step6: invisible });
    this.setState({ step7: visible });
  };

  step7Back = () => {
    this.setState({ progressBar: 36 });
    this.setState({ step7: invisible });
    this.setState({ step6: visible });
  };

  step7Next = () => {
    this.setState({ progressBar: 48 });
    this.setState({ step7: invisible });
    this.setState({ step8: visible });
  };

  step8Back = () => {
    this.setState({ progressBar: 42 });
    this.setState({ step8: invisible });
    this.setState({ step7: visible });
  };

  step8Next = () => {
    this.setState({ progressBar: 54 });
    this.setState({ step8: invisible });
    this.setState({ step9: visible });
  };

  step9Back = () => {
    this.setState({ progressBar: 48 });
    this.setState({ step9: invisible });
    this.setState({ step8: visible });
  };

  step9Next = () => {
    this.setState({ progressBar: 60 });
    this.setState({ step9: invisible });
    this.setState({ step10: visible });
  };

  step10Back = () => {
    this.setState({ progressBar: 54 });
    this.setState({ step10: invisible });
    this.setState({ step9: visible });
  };

  step10Next = () => {
    this.setState({ progressBar: 66 });
    this.setState({ step10: invisible });
    this.setState({ step11: visible });
  };

  step11Back = () => {
    this.setState({ progressBar: 60 });
    this.setState({ step11: invisible });
    this.setState({ step10: visible });
  };

  step11Next = () => {
    this.setState({ progressBar: 72 });
    this.setState({ step11: invisible });
    this.setState({ step12: visible });
  };

  step12Back = () => {
    this.setState({ progressBar: 66 });
    this.setState({ step12: invisible });
    this.setState({ step11: visible });
  };

  step12Next = () => {
    this.setState({ progressBar: 78 });
    this.setState({ step12: invisible });
    this.setState({ step13: visible });
  };

  step13Back = () => {
    this.setState({ progressBar: 72 });
    this.setState({ step13: invisible });
    this.setState({ step12: visible });
  };

  step13Next = () => {
    this.setState({ progressBar: 84 });
    this.setState({ step13: invisible });
    this.setState({ step14: visible });
  };

  step14Back = () => {
    this.setState({ progressBar: 78 });
    this.setState({ step14: invisible });
    this.setState({ step13: visible });
  };

  step14Next = () => {
    this.setState({ progressBar: 90 });
    this.setState({ step14: invisible });
    this.setState({ step15: visible });
  };

  step15Back = () => {
    this.setState({ progressBar: 84 });
    this.setState({ step15: invisible });
    this.setState({ step14: visible });
  };

  propertyValueFormatter(num) {
    if (Math.abs(num) > 80000 && Math.abs(num) <= 999999) {
      return "$" + Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K";
    } else if (Math.abs(num) > 999999) {
      return "$1M+";
    } else if (Math.abs(num) <= 80000) {
      return "under 80K";
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  }

  mortgageBalanceFormatter(num) {
    if (Math.abs(num) > 80000 && Math.abs(num) <= 999999) {
      return "$" + Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K";
    } else if (Math.abs(num) > 999999) {
      return "$1M+";
    } else if (Math.abs(num) <= 80000) {
      return "under 80K";
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  }

  incomeFormatter(num) {
    if (num > 30000 && num < 150000) {
      return "$" + Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K";
    } else if (num >= 150000) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K+";
    } else if (num <= 30000) {
      return (
        "under " + Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
      );
    } else {
      return Math.sign(num) * Math.abs(num);
    }
  }

  interestRateFormatter(num) {
    if (num >= 10) {
      return num + "%+";
    } else if (num <= 2) {
      return "under " + num + "%";
    } else {
      return num.toFixed(1) + "%";
    }
  }

  debtFormatter(num) {
    if (num > 999 && num < 5000) {
      return "$" + num.toLocaleString("en");
    } else if (num >= 5000) {
      return "$" + num.toLocaleString("en") + "+";
    } else {
      return "$" + num;
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
          name="Refinance"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          className="max-w-[800px]"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Refinance" />
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
                htmlFor="what-type-of-property-are-you-interested-in-refinancing"
              >
                What type of property are you interested in refinancing?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-property-are-you-interested-in-refinancing"
                    value="Single Family"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step1Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Single Family
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-property-are-you-interested-in-refinancing"
                    value="Multi Family"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step1Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Multi Family
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-property-are-you-interested-in-refinancing"
                    value="Condominium"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step1Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Condominium
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-property-are-you-interested-in-refinancing"
                    value="Townhouse"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step1Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Townhouse
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-type-of-property-are-you-interested-in-refinancing"
                    value="Manufactured Home"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step1Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Manufactured Home
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
                htmlFor="how-do-you-use-the-property"
              >
                How do you use the property?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-do-you-use-the-property"
                    value="Primary Residence"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step2Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Primary Residence
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-do-you-use-the-property"
                    value="Vacation Home"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step2Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Vacation Home
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-do-you-use-the-property"
                    value="Investment"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step2Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Investment
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
                htmlFor="how-is-your-credit"
              >
                How is your credit?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-is-your-credit"
                    value="Excellent: 720+"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step3Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Excellent: 720+
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-is-your-credit"
                    value="Good: 680-719"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step3Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Good: 680-719
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-is-your-credit"
                    value="Fair: 640-679"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step3Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Fair: 640-679
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="how-is-your-credit"
                    value="Poor: 580-639"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step3Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Poor: 580-639
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
                htmlFor="have-you-or-your-spouse-served-in-the-us-military"
              >
                Have your or your spouse served in the military?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="have-you-or-your-spouse-served-in-the-us-military"
                    value="Yes"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step4Next}
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
                    onClick={this.step4Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    No
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
                htmlFor="why-are-you-refinancing"
              >
                Why are you refinancing?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="why-are-you-refinancing"
                    value="Lower Interest Rate"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Lower Interest Rate
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="why-are-you-refinancing"
                    value="Lower Monthly Payment"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Lower Monthly Payment
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="why-are-you-refinancing"
                    value="Debt Consolidation"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Debt Consolidation
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="why-are-you-refinancing"
                    value="Change Rate / Term"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Change Rate / Term
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="why-are-you-refinancing"
                    value="Home Improvement"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Home Improvement
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="why-are-you-refinancing"
                    value="Cash Out"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step5Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Cash Out
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
              htmlFor="whats-your-estimated-property-value"
            >
              What’s your estimated property value?
            </label>

            <StyledRange>
              <InputRange
                minValue={80000}
                maxValue={1000000}
                formatLabel={(propertyValue) =>
                  this.propertyValueFormatter(propertyValue)
                }
                step={10000}
                name="whats-your-estimated-property-value"
                value={this.state.propertyValue}
                onChange={(propertyValue) => this.setState({ propertyValue })}
              />
            </StyledRange>

            <ButtonSolid
              onClick={() => {
                this.handleRangeChange(
                  "whats-your-estimated-property-value",
                  this.propertyValueFormatter(this.state.propertyValue)
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
              htmlFor="whats-your-mortgage-balance"
            >
              What’s your mortgage balance?
            </label>

            <StyledRange>
              <InputRange
                minValue={80000}
                maxValue={1000000}
                formatLabel={(balanceValue) =>
                  this.mortgageBalanceFormatter(balanceValue)
                }
                step={10000}
                name="whats-your-mortgage-balance"
                value={this.state.balanceValue}
                onChange={(balanceValue) => this.setState({ balanceValue })}
              />
            </StyledRange>

            <ButtonSolid
              onClick={() => {
                this.handleRangeChange(
                  "whats-your-mortgage-balance",
                  this.mortgageBalanceFormatter(this.state.balanceValue)
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
            <label
              className="heading-four mb-8 block"
              htmlFor="whats-your-current-interest-rate-on-your-mortgage"
            >
              What’s your current interest rate on your mortgage?
            </label>

            <StyledRange>
              <InputRange
                minValue={2}
                maxValue={10}
                formatLabel={(interestRateValue) =>
                  this.interestRateFormatter(interestRateValue)
                }
                step={0.1}
                name="whats-your-current-interest-rate-on-your-mortgage"
                value={this.state.interestRateValue}
                onChange={(interestRateValue) =>
                  this.setState({ interestRateValue })
                }
              />
            </StyledRange>

            <ButtonSolid
              onClick={() => {
                this.handleRangeChange(
                  "whats-your-current-interest-rate-on-your-mortgage",
                  this.interestRateFormatter(this.state.interestRateValue)
                );
                this.step8Next();
              }}
              type="button"
              text="Next"
            />

            <BackButton onClick={this.step8Back} />
          </div>

          {/* Step 9 */}
          <div className={`${this.state.step9}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="do-you-have-a-second-mortgage"
              >
                Do you have a second mortgage?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-have-a-second-mortgage"
                    value="Yes"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step9Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Yes
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-have-a-second-mortgage"
                    value="No"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step9Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    No
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step9Back} />
          </div>

          {/* Step 10 */}
          <div className={`${this.state.step10}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="do-you-have-any-of-the-following-in-your-mortgage-history"
              >
                Do you have any of the following in your mortgage history?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-have-any-of-the-following-in-your-mortgage-history"
                    value="Late mortgage payments"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step10Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Late mortgage payments
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-have-any-of-the-following-in-your-mortgage-history"
                    value="Foreclosures"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step10Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Foreclosures
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-have-any-of-the-following-in-your-mortgage-history"
                    value="Bankruptcy in the last 7 years"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step10Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Bankruptcy in the last 7 years
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-have-any-of-the-following-in-your-mortgage-history"
                    value="I don't have any blemishes in my mortgage history"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step10Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    I don't have any blemishes in my mortgage history
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step10Back} />
          </div>

          {/* Step 11 */}
          <div className={`${this.state.step11}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="do-you-currently-have-an-fha-loan"
              >
                Do you currently have an FHA Loan?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-currently-have-an-fha-loan"
                    value="Yes"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step11Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Yes
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="do-you-currently-have-an-fha-loan"
                    value="No"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step11Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    No
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step11Back} />
          </div>

          {/* Step 12 */}
          <div className={`${this.state.step12}`}>
            <label
              className="heading-four mb-8 block"
              htmlFor="what-is-your-annual-household-income"
            >
              What is your annual household income?
            </label>

            <StyledRange>
              <InputRange
                minValue={30000}
                maxValue={150000}
                formatLabel={(incomeValue) => this.incomeFormatter(incomeValue)}
                step={5000}
                name="what-is-your-annual-household-income"
                value={this.state.incomeValue}
                onChange={(incomeValue) => this.setState({ incomeValue })}
              />
            </StyledRange>

            <ButtonSolid
              onClick={() => {
                this.handleRangeChange(
                  "what-is-your-annual-household-income",
                  this.incomeFormatter(this.state.incomeValue)
                );
                this.step12Next();
              }}
              type="button"
              text="Next"
            />

            <BackButton onClick={this.step12Back} />
          </div>

          {/* Step 13 */}
          <div className={`${this.state.step13}`}>
            <fieldset>
              <legend
                className="heading-four mb-8"
                htmlFor="what-is-your-employment-status"
              >
                What is your employment status?
              </legend>

              <div className="inline-flex flex-col space-y-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-is-your-employment-status"
                    value="Employed"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step13Next}
                    required={true}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Employed
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-is-your-employment-status"
                    value="Self Employed"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step13Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Self Employed
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-is-your-employment-status"
                    value="Retired"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step13Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Retired
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="what-is-your-employment-status"
                    value="Unemployed"
                    className="absolute opacity-0"
                    onChange={this.handleChange}
                    onClick={this.step13Next}
                  />
                  <span className="text-base md:text-xl text-gray-400 hover:text-primary-400 font-bold">
                    Unemployed
                  </span>
                </label>
              </div>
            </fieldset>

            <BackButton onClick={this.step13Back} />
          </div>

          {/* Step 14 */}
          <div className={`${this.state.step14}`}>
            <label
              className="heading-four mb-8 block"
              htmlFor="what-are-your-monthly-debt-payments"
            >
              What are your monthly debt payments?
            </label>

            <StyledRange>
              <InputRange
                minValue={0}
                maxValue={5000}
                formatLabel={(debtValue) => this.debtFormatter(debtValue)}
                step={100}
                name="what-are-your-monthly-debt-payments"
                value={this.state.debtValue}
                onChange={(debtValue) => this.setState({ debtValue })}
              />
            </StyledRange>

            <ButtonSolid
              onClick={() => {
                this.handleRangeChange(
                  "what-are-your-monthly-debt-payments",
                  this.debtFormatter(this.state.debtValue)
                );
                this.step14Next();
              }}
              type="button"
              text="Next"
            />

            <BackButton onClick={this.step14Back} />
          </div>

          {/* Step 15 */}
          <div className={`${this.state.step15}`}>
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

            <BackButton onClick={this.step15Back} />
          </div>
        </form>
      </>
    );
  }
}
