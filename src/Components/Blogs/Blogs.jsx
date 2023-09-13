import { useEffect } from "react";
import { useState } from "react";
 import Blog from "../Blog/Blog";
 import PropTypes from 'prop-types';
 

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

 const [blogs, setBlogs] = useState([]);

useEffect(() =>{


    fetch('blogs.json')
    .then(res=> res.json())
    .then(data =>  setBlogs(data))


},[])
    return (
        <main className=" md: w-2/3 mx-10">
          <h1 className="text-5xl">Blogs: {blogs.length}</h1>  
          {
            blogs.map(blog => <Blog  key ={blog.Id} blog = {blog}
            handleAddToBookmark = {handleAddToBookmark}
            handleMarkAsRead = {handleMarkAsRead}
            ></Blog>)
          }
        </main>

    );
};

 Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
 };
export default Blogs;