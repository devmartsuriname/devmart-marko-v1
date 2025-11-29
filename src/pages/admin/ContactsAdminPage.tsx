import { DataTable } from "@/components/admin/DataTable";

export default function ContactsAdminPage() {
  const columns = [
    {
      key: "from",
      label: "From",
      render: (_: any, row: any) => (
        <div>
          <div style={{ fontWeight: 500 }}>{row.name}</div>
          <div style={{ fontSize: "13px", color: "var(--admin-text-muted)" }}>{row.email}</div>
        </div>
      ),
    },
    { key: "subject", label: "Subject" },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span className={`admin-badge admin-badge-${value === "new" ? "info" : value === "read" ? "warning" : "success"}`}>
          {value}
        </span>
      ),
    },
  ];

  const rows = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Inquiry about web development services",
      date: "2025-01-16",
      status: "new",
    },
    {
      name: "Lisa Anderson",
      email: "lisa@company.com",
      subject: "Project collaboration opportunity",
      date: "2025-01-15",
      status: "read",
    },
    {
      name: "Michael Brown",
      email: "michael.b@email.com",
      subject: "Question about pricing",
      date: "2025-01-14",
      status: "responded",
    },
  ];

  return (
    <div>
      <div className="admin-card-header">
        <div>
          <h2 className="admin-card-title">Contact Submissions</h2>
          <p className="admin-card-description">
            Inbox for contact form submissions. Backed by the 'contact_submissions' table.
          </p>
        </div>
      </div>
      <DataTable columns={columns} rows={rows} emptyMessage="No contact submissions yet" />
    </div>
  );
}
