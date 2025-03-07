export default function Cards({date}){
  const {Country,degree,windSpeed,day,time,status ,image}= date;
  return(
    <>
    <div className="card bg-[#24353E]  relative pt-[160px] pb- px-[50px] ">
            <img  src={image} alt="" className="absolute top-[-60px] right-[-15px] w-[150px]"/>
            <h3>
              {Country} <span>{degree}</span>
            </h3>
            <p>wind speed : {windSpeed}</p>
            <p>{day} : {time}</p>
            <p>{status} </p>
          </div>
    </>
  )
}