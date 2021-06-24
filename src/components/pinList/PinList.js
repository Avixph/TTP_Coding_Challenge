const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

const PinList = (props) => {
  return (
    <div styles={{ ...styles.card, ...styles[props.size] }}>
      <img
        src={props.images.orig.url}
        alt=""
        style={{ width: 236, borderRadius: 15 }}
        className="object-cover pointer-events-none group-hover:opacity-75"
      />
      {/* <p>
        {props.attribution ? props.attribution.author_name : "Unknown Author"}
      </p> */}
    </div>
  );
};

export default PinList;
