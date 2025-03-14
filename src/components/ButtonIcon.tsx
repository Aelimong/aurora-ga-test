"use client";

import { navigateToLink } from "@/lib/navigateToLink";

const ButtonIcon = () => {
  return (
    <button
      className="bg-[url('/images/icon_calendar_white.svg')] bg-no-repeat bg-contain bg-center size-10"
      onClick={() => navigateToLink("/")}
    ></button>
  );
};

export default ButtonIcon;
