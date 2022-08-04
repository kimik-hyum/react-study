import axios from "axios";
import { useEffect, useState } from "react";

export default function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
        setData(res.data);
      });
    }, 1000);
  }, []);
  if (!data) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <div>
        <p>userId: {data.userId}</p>
        <p>id: {data.id}</p>
        <p>title: {data.title}</p>
        <p>data: {data.body}</p>
      </div>
    </div>
  );
}
