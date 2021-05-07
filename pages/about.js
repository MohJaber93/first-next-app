import Layout from "../components/Layout";
import Error from "./_error";

const about = (props) => {
  //   useEffect(() => {
  //fetch data on client side works as usual
  //     fetch("https://api.github.com/users/MohJaber93")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("data", data);
  //       });
  //   }, []);
  const { avatar_url, name, bio, html_url } = props.user;

  if (props.error) {
    return <Error apiError={props.error} />;
  }

  return (
    <Layout title="Hi, I am react developer">
      <h3>{name}</h3>
      <p>{bio}</p>
      <a href={html_url} target="_blank">
        My Github
      </a>
      <img alt="my-pic" src={avatar_url} height="80%" width="100%" />
    </Layout>
  );
};

// OLD WAY
// this way to fetch data from the server then the page will rendered with the response in it's props
about.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/MohJaber93");
  const user = await response.json();
  const error = response.status > 200 ? response.status : false;
  console.log(user, response, error);
  return { user: user, error };
};

export default about;
