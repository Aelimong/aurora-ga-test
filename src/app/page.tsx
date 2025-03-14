import ButtonIcon from "@/components/ButtonIcon";
import StaticsDashboard from "@/components/StaticsDashboard";
import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: "Home",
    description: "Homepage",
  };
};

export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex flex-col gap-6 px-4 py-4 bg-slate-400">
          <ul>
            <Link href="/club">
              <li className="text-2xl font-bold">클럽</li>
            </Link>
            <Link href="/introduction">
              <li className="text-2xl font-bold">이용안내</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-6 px-4 py-4 bg-slate-700">
          <ButtonIcon />
        </div>
        <div className="px-14 py-8">
          <StaticsDashboard />
        </div>
      </div>
    </>
  );
}
