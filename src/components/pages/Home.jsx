import Card from "../utils/Cards";
import WeatherDate from "../../components/json/weather.json";
export default function Home() {
  return (
    <>
      <div className="bg-[#1B262C]">
        <div className="text-center text-[40px] text-white mb-[60px]">
          <h2>
            Seeing the weather of the whole world <br />
            with <span className="text-[42px] text-[#5C93B1]"> Dark Weather!</span>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-6">
          {WeatherDate.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}
