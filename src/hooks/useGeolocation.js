import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [position, setPosition] = useState({});
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

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setPosition({     // 전주 위치로 초기화
        latitude: 35.84751942297502,
        longitude: 127.13126620125045,
      });
      setError("위치가 허용되지 않았습니다.");
      return;
    }

    geo.getCurrentPosition(onChange, onError);
    // const watcher = geo.watchPosition(onChange, onError);

    // return () => geo.clearWatch(watcher);
  }, []);

  return {position, error};
};
