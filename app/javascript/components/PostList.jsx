import React from "react";

const PostList = ({ posts }) => {
  // Si no hay posts o no es un array, muestra un mensaje en lugar de fallar.
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return <p>No hay publicaciones para mostrar - EN VIVO.</p>;
  }

  // Si hay posts, renderiza la lista.
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Publicaciones del Blog - EN VIVO</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;