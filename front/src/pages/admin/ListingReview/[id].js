import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import axios from "axios";

function ListingReviewItem() {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    axios
    .get("http://localhost:80/api/role", { withCredentials: true })
    .then((response) => {
      if (response.data !== 2) {
        alert("アクセス権限がありません。TOPページに戻ります。");
        router.push("/UserTop");
        return;
      } else {
      }
    })
    .catch(function (error) {
      alert("ログイン情報がありません。");
      router.push("/auth/login");
      return;
    });
  }, []);

  return (
    <div>
      <h1>Listing Review ID: {id}</h1>
      {/* ここに各リストの詳細を表示するコードを書く */}
    </div>
  );
}

export default ListingReviewItem;
