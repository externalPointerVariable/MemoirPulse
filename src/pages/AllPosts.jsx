import React, {useState, useEffect} from 'react';
import { Container, PostCard } from '../components';
import dbServices from '../services/database';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dbServices.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className='w-full min-h-screen flex justify-center items-center bg-gray-900'>
                <h1 className='text-3xl font-bold text-indigo-400 animate-pulse'>Loading Posts...</h1>
            </div>
        );
    }

    if (posts.length === 0) {
      return (
          <div className='w-full py-8 text-center bg-gray-900 min-h-screen'>
              <Container>
                  <h1 className='text-3xl font-bold text-white'>No Posts Available</h1>
              </Container>
          </div>
      );
    }

    return (
        <div className='w-full py-8 bg-gray-900'>
            <Container>
                <div className='flex flex-wrap -m-2'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;