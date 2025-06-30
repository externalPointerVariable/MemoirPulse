import React, {useState, useEffect} from 'react';
import { Container, PostCard } from '../components';
import dbServices from '../services/database';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        dbServices.getPosts([]).then((posts) => {
            if (posts && posts.documents) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className='w-full py-8 bg-gray-900 min-h-screen'>
            <Container>
                <h1 className="text-3xl font-bold text-indigo-400 mb-8 text-center">All Posts</h1>
                {posts.length === 0 ? (
                    <div className="text-center text-gray-300">
                        <p className="text-xl mb-4">No posts available</p>
                        <p>Create your first post to get started!</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;