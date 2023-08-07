export const timeValueSet= (duration) =>  
{
    return Number(duration.slice(0, duration.length - 1));
}
export const timeInHoursSet=(timeInMinutes)=>
{
    return (Math.round(timeInMinutes * 10) / 10).toFixed(1);
}