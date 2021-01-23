import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fetchMinistries} from "../reducers/ministries";
import {useDispatch} from "react-redux";
import {ministryStatus, useStatuses} from "../selectors/status";
import {useMinistries} from "../selectors";
import {Container, Slider, SliderFilledTrack, SliderThumb, SliderTrack} from "@chakra-ui/react";

function Home() {
  const dispatch = useDispatch();
  const { isLoading } = useStatuses([ministryStatus]);
  const { ministries } = useMinistries();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [date]);
  return (
    <div>
      <h1>Welcome Home!</h1>
      <a
        className="btn btn-link"
        href={"https://www.scooterscoffee.com/"}
        rel={"noopener noreferrer"}
        target={"_blank"}
      >
        <FontAwesomeIcon icon="coffee" spin={true} className="mr-sm-1" />
        Coffee
      </a>
      <div>
        <Container>
          <p>something</p>
        </Container>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
              <SliderTrack>
                  <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
          </Slider>
        <h2>Ministries</h2>
        {ministries.map((ministry, index) => (
          <Container key={index}>
            <p>{ministry.name}</p>
            <p>{ministry.description}</p>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default Home;
