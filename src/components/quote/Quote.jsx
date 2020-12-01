// css import
import styles from "./Quote.module.css";

import quotes from "../../core/res/quotes";

import {renderHTMLStringWithNewLine} from '../../core/util/StringHelper';

export default function Quote() {
  let number = Math.floor(Math.random() * quotes.length);

  return (
    <div className={styles.container}>
      <p className={styles.content}>
        <span className={styles.quote}><i>{renderHTMLStringWithNewLine(quotes[number].quote)}</i></span>
        {/* <span className={styles.author}><i>{`- ${quotes[number].author} -`}</i></span> */}
      </p>
    </div>
  );
}
