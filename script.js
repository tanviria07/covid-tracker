 let inNum=document.getElementById('in-num');
 let reNum=document.getElementById('re-num');
 let deNum=document.getElementById('de-num');

 

document.getElementById('btn').addEventListener('click', ()=>{
   const inputValue=document.getElementById('input').value;
   covidData(inputValue);
})

 function covidData(dataVal){
    fetch(`https://covid19.mathdro.id/api/confirmed`)
    .then(res => res.json())
    .then(data => {
      // getData(data);
      console.log(data);
      const infectedCountry= document.getElementById('in-num');
      const infectedAmount=document.getElementById('infec-amount');
      for (let i = 0; i < data.length; i++) {
         const confirmedData = data[i];
         const countryRegion=confirmedData.countryRegion;
         const confirmeInfected=confirmedData.confirmed;
         const recoverdRegion=confirmedData.recovered;
         const deathsRegion=confirmedData.deaths;
         console.log(confirmeInfected);
        if(countryRegion != `${dataVal}`){
            console.log('eror');
        }else{
         document.getElementById('in-num').innerHTML=`${countryRegion}</br>${confirmeInfected}`;
        document.getElementById('re-num').innerHTML=`${countryRegion}</br>${recoverdRegion}`;
        document.getElementById('de-num').innerHTML=`${countryRegion}</br>${deathsRegion}`;
       
           console.log(countryRegion);
        }
      }
       


     }).catch();
 }

 const today=new Date();
 const options={
    weekday:'long',
    day:'numeric',
    month:'long'
 }

 const todayDate=today.toLocaleDateString(options);
 document.getElementById('date1').innerHTML=todayDate;
 document.getElementById('date2').innerHTML=todayDate;
 document.getElementById('date3').innerHTML=todayDate;




 