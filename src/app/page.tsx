import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: "Home",
    description: "Homepage",
  };
};

export default function Home() {
  return (
    <div className="flex flex-col gap-6 h-screen px-16 py-12 ">
      <ul>
        <Link href="/club">
          <li className="text-2xl font-bold">클럽</li>
        </Link>
        <Link href="/introduction">
          <li className="text-2xl font-bold">이용안내</li>
        </Link>
      </ul>
    </div>
  );
}
