type ResultPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Result = (props: ResultPropsType) => {
  return (
    <div>
      {props.results.country && (
        <div className="results-country">{props.results.country}</div>
      )}
      {props.results.cityName && (
        <div className="results-city">{props.results.cityName}</div>
      )}
      {props.results.temperature && (
        <div className="results-temp">
          {props.results.temperature} <span>℃</span>
        </div>
      )}
      {props.results.conditionText && props.results.icon && (
        <div className="results-condition">
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      )}
    </div>
  );
};

export default Result;
