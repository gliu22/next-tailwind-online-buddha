import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Unauthorize() {
  const router = useRouter();
  const { message } = router.query;
  return (
    <Layout title="Unauthorize Page">
      <h1 className="text-xl"> Access Denied</h1>
      {message && <h2 className="mb-4 text-red-500">{message}</h2>}
    </Layout>
  );
}
