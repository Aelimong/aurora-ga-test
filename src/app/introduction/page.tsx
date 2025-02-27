import GoogleAnalyticsIntroduction from "@/components/GoogleAnalyticsIntroduction";

export const generateMetadata = () => {
  return {
    title: "Introduction",
    description: "Introduction",
  };
};

export default function Introduction() {
  return (
    <div className="flex flex-col gap-6 h-screen px-16 py-12 ">
      <GoogleAnalyticsIntroduction />
    </div>
  );
}
