import Link from "next/link";

const about = () => {
  return (
    <div>
      <div>
        <Link href="/">go to home</Link>
      </div>
      <p>Hi, I am react developer</p>
      <img
        alt="react-logo"
        src="/static/react-logo.png"
        height="80%"
        width="100%"
      />
    </div>
  );
};

export default about;
