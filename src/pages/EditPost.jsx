import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import dbServices from '../services/database';
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            dbServices.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate('/');
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);
    
  return post ? (
    <div className='py-8 bg-gray-900 min-h-screen'>
        <Container className='bg-gray-800 shadow-md rounded-lg p-8'>
            <PostForm post={post} />
        </Container>
    </div>
  ) : (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-900'>
      <h1 className='text-3xl font-bold text-indigo-400 animate-pulse'>Loading Post...</h1>
    </div>
  );
}

export default EditPost;