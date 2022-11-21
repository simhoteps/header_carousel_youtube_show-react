import React from "react";

export const IconHamburgerMenu = () => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 16H24V13.3331H0V16ZM0 9.33312H24V6.66687H0V9.33312ZM0 0V2.66687H24V0H0Z"
        fill="#400E03"
      />
    </svg>
  );
};

export const IconClose = ({
  className,
}: {
  className?: string | undefined;
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2.09313L15.9069 0L9 6.90687L2.09313 0L0 2.09313L6.90687 9L0 15.9069L2.09313 18L9 11.0931L15.9069 18L18 15.9069L11.0931 9L18 2.09313Z"
        fill="#400E03"
      />
    </svg>
  );
};

export const IconIonChevronForwardSharp = () => {
  return (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.625 2.25L8.375 9L1.625 15.75"
        stroke="white"
        stroke-width="2.25"
        stroke-miterlimit="10"
        stroke-linecap="square"
      />
    </svg>
  );
};

export const IconPrevious = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.625 10.5L1.125 6L5.625 1.5M1.75 6H10.875"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="square"
      />
    </svg>
  );
};

export const IconNext = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.375 10.5L10.875 6L6.375 1.5M10.25 6H1.125"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="square"
      />
    </svg>
  );
};
