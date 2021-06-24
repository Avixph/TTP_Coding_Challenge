import { useState, useEffect } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import ttpPins from "../../services/nyc_ttp_pins.json";
import PinList from "../../components/pinList/PinList";

const HomeScreen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;

const PinContainer = styled.div`
  column-count: 5;
  column-gap: 5px;
  margin: 0 auto;
  height: 100%;
  max-width: 1260px;
`;

const Home = () => {
  const [pins, setPins] = useState([]);
  const [showMore, setShowMore] = useState(false);
  console.log(pins);

  const fetchPins = () => {
    const data = ttpPins;
    setPins([...pins, ...data]);
    setShowMore(true);
  };

  useEffect(() => {
    fetchPins();
  }, []);

  const renderPins = () => {
    return ttpPins.map((pinInfo, index) => {
      return <PinList {...pinInfo} key={index} />;
    });
  };

  return (
    <HomeScreen>
      <PinContainer>
        <InfiniteScroll
          dataLength={pins}
          next={() => fetchPins(5)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {showMore ? renderPins() : ""}
        </InfiniteScroll>
      </PinContainer>
    </HomeScreen>
  );
};

export default Home;
