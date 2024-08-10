import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query; // Get the id from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((result) => {
          setPost(result.data);
        })
        .catch((err) => {
          console.error("Error fetching data: ", err);
        });
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-lg text-gray-700 mb-6">{post.body}</div>
        <div className="mt-6">
          <button
            onClick={() => router.back()}
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
