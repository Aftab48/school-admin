import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-7xl p-6">This is the homepage</h1>
      <Link
        href="/admin"
        className="text-6xl p-6 text-blue-600 hover:underline"
      >
        Go to admin page
      </Link>
    </div>
  );
};

export default Homepage;
