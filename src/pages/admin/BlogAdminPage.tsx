import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getAllBlogPosts } from "@/integrations/supabase/queries/blogPosts";
import { AddBlogModal } from "@/components/admin/blogs/AddBlogModal";
import { EditBlogModal } from "@/components/admin/blogs/EditBlogModal";
import { DeleteBlogDialog } from "@/components/admin/blogs/DeleteBlogDialog";
import type { BlogPost } from "@/integrations/supabase/queries/blogPosts";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deletingPost, setDeletingPost] = useState<BlogPost | null>(null);

  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          className={`admin-badge admin-badge-${
            value === "published" ? "success" : value === "draft" ? "warning" : "info"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "published_at",
      label: "Published At",
      render: (value: string | null) => (value ? new Date(value).toLocaleDateString() : "—"),
    },
  ];

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error: fetchError } = await getAllBlogPosts();

    if (fetchError) {
      setError(fetchError.message);
      setIsLoading(false);
      return;
    }

    setPosts(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (row: BlogPost) => {
    setEditingPost(row);
  };

  const handleDelete = (row: BlogPost) => {
    setDeletingPost(row);
  };

  const handleSuccess = () => {
    fetchPosts();
  };

  if (isLoading) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Blog Posts</h2>
            <p className="admin-card-description">
              Manage blog articles and content. Backed by the 'blog_posts' table.
            </p>
          </div>
        </div>
        <div style={{ padding: "40px", textAlign: "center", color: "var(--admin-text-secondary)" }}>
          Loading blog posts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="admin-card-header">
          <div>
            <h2 className="admin-card-title">Blog Posts</h2>
            <p className="admin-card-description">
              Manage blog articles and content. Backed by the 'blog_posts' table.
            </p>
          </div>
        </div>
        <div
          style={{
            padding: "20px",
            margin: "20px 0",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            borderRadius: "6px",
            color: "#ef4444",
          }}
        >
          Error loading blog posts: {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Blog Posts</h2>
          <p className="admin-card-description">
            Manage blog articles and content. Backed by the 'blog_posts' table.
          </p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={16} />
          Add Post
        </button>
      </div>
      <DataTable columns={columns} rows={posts} onEdit={handleEdit} onDelete={handleDelete} />

      <AddBlogModal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSuccess={handleSuccess} />

      <EditBlogModal
        open={!!editingPost}
        post={editingPost}
        onClose={() => setEditingPost(null)}
        onSuccess={handleSuccess}
      />

      <DeleteBlogDialog
        open={!!deletingPost}
        post={deletingPost}
        onClose={() => setDeletingPost(null)}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
