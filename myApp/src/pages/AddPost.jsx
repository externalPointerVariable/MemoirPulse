import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className='py-8 bg-gray-900 min-h-screen'>
        <Container>
            <div className='bg-gray-800 shadow-md rounded-lg p-8'>
                <h1 className="text-3xl font-bold text-indigo-400 mb-8 text-center">Add New Post</h1>
                <PostForm />
            </div>
        </Container>
    </div>
  );
}

export default AddPost;