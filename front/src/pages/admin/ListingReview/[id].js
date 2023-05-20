import { useRouter } from 'next/router';

function ListingReviewItem() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Listing Review ID: {id}</h1>
      {/* ここに各リストの詳細を表示するコードを書く */}
    </div>
  );
}

export default ListingReviewItem;
