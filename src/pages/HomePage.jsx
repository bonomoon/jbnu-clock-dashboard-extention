import styles from "./Page.module.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Quote from "../components/quote/Quote";
import GreetingLabel from "../components/labels/GreetingLabel";
import CountdownTimer from "../components/timer/count-down/CountdownTimer";
import Weather from "../components/weather/Weather";

export default function HomePage() {
  return (
    <>
      <Header renderRightComponent={() => <Weather />}/>
      <div className={styles.container}>
        <GreetingLabel styleName={styles.greeting} name={"문봉오"} event={'종강'} />
        {/* d-day를 받아서 남은 시간을 카운트를 한다. */}
        <CountdownTimer endDate={"20201222"} />
      </div>
      <Footer renderCenterComponent={() => <Quote />} />
    </>
  );
}
