const Itempack = ({ title, ...props }) => {
  return (
    <div className="item-pack">
      <div className="itempack-title">{title}</div>
      <div className="item-content">{props.children}</div>
    </div>
  );
};

export default Itempack;
