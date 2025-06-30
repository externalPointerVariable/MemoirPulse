import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import dbServices from '../services/database';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            dbServices.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className='py-8 bg-gray-900 min-h-screen'>
            <Container>
                <div className='bg-gray-800 shadow-md rounded-lg p-8'>
                    <h1 className="text-3xl font-bold text-indigo-400 mb-8 text-center">Edit Post</h1>
                    <PostForm post={post} />
                </div>
            </Container>
        </div>
    ) : (
        <div className='py-8 bg-gray-900 min-h-screen'>
            <Container>
                <div className="text-center text-gray-300">
                    <p>Loading...</p>
                </div>
            </Container>
        </div>
    );
}

export default EditPost;