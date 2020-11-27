// css import
import '../App.css';

import quotes from '../core/res/quotes';

export default function Quote() {
    let number = Math.floor(Math.random() * quotes.length);

    return (
        <div className="quote">
            <p>
                <span>
                    {quotes[number].quote}
                </span>
            </p>
            <p>
                <span>
                    {`- ${quotes[number].author} -`}
                </span>
            </p>
        </div>
    );
}
