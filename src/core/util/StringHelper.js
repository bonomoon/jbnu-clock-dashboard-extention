export const renderHTMLStringWithNewLine = (str) => {
  return str.split("\n").map((line) => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });
};

