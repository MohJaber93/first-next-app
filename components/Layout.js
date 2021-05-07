import React from "react";
import Link from "next/link";
import Head from "next/head";
import NProgress from "nprogress";
import s from "next";

const Layout = ({ children, title }) => {
  return (
    <div className="root">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
        />
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
      <style global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Layout;
