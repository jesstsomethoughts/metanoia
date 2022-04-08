import "../assets/css/PageTitle.css";

export default function PageTitle({
  titleText,
  subtitleText,
}) {
  const hasSubText = subtitleText !== undefined;
  if (hasSubText) {
    return (
      <div className="pageTitleBackground">
        <h1 className="titleTextWithSubText">
          {titleText}
        </h1>
        <h4 className="subtitleText">{subtitleText}</h4>
      </div>
    );
  }

  return (
    <div className="pageTitleBackground">
      <h1 className="titleText">{titleText}</h1>
    </div>
  );
}
