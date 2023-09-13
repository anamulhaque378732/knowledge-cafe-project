
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {
 
const [bookmarks, setBookmarks] = useState([]);

 const [readingTime, setReadingTime] = useState(0)

 const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks  (newBookmarks)

 }
const handleMarkAsRead = (Id, time) =>{

  setReadingTime(readingTime + time);
//  remove the read block from bookmark
//  console.log('remove bookmark', Id);
const remainingBookMarks = bookmarks.filter(bookmark => bookmark.Id !== Id);
setBookmarks(remainingBookMarks);
}


  return (
    <>
       
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead ={handleMarkAsRead}></Blogs>
     <Bookmarks  readingTime={readingTime}
      bookmarks ={bookmarks} ></Bookmarks>
     </div>
    </>
  )
}

export default App
