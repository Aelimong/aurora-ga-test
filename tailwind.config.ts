import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 커스텀 색상 팔레트
        primary: {
          50: "#E6F1FF",
          100: "#CCE3FF",
          200: "#99C7FF",
          300: "#66AAFF",
          400: "#338EFF",
          500: "#1E4E4E", // 기본 primary 색상
          600: "#005BD4",
          700: "#004AB3",
          800: "#003292",
          900: "#1E4E4E",
        },
        // 추가 색상 팔레트 예시
        secondary: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          500: "#0EA5E9",
          // 다른 음영들...
        },
        black: {
          500: "2D2D2D",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      // 그림자 커스터마이징
      boxShadow: {
        "custom-light":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "custom-dark":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
      // 기타 테마 확장
      borderRadius: {
        custom: "12px", // 전역 라운드 corners
      },
      fontSize: {
        base: [
          "16px",
          {
            // 기본 텍스트 크기
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        small: "1.4rem",
        medium: "1.6rem",
        large: "1.8rem",
        lg: [
          "18px",
          {
            // 추가적인 큰 텍스트 크기
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        // 다른 크기들을 필요에 따라 추가
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
