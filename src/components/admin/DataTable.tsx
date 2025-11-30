interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
  emptyMessage?: string;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
}

export const DataTable = ({ columns, rows, emptyMessage = "No data available", onEdit, onDelete }: DataTableProps) => {
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
                    {onEdit && (
                      <button 
                        className="admin-btn admin-btn-ghost" 
                        style={{ padding: "6px 12px" }}
                        onClick={() => onEdit(row)}
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button 
                        className="admin-btn admin-btn-ghost" 
                        style={{ padding: "6px 12px" }}
                        onClick={() => onDelete(row)}
                      >
                        Delete
                      </button>
                    )}
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
