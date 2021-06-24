import styled from "styled-components";

const Pin = styled.div`
  padding-top: -6px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;
`;

const PinInfo = styled.div`
  cursor: pointer;
  align-items: center;
  box-sizing: border-box;
  width: 236px;
  img {
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`;

const PinList = (props) => {
  return (
    <Pin>
      <PinInfo>
        <img
          src={props.images.orig.url}
          alt=""
          style={{ width: 236, borderRadius: 15 }}
          className="object-cover pointer-events-none group-hover:opacity-75"
        />
        {/* <p>
        {props.attribution ? props.attribution.author_name : "Unknown Author"}
      </p> */}
      </PinInfo>
    </Pin>
  );
};

export default PinList;
