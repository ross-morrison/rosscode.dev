import * as React from 'react';
import type { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      name: "Register",
    },
  };
}

export default Register;
