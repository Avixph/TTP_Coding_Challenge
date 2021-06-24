import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import useInfiniteScroll from "@closeio/use-infinite-scroll";
import ttpPins from "../../services/nyc_ttp_pins.json";
import PinList from "../../components/pinList/PinList";

const styles = {
  homeWrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
    marginTop: 15,
    justifyContent: "center",
  },
  pinListContainer: {
    maxWidth: 1260,
    columnCount: 5,
    columnGap: 10,
    margin: "0 auto",
    height: "100%",
  },
};
const Home = () => {
  // const [showMore, setShowMore] = useState(false);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  // const [refresh, setRefrsh] = useState(true);

  // const showPins = () => {
  //   setShowMore(!showMore);
  // };
  // const [items, setItems] = useState([]);
  // const [hasMore, setHasMore] = useState(false);
  // const [page, loaderRef, scrollerRef] = useInfiniteScroll({ hasMore });

  // useEffect(async () => {
  //   const data = ttpPins;
  //   setHasMore(data.hasMore);
  //   setItems((prev) => [...prev, data.items]);
  // }, [page]);

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
    <div styles={styles.homeWrapper}>
      <div styles={styles.pinListContainer}>
        <InfiniteScroll
          dataLength={pins}
          next={() => fetchPins(5)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {showMore ? renderPins() : ""}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
