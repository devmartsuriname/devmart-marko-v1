import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPublishedBlogPosts, type BlogPost } from "@/integrations/supabase/queries/blogPosts";

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await getPublishedBlogPosts();
      
      if (fetchError) {
        console.error("Error fetching blog posts:", fetchError);
        setError("Unable to load blog posts at the moment.");
      } else {
        setPosts(data || []);
      }
      
      setIsLoading(false);
    };
    
    fetchPosts();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "No date";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <>
      {/* Section Banner */}
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">Our Blog</h2>
              <nav className="breadcrumb">
                <Link to="/" className="gspace-2">Home</Link>
                <span className="separator-link">/</span>
                <p className="current-page">Blog</p>
              </nav>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* Section Blog */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5 m-0">
              <div className="col col-xl-8 ps-0 pe-0">
                <div className="d-flex flex-column gspace-2 animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Insights & Trends</span>
                  </div>
                  <h2 className="title-heading">Latest Digital Solutions & Tech Insights</h2>
                </div>
              </div>
              <div className="col col-xl-4 ps-0 pe-0">
                <div className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <p>Explore our latest insights covering tech trends, development best practices, and actionable strategies for digital transformation in Suriname.</p>
                  <div className="link-wrapper">
                    <Link to="/blog">View All Articles</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
              {isLoading && (
                <>
                  <div className="col">
                    <div className="card card-blog">
                      <div className="blog-image" style={{ height: '250px', backgroundColor: '#f0f0f0' }}></div>
                      <div className="card-body">
                        <div className="d-flex flex-row gspace-2">
                          <div style={{ height: '20px', width: '100px', backgroundColor: '#f0f0f0' }}></div>
                        </div>
                        <div style={{ height: '24px', width: '80%', backgroundColor: '#f0f0f0', margin: '10px 0' }}></div>
                        <div style={{ height: '60px', backgroundColor: '#f0f0f0' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-blog">
                      <div className="blog-image" style={{ height: '250px', backgroundColor: '#f0f0f0' }}></div>
                      <div className="card-body">
                        <div className="d-flex flex-row gspace-2">
                          <div style={{ height: '20px', width: '100px', backgroundColor: '#f0f0f0' }}></div>
                        </div>
                        <div style={{ height: '24px', width: '80%', backgroundColor: '#f0f0f0', margin: '10px 0' }}></div>
                        <div style={{ height: '60px', backgroundColor: '#f0f0f0' }}></div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {error && (
                <div className="col">
                  <div className="card card-blog">
                    <div className="card-body">
                      <p className="accent-color">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {!isLoading && !error && posts.length === 0 && (
                <div className="col">
                  <div className="card card-blog">
                    <div className="card-body">
                      <p>No blog posts available at the moment.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {!isLoading && !error && posts.map((post) => (
                <div className="col" key={post.id}>
                  <div className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp" onClick={() => window.location.href=`/blog/${post.slug}`}>
                    <div className="blog-image">
                      <img 
                        src={post.featured_image || "/marko-digital-marketing-agency-html/image/dummy-img-600x400.jpg"} 
                        alt={post.title} 
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex flex-row gspace-2">
                        <div className="d-flex flex-row gspace-1 align-items-center">
                          <i className="fa-solid fa-calendar accent-color"></i>
                          <span className="meta-data">{formatDate(post.published_at)}</span>
                        </div>
                        {post.category && (
                          <div className="d-flex flex-row gspace-1 align-items-center">
                            <i className="fa-solid fa-folder accent-color"></i>
                            <span className="meta-data">{post.category}</span>
                          </div>
                        )}
                      </div>
                      <Link to={`/blog/${post.slug}`} className="blog-link">{post.title}</Link>
                      <p>{post.excerpt || post.content?.substring(0, 150) + '...'}</p>
                      <Link to={`/blog/${post.slug}`} className="read-more">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
