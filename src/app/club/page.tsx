import GoogleAnalyticsClub from "@/components/GoogleAnalyticsTest";

export const generateMetadata = () => {
  return {
    title: "Club",
    description: "Club",
  };
};

export default function Club() {
  return (
    <div className="flex flex-col gap-6 h-screen px-16 py-12 ">
      <GoogleAnalyticsClub />
    </div>
  );
}
