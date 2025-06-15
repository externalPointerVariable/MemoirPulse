import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dbServices from "../services/database";
import { Container, PostCard } from "../components";

/** Hero shown when there are no posts (i.e. user not logged in) */
function HomeHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* subtle SVG wave for texture */}
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,224L80,197.3C160,171,320,117,480,112C640,107,800,149,960,160C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      <Container>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Unlock the Stories Within
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10">
            Log in to immerse yourself in heartfelt memories and personal
            narratives on MemoirPulse.
          </p>
          <Link
            to="/login"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
          >
            Log In
          </Link>
        </div>
      </Container>
    </section>
  );
}

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbServices.getPosts().then((resp) => {
      if (resp && resp.documents) {
        setPosts(resp.documents);
      }
    });
  }, []);

  // If no posts (user not logged in) → show hero
  if (posts.length === 0) {
    return <HomeHero />;
  }

  // Otherwise show post grid
  return (
    <section className="w-full bg-gray-900 py-12">
      <Container>
        <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">
          Latest Reflections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Home;
