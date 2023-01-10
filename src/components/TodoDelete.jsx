export const TodoDelete = ({ onDeleteAll }) => {
  return (
    <button onDoubleClick={onDeleteAll} className="btn btn-danger m-2">
      <i className="bi bi-x-square"></i>
    </button>
  );
};
