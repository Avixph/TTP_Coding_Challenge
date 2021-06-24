const PinList = (props) => {
  return (
    <div>
      <img
        src={props.images.orig.url}
        alt=""
        style={{ width: 236 }}
        className="object-cover pointer-events-none group-hover:opacity-75"
      />
      <p>
        {props.attribution ? props.attribution.author_name : "Unknown Author"}
      </p>
    </div>
  );
};

export default PinList;
