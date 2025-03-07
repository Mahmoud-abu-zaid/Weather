export default function Cards({data}){
  const {country,degree,windSpeed,day,time,status ,image}= data;
  return(
    <>
    <div className="card bg-[#24353E]  relative pt-[140px] pb-[25px] px-[50px] ">
            <img  src={image} alt="" className="absolute top-[-60px] right-[-35px] w-[150px]"/>
            <h3 className="text-[25px]">
             <b> {country} <span>{degree}</span></b> 
            </h3>
            <p>wind speed : {windSpeed}</p>
            <p>{day}  {time}</p>
            <p>{status} </p>
          </div>
    </>
  )
}