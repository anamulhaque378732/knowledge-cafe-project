import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,  handleAddToBookmark, handleMarkAsRead }) => {

   const {title, cover,posted, btn, author,author_image,reading_time,Hashtag} = blog;
    return (

 
         
        <div className='mt-12'>
            <img className='w-full' src= {cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mt-8'>
                <div className='flex gap-8 mb-8'>
                <div>
                <img className='h-16 w-16 rounded-full' src={author_image} alt="" />
                </div>
                   <div>
                    <h3 className='text-2xl font-semibold'>{author}</h3>
                    <p className='font-normal'>{posted}</p>
                   </div>
                    
                </div>
                <div>
                  <span>{reading_time} min  read</span>
                  <button onClick={()=>  handleAddToBookmark (blog)}  className='ml-4 text-red-600 text-2xl bg-gray-400 p-2'> <FaBookmark></FaBookmark> </button>
                </div>
            </div>
           <h2 className="text-4xl font-bold">{title}</h2>
            <div className='mt-8'>
                 <a href="">{Hashtag}</a>

            </div>
           <div className='mt-8'>
            <button onClick={ () => handleMarkAsRead(reading_time)}  className="btn p-4 text-[#6047EC] font-bold bg-gray-100 underline">{btn}</button>
           </div>
        </div>
        

    )
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;