 import PropTypes from 'prop-types'
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className=' w-1/3 mr-8'>

            <div className='mb-4 bg-slate-200 rounded-xl'>
                <h3 className='text-3xl p-6 text-green-400'>Spent time on read:{readingTime}</h3>
            </div>
            <div className='bg-gray-200 rounded-xl'>
            <h3 className='text-3xl text-center  p-4 m-4 rounded-xl'> Bookmarks Blog: {bookmarks.length}</h3>
             {
                bookmarks.map( bookmark => <Bookmark  key={bookmark.id} bookmark={bookmark}> </Bookmark>)
             }
          </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes. array,
    readingTime: PropTypes.number
}

export default Bookmarks;

 

 