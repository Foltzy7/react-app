import React, {useEffect} from "react";
import {fetchMinistries} from "../reducers/ministries";
import {useDispatch} from "react-redux";
import {ministryStatus, useStatuses} from "../selectors/status";
import {useMinistries} from "../selectors";
import {Container, Slider, SliderFilledTrack, SliderThumb, SliderTrack} from "@chakra-ui/react";

export default function About() {
  const dispatch = useDispatch();
  const { isLoading } = useStatuses([ministryStatus]);
  const { ministries } = useMinistries();
  const date = "01-01-2020";

  useEffect(() => {
    dispatch(fetchMinistries({ date }));
  }, [date]);
  return (
    <div>
      <h1>About us</h1>

      <div>
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
