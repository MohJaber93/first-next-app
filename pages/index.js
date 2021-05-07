import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>
        <Link href="/about">go to about</Link>
      </div>
      welcome to home page
    </div>
  );
};

export default Home;
