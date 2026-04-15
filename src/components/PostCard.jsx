import React from 'react';
import storageService from '../services/storage.js';
import {Link} from 'react-router-dom';

function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-800 rounded-xl p-4 transition-transform duration-300 transform hover:scale-105'>
                <div className='w-full justify-center mb-4'>
                    <img src={storageService.getFilePreview(featuredImage)} alt={title}
                    className='rounded-xl' />

                </div>
                <h2
                className='text-xl font-bold text-white'
                >{title}</h2>
            </div>
        </Link>
    );
}


export default PostCard;