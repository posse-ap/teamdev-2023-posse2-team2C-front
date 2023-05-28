import * as React from 'react';

export default function Index() {
  return null; // 返す内容はないため、nullを返す
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/UserTop', // ここにリダイレクトしたいURLを指定します
      permanent: false,
    },
  }
}
