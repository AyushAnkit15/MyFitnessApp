 export const exerciseOptions =

  {
   method: 'GET',
   url: 'https://exercisedb.p.rapidapi.com/exercises',
   params: { offset:'2'  , limit: '100'},
   headers: {
     'X-RapidAPI-Key': '5caafc1baemsh0117e549ab47a31p10f1bdjsn0e548b7a2558',
     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
 };
 
 
 const fetchData =async(url , options)=>{
const response =await fetch(url , options);
const data =await response.json() ;
return data ; 
}

export default fetchData ;