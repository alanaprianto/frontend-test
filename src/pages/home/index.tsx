import { useState, useEffect } from "react";
import {
  Container,
  ListComponent,
  ItemList,
  LoadingData,
  H1Title,
} from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";

type ResponseType = {
  count: number;
  next: string;
  previous: string;
  results: Array<object>;
};

function Home() {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState<ResponseType>({
    count: 0,
    next: "",
    previous: "",
    results: [],
  });

  const fetchData = async () => {
    const params = new URLSearchParams({
      page: page.toString(),
    });
    const res = await fetch(`https://swapi.dev/api/planets?${params}`);
    const data = await res.json();
    setResponse({
      ...response,
      ...data,
      results: response.results.concat(data.results),
    });
  };

  const fetchNext = () => {
    if (response.results.length < response.count) {
      setTimeout(() => {
        setPage(page + 1);
      }, 500);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <ListComponent>
        <H1Title>Planet List</H1Title>
        <hr />
        <InfiniteScroll
          dataLength={response.results.length}
          next={fetchNext}
          hasMore={response.results.length < response.count}
          loader={<LoadingData>Loading...</LoadingData>}
        >
          {response.results.map((i: { [key: string]: any }, index) => (
            <ItemList
              key={index}
              onClick={() => history.push(`/detail/${index + 1}`)} // swapi not return id, use index + 1 instead
            >
              {index + 1}) Planet - {i.name}
            </ItemList>
          ))}
        </InfiniteScroll>
      </ListComponent>
    </Container>
  );
}

export default Home;
