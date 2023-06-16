import { useState } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";
import Loading from "./components/Loading";
import "./App.css";

type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
        setCity("");
      })
      .catch((err) =>
        alert("エラーが発生しました。ページをリロードしてください。")
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        {loading ? <Loading /> : <Result results={results} />}
      </div>
    </div>
  );
}

export default App;
