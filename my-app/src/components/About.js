import { useState } from "react";

const About =() => { 
    //aray of blogs
const [blogs, setBlogs] = useState([
    { title: 'Flying into the red thread', body: 'lorem ipsum...', category: 'nightmate', id: 1 },
    { title: 'Desert dust dream', body: 'lorem ipsum...', category: 'desertscape', id: 2 },
    { title: 'Water moving in the dark...', body: 'lorem ipsum...', category: 'calm water', id: 3}
  ])
        
return (
    <div className="about">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>Title: { blog.title }</h2>
          <p>Dreamscape: { blog.category }</p>
        </div>
      ))}
    </div>
     )}

export default About;
