import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dbServices from "../services/database";
import storageService from "../services/storage";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            dbServices.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        dbServices.deletePost(post.$id).then((status) => {
            if (status) {
                storageService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    if (!post) {
      return (
        <div className='w-full min-h-screen flex justify-center items-center bg-gray-900'>
          <h1 className='text-3xl font-bold text-indigo-400 animate-pulse'>Loading Post...</h1>
        </div>
      );
    }

    return (
        <div className="py-8 bg-gray-900 min-h-screen">
            <Container className="bg-gray-800 shadow-md rounded-lg p-8">
                <div className="w-full flex justify-center mb-6 relative border border-gray-700 rounded-xl p-2">
                    <img
                        src={storageService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl object-cover w-full h-80"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-indigo-600" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-600" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-4xl font-extrabold text-white mb-4">{post.title}</h1>
                    <div className="prose prose-lg prose-invert max-w-none text-white">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    );
}