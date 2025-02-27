"use client";

import Link from "next/link";

const GoogleAnalyticsClub = () => {
  return (
    <>
      <Link href="/">
        <div>홈으로 이동</div>
      </Link>
      <div className="text-2xl font-bold text-center">
        Google Analytics Test - Club
      </div>
      <button
        type="button"
        className="border border-solid border-lime-50"
        onClick={() => alert("예약하기1")}
      >
        Club - 예약하기1
      </button>
      <button
        type="button"
        className="border border-solid border-lime-50"
        onClick={() => alert("예약하기2")}
      >
        Club - 예약하기2
      </button>
    </>
  );
};

export default GoogleAnalyticsClub;
