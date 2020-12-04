import { useState, useEffect } from "react";

const geo = navigator.geolocation;

export const useGeolocation = () => {
  const [position, setPosition] = useState({  // 초기에 전주 위치
    latitude: 35.84751942297502,
    longitude: 127.13126620125045,
  });
  const [error, setError] = useState();

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  const watch = () => geo.watchPosition(onChange, onError);

  useEffect(() => {
    if (!geo) {
      setError("위치가 허용되지 않았습니다.");
      return;
    }
    geo.getCurrentPosition(onChange, onError);

    return () => geo.clearWatch(watch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position, watch, error };
};
