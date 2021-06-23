import React,{ useState, useEffect } from 'react';


export default  (props:any) => {


    const [time,setTime] = useState<any>("");
    const [_days,setDays] = useState<any>("");

    const [_hours,setHours] = useState<any>("");
    const [_minutes,setMinutes] = useState<any>("");
    const [_seconds,setSeconds] = useState<any>("");

    function getTimeRemaining(endtime:any){
        const total = Date.parse(endtime) - Date.parse(new Date().toString());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );
      
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
  
    useEffect(()=>{
    const myInterval = setInterval(() => {
        const t = getTimeRemaining(props.date);
        // clock.innerHTML = 'days: ' + t.days + '<br>' +
        //                   'hours: '+ t.hours + '<br>' +
        //                   'minutes: ' + t.minutes + '<br>' +
        //                   'seconds: ' + t.seconds;

        setDays(t.days);
        setHours(t.hours);
        setMinutes(t.minutes);
        setSeconds(t.seconds);


        
        
    
    
    }, 1000)




        return ()=> {
            clearInterval(myInterval);
          };
    });

    return <>{`${_days}D ${_hours}H `}</>;
}

