const Notes = ({ notes }) => {
  return (
    <>
      {notes.map((item) => {
        return (
          <div className="card " style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                  {item.description}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Notes;
