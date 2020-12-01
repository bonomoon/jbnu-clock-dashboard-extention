import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Quote from "../components/quote/Quote";
import GreetingLabel from "../components/labels/GreetingLabel";
import CountdownTimer from "../components/timer/count-down/CountdownTimer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className={"container"}>
        <GreetingLabel styleName={'greeting'} name={"문봉오"} event={'종강'} />
        {/* d-day를 받아서 남은 시간을 카운트를 한다. */}
        <CountdownTimer endDate={"20201222"} />
      </div>
      <Footer renderCenterComponent={() => <Quote />} />
    </>
  );
}
