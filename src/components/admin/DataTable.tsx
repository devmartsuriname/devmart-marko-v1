interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
  emptyMessage?: string;
}

export const DataTable = ({ columns, rows, emptyMessage = "No data available" }: DataTableProps) => {
  if (rows.length === 0) {
    return (
      <div className="admin-card">
        <div className="admin-table-empty">{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className="admin-card">
      <div style={{ overflowX: "auto" }}>
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
                <td>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button className="admin-btn admin-btn-ghost" style={{ padding: "6px 12px" }}>
                      Edit
                    </button>
                    <button className="admin-btn admin-btn-ghost" style={{ padding: "6px 12px" }}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
