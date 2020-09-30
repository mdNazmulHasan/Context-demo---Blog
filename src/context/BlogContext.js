import React, { useState } from "react";
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const addBlgPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog #${blogPosts.length + 1}` }]);
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlgPost }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
