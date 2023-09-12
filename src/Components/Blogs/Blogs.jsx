import { useEffect } from "react";
import { useState } from "react";
 import Blog from "../Blog/Blog";
 

const Blogs = () => {

 const [blogs, setBlogs] = useState([]);

useEffect(() =>{


    fetch('blogs.json')
    .then(res=> res.json())
    .then(data =>  setBlogs(data))


},[])
    return (
        <main className=" md: w-2/3">
          <h1 className="text-5xl">Blogs: {blogs.length}</h1>  
          {
            blogs.map(blog => <Blog  key ={blog.Id} blog= {blog}></Blog>)
          }
        </main>

    );
};

export default Blogs;