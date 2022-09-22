import React from "react";
import Charts from "../components/chart/LineChartCustom";
import RadialChart from "../components/chart/RadialChart";

const Home: React.FC = (): JSX.Element => {
  const [temps, setTemps] = React.useState({});
  const [city, setCity] = React.useState<string>("sf");

  React.useEffect(() => {
    Promise.all([
      fetch(`../src/data/sf.json`),
      fetch(`../src/data/ny.json`),
      fetch(`../src/data/am.json`),
    ])
      .then((responses) => Promise.all(responses.map((resp) => resp.json())))
      .then(([sf, ny, am]) => {
        sf.forEach((day) => (day.date = new Date(day.date)));
        ny.forEach((day) => (day.date = new Date(day.date)));
        am.forEach((day) => (day.date = new Date(day.date)));
        setTemps({ sf, ny, am });
      });
  }, []);

  const data = React.useMemo(() => {
    return temps[city];
  }, [city, temps]);

  /**
   * Handle Change City
   * @param e
   */
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>Line Chart</h1>
          <Charts />
        </div>

        <div>
          <h1>Radial Chart</h1>
          <div className="select">
            <select name="city" onChange={updateCity}>
              {[
                { label: "San Francisco", value: "sf" },
                { label: "New York", value: "ny" },
                { label: "Amsterdam", value: "am" },
              ].map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </div>
          <RadialChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
