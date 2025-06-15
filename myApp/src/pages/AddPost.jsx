import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className='py-8'>
        <Container className='bg-amber-600 shadow-md rounded-lg p-8'>
            <PostForm />
        </Container>
    </div>
  );
}

export default AddPost;