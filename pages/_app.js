import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";

import { Firebase, FirebaseContext } from "../firebase/";

const data = {
  users: {
    martin: {
      name: "Martin",
      isAdmin: true,
      isBoss: false
    },
    fanda: {
      name: "Fanda",
      isAdmin: true,
      isBoss: true
    },
    john: {
      name: "John Doe",
      isAdmin: false,
      isBoss: false
    }
  },
  timetable: {
    martin: [{ date: "2019-07-17", hours: 2 }]
  },
  totals: {}
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>My new cool app</title>
        </Head>
        <FirebaseContext.Provider value={new Firebase()}>
          <Component {...pageProps} user={"aaa"} data={data} />
        </FirebaseContext.Provider>
      </Container>
    );
  }
}
