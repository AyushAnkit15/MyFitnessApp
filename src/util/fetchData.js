 export const exerciseOptions =

  {
   method: 'GET',
   url: 'https://exercisedb.p.rapidapi.com',
   params: { offset:'2'  , limit: '100'},
   headers: {
     'X-RapidAPI-Key': '02d45b402fmshaa2e23bf28f8eb4p1e29cdjsn43ddfa748899',
     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
 };
 
 
export const fetchData =async(url , options)=>{
const response =await fetch(url , options);
const data =await response.json() ;
return data ; 
}

