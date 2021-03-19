export default function Nav(props) {
  return (
    <>
      <div
        className="text-white px-3 py-2 shadow-md"
        style={{ backgroundColor: "#2f3136"}}
      >
        <span className="text-2xl">{props.cont}</span>
        <span className="float-right mt-1">
          <i className="material-icons mr-4">dashboard</i>
          <i className="material-icons mr-4">account_circle</i>
          <i className="material-icons">info</i>
        </span>
      </div>
    </>
  );
}
