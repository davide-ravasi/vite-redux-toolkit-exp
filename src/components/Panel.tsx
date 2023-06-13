const Panel = ({ header, children }) => {
  return (
    <div className="panel">
      <div className="prova">{header}</div>
      <div className="prova">{children}</div>
    </div>
  );
};

export default Panel;
