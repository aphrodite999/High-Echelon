import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";

import Apply from "../Form/Apply";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = () => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-apply"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-white w-full h-screen overflow-auto max-w-[720px] ml-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="group flex justify-end items-center pt-12 pb-4 md:py-4 px-5">
              <i
                className="close fal fa-times text-xl text-gray-900 hover:text-primary-800 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-7 px-6 md:px-20 pb-24">
              <div>
                <header className="mb-8 md:mb-10">
                  <p className="font-body text-4xl text-gray-900 font-bold mb-3">
                    Apply Today
                  </p>
                  <p>Your future starts here.</p>
                </header>

                <Apply />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
