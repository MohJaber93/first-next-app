import React from "react";
import Link from "next/link";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = ({ children, title }) => {
  return (
    <div className="root">
      <Head>
        <title>Portfolio</title>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire Me</a>
        </Link>
      </header>
      <main className="main-content">
        <h1>{title}</h1>
        {children}
      </main>
      <footer>&copy; {new Date().getFullYear()}</footer>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          text-align: center;
          padding: 15px;
        }
        header {
          display: flex;
          justify-content: space-around;
          width: 100%;
          background-color: #442ea2;
          padding: 20px 0;
          font-size: 1.2rem;
        }

        header a {
          text-decoration: none;
          color: #fff;
        }

        header a:hover {
          color: gray;
          font-weight: bold;
        }

        footer {
          padding: 1em;
        }
      `}</style>
    </div>
  );
};

export default Layout;
