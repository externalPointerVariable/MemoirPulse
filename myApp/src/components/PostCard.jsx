import React from 'react';
import storageService from '../services/storage.js';
import {Link} from 'react-router-dom';

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors duration-200 border border-gray-700'>
            <div className='w-full justify-center mb-4'>
                <img 
                    src={storageService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='rounded-xl w-full h-48 object-cover' 
                    onError={(e) => {
                        e.target.src = "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                />
            </div>
            <h2 className='text-xl font-bold text-white hover:text-indigo-400 transition-colors'>
                {title}
            </h2>
        </div>
    </Link>
  );
}

export default PostCard;