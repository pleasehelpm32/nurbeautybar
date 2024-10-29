"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Instagram = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [api, setApi] = useState(null);
  const POSTS_PER_SLIDE = 9; // 3x3 grid

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [api]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `https://graph.instagram.com/me/media?limit=54&fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`;
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        console.error("Error fetching Instagram posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const groupedPosts = posts
    .reduce((acc, post, i) => {
      const slideIndex = Math.floor(i / POSTS_PER_SLIDE);
      if (!acc[slideIndex]) acc[slideIndex] = [];
      acc[slideIndex].push(post);
      return acc;
    }, [])
    .slice(0, 6); // Limit to 6 slides

  if (loading) return <div className="text-center text-dark">Loading...</div>;
  if (error) return <div className="text-center text-dark">Error: {error}</div>;
  if (!posts.length)
    return <div className="text-center text-dark">No posts found</div>;

  return (
    <section className="py-24 bg-creamy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-dark mb-2">Let's Connect</h2>
          <a
            href="https://www.instagram.com/nurbeautybar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-dark hover:text-mid transition-colors duration-300"
          >
            @nurbeautybar
          </a>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl mx-auto"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {groupedPosts.map((slideGroup, slideIndex) => (
              <CarouselItem key={slideIndex}>
                <div className="grid grid-cols-3 gap-4">
                  {slideGroup.map((post) => (
                    <a
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="relative aspect-square">
                        <img
                          src={
                            post.media_type === "VIDEO"
                              ? post.thumbnail_url
                              : post.media_url
                          }
                          alt="Instagram post"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {post.media_type === "VIDEO" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"></div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Instagram;
