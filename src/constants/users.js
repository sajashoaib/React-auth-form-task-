import "./style.css";
export const USERS_COLUMNS = (handeldelete) => [
  {
    key: "_id",
    title: "Id",
    render: (data) => <>{data._id}</>,
  },
  { key: "name", title: "name" },
  {
    key: "email",
    title: "email",
  },

  {
    key: "userId",
    title: "User Id",
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handeldelete(data._id)} className="btn">
          delete
        </button>
      </div>
    ),
  },
];
