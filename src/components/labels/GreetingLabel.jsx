export default function GreetinguLabel(props) {
  const { name, event, styleName } = props;

  return (
    <p className={styleName}>
      <span><strong>{name}</strong></span>
      <span>{` 님의 ${event === "종강" ? "이번" : "다음"} 학기 `}</span>
      <span><strong>{`${event}`}</strong></span>
      <span>{'까지'}</span>
    </p>
  );
}
