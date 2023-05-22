export const columns = [
  {
    cell: (row) => (
      <img src={row.avatar} className="user-avatar" row={row} alt={row.email} />
    ),
    selector: (row) => row.avatar,
    sortable: true,
    maxWidth: "10%",
  },
  {
    name: "First Name",
    selector: (row) => row.first_name,
    sortable: true,
    maxWidth: "30%",
  },
  {
    name: "Last Name",
    selector: (row) => row.last_name,
    sortable: true,
    maxWidth: "30%",
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    maxWidth: "20%",
  },
  {
    cell: (row) => (
      <a href={`user-detail/${row.id}`}>
        <button className="btn btn-sm btn-view" row={row}>
          VIEW DETAIL
        </button>
      </a>
    ),
    allowOverflow: true,
    button: true,
    maxWidth: "10%",
  },
];
