import { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteScroll from "@closeio/use-infinite-scroll";
import ttpPins from "../../services/nyc_ttp_pins.json";
import PinList from "../../components/pinList/PinList";

const Home = () => {
  // const [showMore, setShowMore] = useState(false);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  // const [refresh, setRefrsh] = useState(true);

  // const showPins = () => {
  //   setShowMore(!showMore);
  // };
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, loaderRef, scrollerRef] = useInfiniteScroll({ hasMore });

  useEffect(async () => {
    const data = ttpPins;
    setHasMore(data.hasMore);
    setItems((prev) => [...prev, data.items]);
  }, [page]);

  const renderPins = () => {
    return ttpPins.map((pinInfo, index) => {
      return <PinList {...pinInfo} key={index} />;
    });
  };
  return (
    <div ref={scrollerRef}>
      {/* <InfiniteScroll
        dataLength={ttpPins.length}
        next={ttpPins}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {renderPins()}
      </InfiniteScroll> */}
      {renderPins()}
    </div>
  );
};

export default Home;
