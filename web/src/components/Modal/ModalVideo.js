import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmpopUp 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmpopOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = ({ vidRef }) => {
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

  const handlePauseVideo = () => {
    vidRef.current.pause();
  };

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-video"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-80 outline-none"
          tabIndex="-1"
        >
          <div
            className="content-wrapper bg-transparent w-full h-screen overflow-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-end items-center py-4 md:py-6 px-6">
              <i
                className="close fal fa-times text-3xl md:text-4xl text-white hover:text-primary-400 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
                onKeyDown={handlePauseVideo}
                onClick={handlePauseVideo}
              ></i>
            </div>

            <div className="pt-8 px-4 md:px-20">
              <video
                width="100%"
                className="max-w-6xl mx-auto"
                controls
                ref={vidRef}
              >
                <source src="" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
