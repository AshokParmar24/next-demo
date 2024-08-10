import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Blog = () => {
  const [data, setData] = useState([]);
  const route = useRouter();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setData(result?.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="text-lg mb-6">Welcome to the blog section.</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-4">
              <div className="text-xl font-semibold text-gray-900">
                {post.title}
              </div>
              <div className="text-base text-gray-700 mt-2">{post.body}</div>
              <button
                className="mt-4 w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                onClick={() => {
                  route.push(`/blog/${post?.id}`);
                }}
              >
                Blog Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
