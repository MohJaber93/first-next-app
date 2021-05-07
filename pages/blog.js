import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, url }) => {
  return (
    <li>
      <Link href="/posts/[title]" as={`/posts/${url}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink url="react-post" title="React Post" />
        <PostLink url="angular-post" title="Angular Post" />
        <PostLink url="vue-post" title="Vue Post" />
      </ul>
    </Layout>
  );
};

export default blog;
