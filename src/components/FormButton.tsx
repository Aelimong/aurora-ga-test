"use client";

import { Button } from "@nextui-org/react";

interface ButtonProps {
  text: string;
}

export default function FormButton({ text }: ButtonProps) {
  return (
    <>
      <Button
        type="submit"
        size="lg"
        disabled={false}
        className="w-full bg-primary-500 text-white disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
      >
        {false ? "로딩 중" : text}
      </Button>
    </>
    //   <button
    //   disabled={pending}
    //   className="primary-btn h-10 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    // >
    //   {pending ? "로딩 중" : text}
    // </button>
  );
}
