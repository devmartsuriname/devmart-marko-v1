import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogPostBySlug, getPublishedBlogPosts, type BlogPost } from "@/integrations/supabase/queries/blogPosts";

const SinglePostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("Post not found");
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      const { data: postData, error: postError } = await getBlogPostBySlug(slug);
      
      if (postError) {
        console.error("Error fetching post:", postError);
        setError("Unable to load blog post.");
      } else if (!postData) {
        setError("Post not found");
      } else {
        setPost(postData);
      }
      
      const { data: recentData } = await getPublishedBlogPosts();
      if (recentData) {
        setRecentPosts(recentData.filter(p => p.slug !== slug).slice(0, 2));
      }
      
      setIsLoading(false);
    };
    
    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "No date";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  if (isLoading) {
    return (
      <div className="section">
        <div className="hero-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <>
        <div className="section-banner">
          <div className="banner-layout-wrapper">
            <div className="banner-layout">
              <div className="d-flex flex-column text-center align-items-center gspace-2">
                <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Post Not Found</h2>
                <nav className="breadcrumb">
                  <Link to="/" className="gspace-2">Home</Link>
                  <span className="separator-link">/</span>
                  <Link to="/blog" className="gspace-2">Blog</Link>
                  <span className="separator-link">/</span>
                  <p className="current-page">Not Found</p>
                </nav>
              </div>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="hero-container">
            <p className="accent-color">{error || "The blog post you're looking for could not be found."}</p>
            <Link to="/blog" className="link-wrapper">
              <span>Back to Blog</span>
              <i className="fa-solid fa-circle-arrow-left"></i>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">{post.title}</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <Link to="/blog" className="gspace-2">Blog</Link>
                <span className="separator-link">/</span>
                <p className="current-page">{post.title}</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Post */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col col-xl-4 order-2 order-xl-1">
              <div className="d-flex flex-column flex-md-row flex-xl-column gspace-5">
                <div className="card recent-post">
                  <h4>Recent Blog</h4>
                  {recentPosts.length > 0 ? (
                    recentPosts.map((recentPost) => (
                      <div className="d-flex flex-row w-100 gspace-1" key={recentPost.id}>
                        <div className="image-container">
                          <img 
                            src={recentPost.featured_image || "/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg"} 
                            alt={recentPost.title} 
                            className="img-fluid" 
                          />
                        </div>
                        <div className="d-grid">
                          <div className="d-flex flex-row gspace-1 align-items-center">
                            <i className="fa-solid fa-calendar accent-color"></i>
                            <span className="meta-data-post">{formatDate(recentPost.published_at)}</span>
                          </div>
                          <Link to={`/blog/${recentPost.slug}`} className="blog-link-post">{recentPost.title}</Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No recent posts available.</p>
                  )}
                </div>
                <div className="cta-service-banner">
                  <div className="spacer"></div>
                  <h3 className="title-heading">Transform Your Organization with Devmart</h3>
                  <p>Elevate your digital infrastructure with cutting-edge web development and modern tech solutions. Let's build something exceptional together!</p>
                  <div className="link-wrapper">
                    <Link to="/about">Read More</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-8 order-1 order-xl-2">
              <div className="d-flex flex-column gspace-2">
                <div className="post-image">
                  <img 
                    src={post.featured_image || "/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg"} 
                    alt={post.title} 
                    className="img-fluid" 
                  />
                </div>
                <h3>{post.title}</h3>
                <div className="underline-muted-full"></div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row align-items-center gspace-2">
                    <div className="d-flex flex-row gspace-1 align-items-center">
                      <i className="fa-solid fa-calendar accent-color"></i>
                      <span className="meta-data-post">{formatDate(post.published_at)}</span>
                    </div>
                    {post.category && (
                      <div className="d-flex flex-row gspace-1 align-items-center">
                        <i className="fa-solid fa-folder accent-color"></i>
                        <span className="meta-data-post">{post.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <i className="fa-solid fa-user accent-color"></i>
                    <span className="meta-data">Devmart Team</span>
                  </div>
                </div>
                <div>
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
