
function resutsD2L2() {

 
    // location namme 1
var Nplace1 = document.getElementById("Nplace1").value;
        // data-base 1 name
  var P1Ndatabase1 = document.getElementById("P1Ndatabase1").value;
        //data-base 1 
  var D1P1january = parseInt(document.getElementById("D1P1january").value);
  var D1P1february = parseInt(document.getElementById("D1P1february").value);
  var D1P1march = parseInt(document.getElementById("D1P1march").value);
  var D1P1april = parseInt(document.getElementById("D1P1april").value);
  var D1P1may = parseInt(document.getElementById("D1P1may").value);
  var D1P1june = parseInt(document.getElementById("D1P1june").value);
  var D1P1july = parseInt(document.getElementById("D1P1july").value);
  var D1P1august = parseInt(document.getElementById("D1P1august").value);
  var D1P1september = parseInt(document.getElementById("D1P1september").value);
  var D1P1october = parseInt(document.getElementById("D1P1october").value);
  var D1P1november = parseInt(document.getElementById("D1P1november").value);     
  var D1P1december = parseInt(document.getElementById("D1P1december").value);
        // data-base 2 name
  var P1Ndatabase2 = document.getElementById("P1Ndatabase2").value;
        //data-base 2 
  var D2P1january = parseInt(document.getElementById("D2P1january").value);
  var D2P1february = parseInt(document.getElementById("D2P1february").value);
  var D2P1march = parseInt(document.getElementById("D2P1march").value);
  var D2P1april = parseInt(document.getElementById("D2P1april").value);
  var D2P1may = parseInt(document.getElementById("D2P1may").value);
  var D2P1june = parseInt(document.getElementById("D2P1june").value);
  var D2P1july = parseInt(document.getElementById("D2P1july").value);
  var D2P1august = parseInt(document.getElementById("D2P1august").value);
  var D2P1september = parseInt(document.getElementById("D2P1september").value);
  var D2P1october = parseInt(document.getElementById("D2P1october").value);
  var D2P1november = parseInt(document.getElementById("D2P1november").value);
  var D2P1december = parseInt(document.getElementById("D2P1december").value);


       // location namme 2
 var Nplace2 = document.getElementById("Nplace2").value;
        // data-base 1 name
  var P2Ndatabase1 = document.getElementById("P2Ndatabase1").value;
        //data-base 1 
  var D1P2january = parseInt(document.getElementById("D1P2january").value);
  var D1P2february = parseInt(document.getElementById("D1P2february").value);
  var D1P2march = parseInt(document.getElementById("D1P2march").value);
  var D1P2april = parseInt(document.getElementById("D1P2april").value);
  var D1P2may = parseInt(document.getElementById("D1P2may").value);
  var D1P2june = parseInt(document.getElementById("D1P2june").value);
  var D1P2july = parseInt(document.getElementById("D1P2july").value);
  var D1P2august = parseInt(document.getElementById("D1P2august").value);
  var D1P2september = parseInt(document.getElementById("D1P2september").value);
  var D1P2october = parseInt(document.getElementById("D1P2october").value);
  var D1P2november = parseInt(document.getElementById("D1P2november").value);     
  var D1P2december = parseInt(document.getElementById("D1P2december").value);
        // data-base 2 name
  var P2Ndatabase2 = document.getElementById("P2Ndatabase2").value;
        //data-base 2
  var D2P2january = parseInt(document.getElementById("D2P2january").value);
  var D2P2february = parseInt(document.getElementById("D2P2february").value);
  var D2P2march = parseInt(document.getElementById("D2P2march").value);
  var D2P2april = parseInt(document.getElementById("D2P2april").value);
  var D2P2may = parseInt(document.getElementById("D2P2may").value);
  var D2P2june = parseInt(document.getElementById("D2P2june").value);
  var D2P2july = parseInt(document.getElementById("D2P2july").value);
  var D2P2august = parseInt(document.getElementById("D2P2august").value);
  var D2P2september = parseInt(document.getElementById("D2P2september").value);
  var D2P2october = parseInt(document.getElementById("D2P2october").value);
  var D2P2november = parseInt(document.getElementById("D2P2november").value);
  var D2P2december = parseInt(document.getElementById("D2P2december").value);


  var x_1 = parseInt(document.getElementById("X1").value);
  var x_2 = parseInt(document.getElementById("X2").value);
  var x_3 = parseInt(document.getElementById("X3").value);
  var x_4 = parseInt(document.getElementById("X4").value);

  







//alert bar
  
if (Nplace1 === ""){
  alert("Please enter a valid Location name << location 1 >>");
  return;
  }
  if (Nplace2 === ""){
  alert("Please enter a valid Location name << location 2 >> ");
  return;
  }
  if ((Nplace1 === Nplace2)){
  alert("Please make sure to anter a valid name , May be you have antered the same name of locations");
  return;
  }
  if (P1Ndatabase1=== ""){
  alert("Please enter a valid DATA-BASE 1 name << "+ Nplace1 +" >>");
  return;
  }
  if (P1Ndatabase2 === ""){
  alert("Please enter a valid DATA-BASE 2 name << "+ Nplace1 +" >>");
  return;
  }
  if (P2Ndatabase1=== ""){
  alert("Please enter a valid DATA-BASE 1 name << "+ Nplace2 +" >>");
  return;
  }
  if (P2Ndatabase2 === ""){
  alert("Please enter a valid DATA-BASE 2 name << "+ Nplace2 +" >>");
  return;
  }
  if (P2Ndatabase2 != P1Ndatabase2){
  alert("Please enter the same name of the data-base 2 between location 1 & 2");
  return;
  }
  if (P2Ndatabase1 != P1Ndatabase1){
  alert("Please enter the same name of the data-base 1 between location 1 & 2");
  return;
  }
  
  
  
  if (isNaN(D1P1december) || isNaN(D1P1november) || isNaN(D1P1october)|| isNaN(D1P1september)|| isNaN(D1P1august)|| isNaN(D1P1july)|| isNaN(D1P1june)|| isNaN(D1P1may)|| isNaN(D1P1april)|| isNaN(D1P1march)|| isNaN(D1P1february)|| isNaN(D1P1january)){
  alert("Please enter a valid DNI.[DATA-BASE 1 "+P1Ndatabase1+"  << "+Nplace1+" >> ]...");
  return;
  }
  
  if (isNaN(D2P1january) || isNaN(D2P1november)|| isNaN(D2P1october) || isNaN(D2P1september)|| isNaN(D2P1august)|| isNaN(D2P1july)|| isNaN(D2P1june)|| isNaN(D2P1may)|| isNaN(D2P1april)|| isNaN(D2P1march)|| isNaN(D2P1february)|| isNaN(D2P1january)){
  alert("Please enter a valid DNI.[DATA-BASE 2  "+P1Ndatabase2+" << "+Nplace1+" >> ]...");
  return;
  }
  
  if (isNaN(D1P2january) || isNaN(D1P2november)|| isNaN(D1P2october)|| isNaN(D1P2september)|| isNaN(D1P2august)|| isNaN(D1P2july)|| isNaN(D1P2june)|| isNaN(D1P2may)|| isNaN(D1P2april)|| isNaN(D1P2march)|| isNaN(D1P2february)|| isNaN(D1P2january)){
  alert("Please enter a valid DNI.[DATA-BASE 1  "+P2Ndatabase1+" << "+Nplace2+" >> ]...");
  return;
  }
  if (isNaN(D2P2december) || isNaN(D2P2november)|| isNaN(D2P2october)|| isNaN(D2P2september)|| isNaN(D2P2august)|| isNaN(D2P2july)|| isNaN(D2P2june)|| isNaN(D2P2may)|| isNaN(D2P2april)|| isNaN(D2P2march)|| isNaN(D2P2february)|| isNaN(D2P2january)){
  alert("Please enter a valid DNI.[DATA-BASE 2  "+P2Ndatabase2+" << "+Nplace2+" >> ]...");
  return;
  }
  
  // x
  
  if (isNaN(x_1) || isNaN(x_2)|| isNaN(x_3)|| isNaN(x_4)){
  alert("Please enter a valid X% ...");
  return;
  }
  
  


  

  var schedule = document.getElementById("schedule");
  schedule.innerHTML = "";
  
    var r_ow1 = schedule.insertRow();
    var c_ell1_1 = r_ow1.insertCell(0);
    var c_ell1_2 = r_ow1.insertCell(1);
    var c_ell1_3 = r_ow1.insertCell(2);
    var c_ell1_4 = r_ow1.insertCell(3);
    var c_ell1_5 = r_ow1.insertCell(4);
    var c_ell1_6 = r_ow1.insertCell(5);
    var c_ell1_7 = r_ow1.insertCell(6);
    var c_ell1_8 = r_ow1.insertCell(7);
    var c_ell1_9 = r_ow1.insertCell(8);
    var c_ell1_1_0 = r_ow1.insertCell(9);
    var c_ell1_1_1 = r_ow1.insertCell(10);
    var c_ell1_1_2 = r_ow1.insertCell(11);
    var c_ell1_1_3 = r_ow1.insertCell(12);
    var c_ell1_1_4 = r_ow1.insertCell(13);
    c_ell1_1.innerHTML = Nplace1 ;
    c_ell1_2.innerHTML = P1Ndatabase1 ;
    c_ell1_3.innerHTML = D1P1january;
    c_ell1_4.innerHTML = D1P1february; 
    c_ell1_5.innerHTML = D1P1march; 
    c_ell1_6.innerHTML = D1P1april;
    c_ell1_7.innerHTML = D1P1may; 
    c_ell1_8.innerHTML = D1P1june; 
    c_ell1_9.innerHTML = D1P1july;
    c_ell1_1_0.innerHTML = D1P1august;
    c_ell1_1_1.innerHTML = D1P1september;
    c_ell1_1_2.innerHTML = D1P1october;
    c_ell1_1_3.innerHTML = D1P1november;
    c_ell1_1_4.innerHTML = D1P1december;







    
    var r_ow2 = schedule.insertRow();
    var c_ell1_1 = r_ow2.insertCell(0);
    var c_ell1_2 = r_ow2.insertCell(1);
    var c_ell1_3 = r_ow2.insertCell(2);
    var c_ell1_4 = r_ow2.insertCell(3);
    var c_ell1_5 = r_ow2.insertCell(4);
    var c_ell1_6 = r_ow2.insertCell(5);
    var c_ell1_7 = r_ow2.insertCell(6);
    var c_ell1_8 = r_ow2.insertCell(7);
    var c_ell1_9 = r_ow2.insertCell(8);
    var c_ell1_1_0 = r_ow2.insertCell(9);
    var c_ell1_1_1 = r_ow2.insertCell(10);
    var c_ell1_1_2 = r_ow2.insertCell(11);
    var c_ell1_1_3 = r_ow2.insertCell(12);
    var c_ell1_1_4 = r_ow2.insertCell(13);
    c_ell1_1.innerHTML = Nplace1 ;
    c_ell1_2.innerHTML = P1Ndatabase2 ;
    c_ell1_3.innerHTML = D2P1january;
    c_ell1_4.innerHTML = D2P1february; 
    c_ell1_5.innerHTML = D2P1march; 
    c_ell1_6.innerHTML = D2P1april;
    c_ell1_7.innerHTML = D2P1may; 
    c_ell1_8.innerHTML = D2P1june; 
    c_ell1_9.innerHTML = D2P1july;
    c_ell1_1_0.innerHTML = D2P1august;
    c_ell1_1_1.innerHTML = D2P1september;
    c_ell1_1_2.innerHTML = D2P1october;
    c_ell1_1_3.innerHTML = D2P1november;
    c_ell1_1_4.innerHTML = D2P1december;






    
    var r_ow3 = schedule.insertRow();
    var c_ell1_1 = r_ow3.insertCell(0);
    var c_ell1_2 = r_ow3.insertCell(1);
    var c_ell1_3 = r_ow3.insertCell(2);
    var c_ell1_4 = r_ow3.insertCell(3);
    var c_ell1_5 = r_ow3.insertCell(4);
    var c_ell1_6 = r_ow3.insertCell(5);
    var c_ell1_7 = r_ow3.insertCell(6);
    var c_ell1_8 = r_ow3.insertCell(7);
    var c_ell1_9 = r_ow3.insertCell(8);
    var c_ell1_1_0 = r_ow3.insertCell(9);
    var c_ell1_1_1 = r_ow3.insertCell(10);
    var c_ell1_1_2 = r_ow3.insertCell(11);
    var c_ell1_1_3 = r_ow3.insertCell(12);
    var c_ell1_1_4 = r_ow3.insertCell(13);
    c_ell1_1.innerHTML = Nplace2 ;
    c_ell1_2.innerHTML = P2Ndatabase1;
    c_ell1_3.innerHTML = D1P2january;
    c_ell1_4.innerHTML = D1P2february; 
    c_ell1_5.innerHTML = D1P2march; 
    c_ell1_6.innerHTML = D1P2april;
    c_ell1_7.innerHTML = D1P2may; 
    c_ell1_8.innerHTML = D1P2june; 
    c_ell1_9.innerHTML = D1P2july;
    c_ell1_1_0.innerHTML = D1P2august;
    c_ell1_1_1.innerHTML = D1P2september;
    c_ell1_1_2.innerHTML = D1P2october;
    c_ell1_1_3.innerHTML = D1P2november;
    c_ell1_1_4.innerHTML = D1P2december;





    var r_ow4 = schedule.insertRow();
    var c_ell1_1 = r_ow4.insertCell(0);
    var c_ell1_2 = r_ow4.insertCell(1);
    var c_ell1_3 = r_ow4.insertCell(2);
    var c_ell1_4 = r_ow4.insertCell(3);
    var c_ell1_5 = r_ow4.insertCell(4);
    var c_ell1_6 = r_ow4.insertCell(5);
    var c_ell1_7 = r_ow4.insertCell(6);
    var c_ell1_8 = r_ow4.insertCell(7);
    var c_ell1_9 = r_ow4.insertCell(8);
    var c_ell1_1_0 = r_ow4.insertCell(9);
    var c_ell1_1_1 = r_ow4.insertCell(10);
    var c_ell1_1_2 = r_ow4.insertCell(11);
    var c_ell1_1_3 = r_ow4.insertCell(12);
    var c_ell1_1_4 = r_ow4.insertCell(13);
    c_ell1_1.innerHTML = Nplace2 ;
    c_ell1_2.innerHTML = P2Ndatabase2;
    c_ell1_3.innerHTML = D2P2january;
    c_ell1_4.innerHTML = D2P2february; 
    c_ell1_5.innerHTML = D2P2march; 
    c_ell1_6.innerHTML = D2P2april;
    c_ell1_7.innerHTML = D2P2may; 
    c_ell1_8.innerHTML = D2P2june; 
    c_ell1_9.innerHTML = D2P2july;
    c_ell1_1_0.innerHTML = D2P2august;
    c_ell1_1_1.innerHTML = D2P2september;
    c_ell1_1_2.innerHTML = D2P2october;
    c_ell1_1_3.innerHTML = D2P2november;
    c_ell1_1_4.innerHTML = D2P2december;






    

// Create the chart
var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {

type: "line",
//type:'doughnut',
data: {
labels: [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
datasets: [
{
  label: P1Ndatabase1 +" <<"+ Nplace1+" >>",
  data: [D1P1january, D1P1february, D1P1march, D1P1april, D1P1may, D1P1june, D1P1july, D1P1august, D1P1september, D1P1october, D1P1november, D1P1december],
  borderColor: "rgba(255, 99, 132, 1)",
  borderWidth: 2,
  fill: false
},
{
  label: P1Ndatabase2 +" <<"+ Nplace1+" >>",
  data: [D2P1january, D2P1february, D2P1march, D2P1april, D2P1may, D2P1june, D2P1july, D2P1august, D2P1september, D2P1october, D2P1november, D2P1december],
  borderColor: "rgba(54, 162, 235, 1)",
  borderWidth: 2,
  fill: false
},
{
  label: P2Ndatabase1 +" <<"+ Nplace2+" >>",
  data: [D1P2january, D1P2february, D1P2march, D1P2april, D1P2may, D1P2june, D1P2july, D1P2august, D1P2september, D1P2october, D1P2november, D1P2december],
  borderColor: " rgb(49, 209, 0)",
  borderWidth: 2,
  fill: false
},
{
  label: P2Ndatabase2 +" <<"+ Nplace2+" >>",
  data: [D2P2january, D2P2february, D2P2march, D2P2april, D2P2may, D2P2june, D2P2july, D2P2august, D2P2september, D2P2october, D2P2november, D2P2december],
  borderColor: "rgb(255, 126, 27)",
  borderWidth: 2,
  fill: false
}
]
},
options: {
scales: {
yAxes: [
  {
    type: 'linear',
    position: 'left',
    ticks: {
      beginAtZero: true
    }
  }
]
}
}
});






////////////////////////////////////////////////////////////////////////////////////////////////////

// la somme anuelle  
var SD1P1 = parseFloat(D1P1january) + parseFloat(D1P1february)  + parseFloat(D1P1march) + parseFloat(D1P1april) + parseFloat(D1P1may) + parseFloat(D1P1june) + parseFloat(D1P1july) + parseFloat(D1P1august) + parseFloat(D1P1september) + parseFloat(D1P1october) + parseFloat(D1P1november) + parseFloat(D1P1december);
var SD2P1 = parseFloat(D2P1january) + parseFloat(D2P1february)  + parseFloat(D2P1march) + parseFloat(D2P1april) + parseFloat(D2P1may) + parseFloat(D2P1june) + parseFloat(D2P1july) + parseFloat(D2P1august) + parseFloat(D2P1september) + parseFloat(D2P1october) + parseFloat(D2P1november) + parseFloat(D2P1december);
var SD1P2 = parseFloat(D1P2january) + parseFloat(D1P2february)  + parseFloat(D1P2march) + parseFloat(D1P2april) + parseFloat(D1P2may) + parseFloat(D1P2june) + parseFloat(D1P2july) + parseFloat(D1P2august) + parseFloat(D1P2september) + parseFloat(D1P2october) + parseFloat(D1P2november) + parseFloat(D1P2december);
var SD2P2 = parseFloat(D2P2january) + parseFloat(D2P2february)  + parseFloat(D2P2march) + parseFloat(D2P2april) + parseFloat(D2P2may) + parseFloat(D2P2june) + parseFloat(D2P2july) + parseFloat(D2P2august) + parseFloat(D2P2september) + parseFloat(D2P2october) + parseFloat(D2P2november) + parseFloat(D2P2december);

// Get form and schedule elements

var S_schedule = document.getElementById("S_schedule");
S_schedule.innerHTML = "";



    var row1 = S_schedule.insertRow();
    var cell1_1 = row1.insertCell(0);
    var cell1_2 = row1.insertCell(1);
    var cell1_3 = row1.insertCell(2);
    cell1_1.innerHTML = Nplace1 ;
    cell1_2.innerHTML = P1Ndatabase1 ;
    cell1_3.innerHTML = SD1P1.toFixed(0)  + " (kWh/m2/an) ";


    var row2 = S_schedule.insertRow();
    var cell2_1 = row2.insertCell(0);
    var cell2_2 = row2.insertCell(1);
    var cell2_3 = row2.insertCell(2);
    cell2_1.innerHTML = Nplace1 ;
    cell2_2.innerHTML = P1Ndatabase2 ;
    cell2_3.innerHTML = SD2P1.toFixed(0)  + " (kWh/m2/an) ";


    var row3 = S_schedule.insertRow();
    var cell3_1 = row3.insertCell(0);
    var cell3_2 = row3.insertCell(1);
    var cell3_3 = row3.insertCell(2);
    cell3_1.innerHTML = Nplace2 ;
    cell3_2.innerHTML = P2Ndatabase1 ;
    cell3_3.innerHTML = SD1P2.toFixed(0)  + " (kWh/m2/an) ";


    var row4 = S_schedule.insertRow();
    var cell4_1 = row4.insertCell(0);
    var cell4_2 = row4.insertCell(1);
    var cell4_3 = row4.insertCell(2);
    cell4_1.innerHTML = Nplace2 ;
    cell4_2.innerHTML = P2Ndatabase2 ;
    cell4_3.innerHTML = SD2P2.toFixed(0)  + " (kWh/m2/an) ";




// -------------------graph de la somme anuelle  

var ctx = document.getElementById("Chart_data_anuell").getContext("2d");
    var Chart_data_anuell = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [" ( "+Nplace1 +" - "+P1Ndatabase1 +" ) "," ( "+Nplace1 +" - "+P1Ndatabase2 +" ) "," ( "+Nplace2 +" - "+P2Ndatabase1 +" ) ", " ( "+Nplace2 +" - "+P2Ndatabase2 +" ) "],
        datasets: [
          {
            label: "DNI",
            data: [SD1P1.toFixed(0),SD2P1.toFixed(0),SD1P2.toFixed(0),SD2P2.toFixed(0)],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",

            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",   

            ],
            borderWidth: 1,
          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });



//----------------------------------------------------


// -----------------------------------------------MAX VALEUR ----------------------------------




var largestD1P1 = D1P1january;

if (D1P1february > largestD1P1) {largestD1P1 = D1P1february;    maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  february "}
if (D1P1march > largestD1P1) { largestD1P1 = D1P1march;         maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  march "}
if (D1P1april > largestD1P1) { largestD1P1 = D1P1april;         maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  april "}   
if (D1P1may > largestD1P1) {largestD1P1 = D1P1may;              maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  may "}
if (D1P1june > largestD1P1) { largestD1P1 = D1P1june;           maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  june "}
if (D1P1july > largestD1P1) { largestD1P1 = D1P1july;           maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  july "}
if (D1P1august > largestD1P1) { largestD1P1 = D1P1august;       maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  august "}
if (D1P1september > largestD1P1) { largestD1P1 = D1P1september; maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  september "}   
if (D1P1october > largestD1P1) { largestD1P1 = D1P1october;     maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  october "}
if (D1P1november > largestD1P1) { largestD1P1 = D1P1november;   maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  november "}
if (D1P1december > largestD1P1) { largestD1P1 = D1P1december;   maxD1P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  december "}

var largestD2P1 = D2P1january;

if (D2P1february > largestD2P1) { largestD2P1 = D2P1february;    maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  february "}
if (D2P1march > largestD2P1) { largestD2P1 = D2P1march;          maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  march "}
if (D2P1april > largestD2P1) { largestD2P1 = D2P1april;          maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  april "}   
if (D2P1may > largestD2P1) { largestD2P1 = D2P1may;              maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  may "}
if (D2P1june > largestD2P1) { largestD2P1 = D2P1june;            maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  june "}
if (D2P1july > largestD2P1) { largestD2P1 = D2P1july;            maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  july "}
if (D2P1august > largestD2P1) { largestD2P1 = D2P1august;        maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  august "}
if (D2P1september > largestD2P1) { largestD2P1 = D2P1september;  maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  september "}   
if (D2P1october > largestD2P1) { largestD2P1 = D2P1october;      maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  october "}
if (D2P1november > largestD2P1) { largestD2P1 = D2P1november;    maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  november "}
if (D2P1december > largestD2P1) { largestD2P1 = D2P1december;    maxD2P1.innerHTML="the month that has the highest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  december "}

var largestD1P2 = D1P2january;

if (D1P2february > largestD1P2) { largestD1P2 = D1P2february;   maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  february "}
if (D1P2march > largestD1P2) { largestD1P2 = D1P2march;         maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  march "}
if (D1P2april > largestD1P2) { largestD1P2 = D1P2april;         maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  april "}   
if (D1P2may > largestD1P2) { largestD1P2 = D1P2may;             maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  may "}
if (D1P2june > largestD1P2) { largestD1P2 = D1P2june;           maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  june "}
if (D1P2july > largestD1P2) { largestD1P2 = D1P2july;           maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  july "}
if (D1P2august > largestD1P2) { largestD1P2 = D1P2august;       maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  august "}
if (D1P2september > largestD1P2) { largestD1P2 = D1P2september; maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  september "}   
if (D1P2october > largestD1P2) { largestD1P2 = D1P2october;     maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  october "}
if (D1P2november > largestD1P2) { largestD1P2 = D1P2november;   maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  november "}
if (D1P2december > largestD1P2) { largestD1P2 = D1P2december;   maxD1P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  december "}

var largestD2P2 = D2P2january;

if (D2P2february > largestD2P2) { largestD2P2 = D2P2february;   maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  february "}
if (D2P2march > largestD2P2) { largestD2P2 = D2P2march;         maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  march "}
if (D2P2april > largestD2P2) { largestD2P2 = D2P2april;         maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  april "}   
if (D2P2may > largestD2P2) { largestD2P2 = D2P2may;             maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +"  )   is  :  may "}
if (D2P2june > largestD2P2) { largestD2P2 = D2P2june;           maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  june "}
if (D2P2july > largestD2P2) { largestD2P2 = D2P2july;           maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2+" )   is  :  july "}
if (D2P2august > largestD2P2) { largestD2P2 = D2P2august;        maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  august "}
if (D2P2september > largestD2P2) { largestD2P2 = D2P2september;  maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  september "}   
if (D2P2october > largestD2P2) { largestD2P2 = D2P2october;      maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  november " }
if (D2P2november > largestD2P2) { largestD2P2 = D2P2november;    maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  november "}
if (D2P2december > largestD2P2) { largestD2P2 = D2P2december;    maxD2P2.innerHTML="the month that has the highest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  december "}


//document.getElementById("max_schedul").innerHTML = "The largest number is: " + largestD1P1;



// Get form and schedule elements

var max_schedule = document.getElementById("max_schedule");
max_schedule.innerHTML = "";



    var row_1 = max_schedule.insertRow();
    var cll1_1 = row_1.insertCell(0);
    var cll1_2 = row_1.insertCell(1);
    var cll1_3 = row_1.insertCell(2);
    cll1_1.innerHTML = Nplace1 ;
    cll1_2.innerHTML = P1Ndatabase1 ;
    cll1_3.innerHTML = largestD1P1  + " (kWh/m2/an) ";


    var row_2 = max_schedule.insertRow();
    var cll2_1 = row_2.insertCell(0);
    var cll2_2 = row_2.insertCell(1);
    var cll2_3 = row_2.insertCell(2);
    cll2_1.innerHTML = Nplace1 ;
    cll2_2.innerHTML = P1Ndatabase2 ;
    cll2_3.innerHTML = largestD2P1 + " (kWh/m2/an) ";


    var row_3 = max_schedule.insertRow();
    var cll3_1 = row_3.insertCell(0);
    var cll3_2 = row_3.insertCell(1);
    var cll3_3 = row_3.insertCell(2);
    cll3_1.innerHTML = Nplace2 ;
    cll3_2.innerHTML = P2Ndatabase1 ;
    cll3_3.innerHTML = largestD1P2  + " (kWh/m2/an) ";


    var row_4 = max_schedule.insertRow();
    var cll4_1 = row_4.insertCell(0);
    var cll4_2 = row_4.insertCell(1);
    var cll4_3 = row_4.insertCell(2);
    cll4_1.innerHTML = Nplace2 ;
    cll4_2.innerHTML = P2Ndatabase2 ;
    cll4_3.innerHTML = largestD2P2  + " (kWh/m2/an) ";






    var ctx = document.getElementById("Chart_data_anuell").getContext("2d");
    var Chart_data_anuell = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [" ( "+Nplace1 +" - "+P1Ndatabase1 +" ) "," ( "+Nplace1 +" - "+P1Ndatabase2 +" ) "," ( "+Nplace2 +" - "+P2Ndatabase1 +" ) ", " ( "+Nplace2 +" - "+P2Ndatabase2 +" ) "],
        datasets: [
          {
            label: "DNI",
            data: [SD1P1.toFixed(0),SD2P1.toFixed(0),SD1P2.toFixed(0),SD2P2.toFixed(0)],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",

            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",   

            ],
            borderWidth: 1,
          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });



//---------------------------------------------------------------

var ctx = document.getElementById("graph_data_MAX").getContext("2d");
    var Chart_data_anuell = new Chart(ctx, {
       type: "bar",
      data: {
        labels: [" ( "+Nplace1 +" - "+P1Ndatabase1 +" ) "," ( "+Nplace1 +" - "+P1Ndatabase2 +" ) "," ( "+Nplace2 +" - "+P2Ndatabase1 +" ) ", " ( "+Nplace2 +" - "+P2Ndatabase2 +" ) "],
        datasets: [
          {
            label: "DNI max",
            data: [largestD1P1 ,largestD2P1,largestD1P2,largestD2P2],
            backgroundColor: [

              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",

            ],
            borderColor: [

              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",   

            ],
            borderWidth: 1,
          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });






    
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------
// -----------------------------------------------MIN VALEUR ----------------------------------




var youngestD1P1 = D1P1june;

if (D1P1february < youngestD1P1) {youngestD1P1 = D1P1february;    minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  february "}
if (D1P1march < youngestD1P1) { youngestD1P1 = D1P1march;         minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  march "}
if (D1P1april <youngestD1P1) { youngestD1P1 = D1P1april;         minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  april "}   
if (D1P1may < youngestD1P1) {youngestD1P1 = D1P1may;              minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  may "}
if (D1P1january < youngestD1P1) { youngestD1P1 = D1P1january;           minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  january "}
if (D1P1july < youngestD1P1) { youngestD1P1 = D1P1july;           minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  july "}
if (D1P1august < youngestD1P1) { youngestD1P1 = D1P1august;       minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  august "}
if (D1P1september < youngestD1P1) { youngestD1P1 = D1P1september; minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  september "}   
if (D1P1october < youngestD1P1) { youngestD1P1 = D1P1october;     minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  october "}
if (D1P1november < youngestD1P1) { youngestD1P1 = D1P1november;   minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  november "}
if (D1P1december < youngestD1P1) { youngestD1P1 = D1P1december;   minD1P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase1 +" )   is  :  december "}

var youngestD2P1 = D2P1june;

if (D2P1february < youngestD2P1) { youngestD2P1 = D2P1february;    minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  february "}
if (D2P1march < youngestD2P1) { youngestD2P1 = D2P1march;          minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  march "}
if (D2P1april < youngestD2P1) { youngestD2P1 = D2P1april;          minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  april "}   
if (D2P1may < youngestD2P1) { youngestD2P1 = D2P1may;              minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  may "}
if (D2P1january < youngestD2P1) { youngestD2P1 = D2P1january;      minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  january "}
if (D2P1july < youngestD2P1) { youngestD2P1 = D2P1july;            minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  july "}
if (D2P1august < youngestD2P1) { youngestD2P1 = D2P1august;        minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  august "}
if (D2P1september < youngestD2P1) { youngestD2P1 = D2P1september;  minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  september "}   
if (D2P1october < youngestD2P1) { youngestD2P1 = D2P1october;      minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  october "}
if (D2P1november < youngestD2P1) { youngestD2P1 = D2P1november;    minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  november "}
if (D2P1december < youngestD2P1) { youngestD2P1 = D2P1december;    minD2P1.innerHTML="the month that has the youngest DNI in ( "+Nplace1 +" - "+P1Ndatabase2 +" )   is  :  december "}

var youngestD1P2 = D1P2june;

if (D1P2february < youngestD1P2) { youngestD1P2 = D1P2february;   minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  february "}
if (D1P2march < youngestD1P2) { youngestD1P2 = D1P2march;         minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  march "}
if (D1P2april < youngestD1P2) { youngestD1P2 = D1P2april;         minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  april "}   
if (D1P2may < youngestD1P2) { youngestD1P2 = D1P2may;             minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  may "}
if (D1P2january < youngestD1P2) { youngestD1P2 = D1P2january;     minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  january "}
if (D1P2july < youngestD1P2) { youngestD1P2 = D1P2july;           minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  july "}
if (D1P2august < youngestD1P2) { youngestD1P2 = D1P2august;       minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  august "}
if (D1P2september < youngestD1P2) { youngestD1P2 = D1P2september; minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  september "}   
if (D1P2october < youngestD1P2) { youngestD1P2 = D1P2october;     minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  october "}
if (D1P2november < youngestD1P2) { youngestD1P2 = D1P2november;   minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  november "}
if (D1P2december < youngestD1P2) { youngestD1P2 = D1P2december;   minD1P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase1 +" )   is  :  december "}

var youngestD2P2 = D2P2june;

if (D2P2february < youngestD2P2) { youngestD2P2 = D2P2february;   minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  february "}
if (D2P2march < youngestD2P2) { youngestD2P2 = D2P2march;         minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  march "}
if (D2P2april < youngestD2P2) { youngestD2P2 = D2P2april;         minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  april "}   
if (D2P2may < youngestD2P2) { youngestD2P2 = D2P2may;             minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +"  )   is  :  may "}
if (D2P2january < youngestD2P2) { youngestD2P2 = D2P2january;        minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  january "}
if (D2P2july < youngestD2P2) { youngestD2P2 = D2P2july;           minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2+" )   is  :  july "}
if (D2P2august < youngestD2P2) { youngestD2P2 = D2P2august;        minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  august "}
if (D2P2september < youngestD2P2) { youngestD2P2 = D2P2september;  minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  september "}   
if (D2P2october < youngestD2P2) { youngestD2P2 = D2P2october;      minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  november " }
if (D2P2november < youngestD2P2) { youngestD2P2 = D2P2november;    minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  november "}
if (D2P2december < youngestD2P2) { youngestD2P2 = D2P2december;    minD2P2.innerHTML="the month that has the youngest DNI in ( "+Nplace2 +" - "+P2Ndatabase2 +" )   is  :  december "}


//document.getElementById("max_schedul").innerHTML = "The largest number is: " + largestD1P1;



// Get form and schedule elements

var min_schedule = document.getElementById("min_schedule");
min_schedule.innerHTML = "";



    var row__1 = min_schedule.insertRow();
    var cll1__1 = row__1.insertCell(0);
    var cll1__2 = row__1.insertCell(1);
    var cll1__3 = row__1.insertCell(2);
    cll1__1.innerHTML = Nplace1 ;
    cll1__2.innerHTML = P1Ndatabase1 ;
    cll1__3.innerHTML = youngestD1P1  + " (kWh/m2/mo) ";


    var row__2 = min_schedule.insertRow();
    var cll2__1 = row__2.insertCell(0);
    var cll2__2 = row__2.insertCell(1);
    var cll2__3 = row__2.insertCell(2);
    cll2__1.innerHTML = Nplace1 ;
    cll2__2.innerHTML = P1Ndatabase2 ;
    cll2__3.innerHTML = youngestD2P1 + " (kWh/m2/mo) ";


    var row__3 = min_schedule.insertRow();
    var cll3__1 = row__3.insertCell(0);
    var cll3__2 = row__3.insertCell(1);
    var cll3__3 = row__3.insertCell(2);
    cll3__1.innerHTML = Nplace2 ;
    cll3__2.innerHTML = P2Ndatabase1 ;
    cll3__3.innerHTML = youngestD1P2  + " (kWh/m2/mo) ";


    var row__4 = min_schedule.insertRow();
    var cll4__1 = row__4.insertCell(0);
    var cll4__2 = row__4.insertCell(1);
    var cll4__3 = row__4.insertCell(2);
    cll4__1.innerHTML = Nplace2 ;
    cll4__2.innerHTML = P2Ndatabase2 ;
    cll4__3.innerHTML = youngestD2P2  + " (kWh/m2/mo) ";








var ctx = document.getElementById("graph_data_MIN").getContext("2d");
    var graph_data_MIN = new Chart(ctx, {
       type: "bar",
      data: {
        labels: [" ( "+Nplace1 +" - "+P1Ndatabase1 +" ) "," ( "+Nplace1 +" - "+P1Ndatabase2 +" ) "," ( "+Nplace2 +" - "+P2Ndatabase1 +" ) ", " ( "+Nplace2 +" - "+P2Ndatabase2 +" ) "],
        datasets: [
          {
            label: "DNI MIN",
            data: [youngestD1P1,youngestD2P1,youngestD1P2,youngestD2P2],
            backgroundColor: [

              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",

            ],
            borderColor: [

              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",   

            ],
            borderWidth: 1,
          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////----------extend absolut------------ //////////////////////////////////////////

      var extend_A_D1P1 = largestD1P1 - youngestD1P1 ;
      var extend_A_D2P1 = largestD2P1 - youngestD2P1 ;
      var extend_A_D1P2 = largestD1P2 - youngestD1P2 ;
      var extend_A_D2P2 = largestD2P2 - youngestD2P2 ;


// Get form and schedule elements

var etandu_absolute_schedule = document.getElementById("etandu_absolute_schedule");
etandu_absolute_schedule.innerHTML = "";




    var row__A1 = etandu_absolute_schedule.insertRow();
    var cll1__A1 = row__A1.insertCell(0);
    var cll1__A2 = row__A1.insertCell(1);
    var cll1__A3 = row__A1.insertCell(2);
    cll1__A1.innerHTML = Nplace1 ;
    cll1__A2.innerHTML = P1Ndatabase1 ;
    cll1__A3.innerHTML = extend_A_D1P1  + "  (kWh/m2) ";


    var row__A2 = etandu_absolute_schedule.insertRow();
    var cll2__A1 = row__A2.insertCell(0);
    var cll2__A2 = row__A2.insertCell(1);
    var cll2__A3 = row__A2.insertCell(2);
    cll2__A1.innerHTML = Nplace1 ;
    cll2__A2.innerHTML = P1Ndatabase2 ;
    cll2__A3.innerHTML = extend_A_D2P1 + "  (kWh/m2) ";


    var row__A3 = etandu_absolute_schedule.insertRow();
    var cll3__A1 = row__A3.insertCell(0);
    var cll3__A2 = row__A3.insertCell(1);
    var cll3__A3 = row__A3.insertCell(2);
    cll3__A1.innerHTML = Nplace2 ;
    cll3__A2.innerHTML = P2Ndatabase1 ;
    cll3__A3.innerHTML = extend_A_D1P2  + "  (kWh/m2) ";


    var row__A4 = etandu_absolute_schedule.insertRow();
    var cll4__A1 = row__A4.insertCell(0);
    var cll4__A2 = row__A4.insertCell(1);
    var cll4__A3 = row__A4.insertCell(2);
    cll4__A1.innerHTML = Nplace2 ;
    cll4__A2.innerHTML = P2Ndatabase2 ;
    cll4__A3.innerHTML = extend_A_D2P2  + "  (kWh/m2) ";


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////----------extend relative------------ //////////////////////////////////////////


   var moyD1P1 =(D1P1january + D1P1february + D1P1march + D1P1april + D1P1may + D1P1june + D1P1july + D1P1august + D1P1september + D1P1october + D1P1november + D1P1december)/12;
   var moyD2P1 =(D2P1january + D2P1february + D2P1march + D2P1april + D2P1may + D2P1june + D2P1july + D2P1august + D2P1september + D2P1october + D2P1november + D2P1december)/12;
   var moyD1P2 =(D1P2january + D1P2february + D1P2march + D1P2april + D1P2may + D1P2june + D1P2july + D1P2august + D1P2september + D1P2october + D1P2november + D1P2december)/12;
   var moyD2P2 =(D2P2january + D2P2february + D2P2march + D2P2april + D2P2may + D2P2june + D2P2july + D2P2august + D2P2september + D2P2october + D2P2november + D2P2december)/12;


   var extend_R_D1P1 = (extend_A_D1P1/moyD1P1)*100;
   var extend_R_D2P1 = (extend_A_D2P1/moyD2P1)*100;
   var extend_R_D1P2 = (extend_A_D1P2/moyD1P2)*100;
   var extend_R_D2P2 = (extend_A_D2P2/moyD2P2)*100;

      // Get form and schedule elements

var etandu_relative_schedule = document.getElementById("etandu_relative_schedule");
etandu_relative_schedule.innerHTML = "";


    var row__R1 = etandu_relative_schedule.insertRow();
    var cll1__R1 = row__R1.insertCell(0);
    var cll1__R2 = row__R1.insertCell(1);
    var cll1__R3 = row__R1.insertCell(2);
    cll1__R1.innerHTML = Nplace1 ;
    cll1__R2.innerHTML = P1Ndatabase1 ;
    cll1__R3.innerHTML = extend_R_D1P1.toFixed(2)  + "  (%) ";


    var row__R2 = etandu_relative_schedule.insertRow();
    var cll2__R1 = row__R2.insertCell(0);
    var cll2__R2 = row__R2.insertCell(1);
    var cll2__R3 = row__R2.insertCell(2);
    cll2__R1.innerHTML = Nplace1 ;
    cll2__R2.innerHTML = P1Ndatabase2 ;
    cll2__R3.innerHTML = extend_R_D2P1.toFixed(2) + "  (%) ";


    var row__R3 = etandu_relative_schedule.insertRow();
    var cll3__R1 = row__R3.insertCell(0);
    var cll3__R2 = row__R3.insertCell(1);
    var cll3__R3 = row__R3.insertCell(2);
    cll3__R1.innerHTML = Nplace2 ;
    cll3__R2.innerHTML = P2Ndatabase1 ;
    cll3__R3.innerHTML = extend_R_D1P2.toFixed(2)  + "  (%) ";


    var row__R4 = etandu_relative_schedule.insertRow();
    var cll4__R1 = row__R4.insertCell(0);
    var cll4__R2 = row__R4.insertCell(1);
    var cll4__R3 = row__R4.insertCell(2);
    cll4__R1.innerHTML = Nplace2 ;
    cll4__R2.innerHTML = P2Ndatabase2 ;
    cll4__R3.innerHTML = extend_R_D2P2.toFixed(2)  + "  (%) ";





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////----------Somme saisonnière------------ //////////////////////////////////////////



    var L1 = document.getElementById("L1"); L1.innerHTML = "the seasonal sum of ("+Nplace1+")";
    var L2 = document.getElementById("L2"); L2.innerHTML = "the seasonal sum of ("+Nplace2+")";

    var D11 = document.getElementById("D11"); D11.innerHTML = P1Ndatabase1;
    var D21 = document.getElementById("D21"); D21.innerHTML = P1Ndatabase2;
    var D12 = document.getElementById("D12"); D12.innerHTML = P2Ndatabase1;
    var D22 = document.getElementById("D22"); D22.innerHTML = P2Ndatabase2;

    //D1P1
    var S_hiver_D1P1 = D1P1january + D1P1february + D1P1march;
    var S_print_D1P1 = D1P1april + D1P1may + D1P1june;
    var S_été___D1P1 = D1P1july + D1P1august + D1P1september;
    var S_autom_D1P1 = D1P1october + D1P1november + D1P1december;
    //D2P1
    var S_hiver_D2P1 = D2P1january + D2P1february + D2P1march;
    var S_print_D2P1 = D2P1april + D2P1may + D2P1june;
    var S_été___D2P1 = D2P1july + D2P1august + D2P1september;
    var S_autom_D2P1 = D2P1october + D2P1november + D2P1december;
    //D1P2
    var S_hiver_D1P2 = D1P2january + D1P2february + D1P2march;
    var S_print_D1P2 = D1P2april + D1P2may + D1P2june;
    var S_été___D1P2 = D1P2july + D1P2august + D1P2september;
    var S_autom_D1P2 = D1P2october + D1P2november + D1P2december;
    //D2P2
    var S_hiver_D2P2 = D2P2january + D2P2february + D2P2march;
    var S_print_D2P2 = D2P2april + D2P2may + D2P2june;
    var S_été___D2P2 = D2P2july + D2P2august + D2P2september;
    var S_autom_D2P2 = D2P2october + D2P2november + D2P2december;




    //---------------------- table location 1 -------------------------------

    var L1_saisonn_schedule = document.getElementById("L1_saisonn_schedule");
L1_saisonn_schedule.innerHTML = "";


    var row__SL1_1 = L1_saisonn_schedule.insertRow();
    var cll1__SL1_1 = row__SL1_1.insertCell(0);
    var cll1__SL1_2 = row__SL1_1.insertCell(1);
    var cll1__SL1_3 = row__SL1_1.insertCell(2);
    cll1__SL1_1.innerHTML = "winter" ;
    cll1__SL1_2.innerHTML = S_hiver_D1P1 ;
    cll1__SL1_3.innerHTML = S_hiver_D2P1 ;


    var row__SL1_2 = L1_saisonn_schedule.insertRow();
    var cll2__SL1_1 = row__SL1_2.insertCell(0);
    var cll2__SL1_2 = row__SL1_2.insertCell(1);
    var cll2__SL1_3 = row__SL1_2.insertCell(2);
    cll2__SL1_1.innerHTML = "spring" ;
    cll2__SL1_2.innerHTML = S_print_D1P1 ;
    cll2__SL1_3.innerHTML = S_print_D2P1 ;


    var row__SL1_3 = L1_saisonn_schedule.insertRow();
    var cll3__SL1_1 = row__SL1_3.insertCell(0);
    var cll3__SL1_2 = row__SL1_3.insertCell(1);
    var cll3__SL1_3 = row__SL1_3.insertCell(2);
    cll3__SL1_1.innerHTML = "summer" ;
    cll3__SL1_2.innerHTML = S_été___D1P1 ;
    cll3__SL1_3.innerHTML = S_été___D2P1 ;


    var row__SL1_4 = L1_saisonn_schedule.insertRow();
    var cll4__SL1_1 = row__SL1_4.insertCell(0);
    var cll4__SL1_2 = row__SL1_4.insertCell(1);
    var cll4__SL1_3 = row__SL1_4.insertCell(2);
    cll4__SL1_1.innerHTML = "autumn" ;
    cll4__SL1_2.innerHTML = S_autom_D1P1 ;
    cll4__SL1_3.innerHTML = S_autom_D2P1;




    var L2_saisonn_schedule = document.getElementById("L2_saisonn_schedule");
L2_saisonn_schedule.innerHTML = "";


var row__SL1_1 = L2_saisonn_schedule.insertRow();
    var cll1__SL1_1 = row__SL1_1.insertCell(0);
    var cll1__SL1_2 = row__SL1_1.insertCell(1);
    var cll1__SL1_3 = row__SL1_1.insertCell(2);
    cll1__SL1_1.innerHTML = "winter" ;
    cll1__SL1_2.innerHTML = S_hiver_D1P2 ;
    cll1__SL1_3.innerHTML = S_hiver_D2P2 ;


    var row__SL2_2 = L2_saisonn_schedule.insertRow();
    var cll2__SL2_1 = row__SL2_2.insertCell(0);
    var cll2__SL2_2 = row__SL2_2.insertCell(1);
    var cll2__SL2_3 = row__SL2_2.insertCell(2);
    cll2__SL2_1.innerHTML = "spring" ;
    cll2__SL2_2.innerHTML = S_print_D1P2 ;
    cll2__SL2_3.innerHTML = S_print_D2P2 ;


    var row__SL2_3 = L2_saisonn_schedule.insertRow();
    var cll3__SL2_1 = row__SL2_3.insertCell(0);
    var cll3__SL2_2 = row__SL2_3.insertCell(1);
    var cll3__SL2_3 = row__SL2_3.insertCell(2);
    cll3__SL2_1.innerHTML = "summer" ;
    cll3__SL2_2.innerHTML = S_été___D1P2 ;
    cll3__SL2_3.innerHTML = S_été___D2P2 ;


    var row__SL2_4 = L2_saisonn_schedule.insertRow();
    var cll4__SL2_1 = row__SL2_4.insertCell(0);
    var cll4__SL2_2 = row__SL2_4.insertCell(1);
    var cll4__SL2_3 = row__SL2_4.insertCell(2);
    cll4__SL2_1.innerHTML = "autumn" ;
    cll4__SL2_2.innerHTML = S_autom_D1P2 ;
    cll4__SL2_3.innerHTML = S_autom_D2P2;


    

    var ctx = document.getElementById("graph_L1").getContext("2d");
    var graph_L1 = new Chart(ctx, {
       type: "bar",
      data: {
        labels: ["winter","spring","summer","autumn" ],
        datasets: [
          {
            label: P1Ndatabase1,
            data: [S_hiver_D1P1,S_print_D1P1,S_été___D1P1,S_autom_D1P1],
            backgroundColor: [

              "rgba(255, 99, 133, 0.6)",
              "rgba(255, 99, 133, 0.6)",
              "rgba(255, 99, 133, 0.6)",
              "rgba(255, 99, 133, 0.6)",

            ],
            borderColor: [

            "rgba(255, 99, 133, 1)",
            "rgba(255, 99, 133, 1)",
            "rgba(255, 99, 133, 1)",
            "rgba(255, 99, 133, 1)",

            ],
            borderWidth: 1,
          },
          {
            label: P1Ndatabase2,
            data: [S_hiver_D2P1,S_print_D2P1,S_été___D2P1,S_autom_D2P1],
            backgroundColor: [

              "rgba(54, 162, 236, 0.6)",
              "rgba(54, 162, 236, 0.6)",
              "rgba(54, 162, 236, 0.6)",
              "rgba(54, 162, 236, 0.6)",

            ],
            borderColor: [

            "rgba(54, 162, 236, 1)",
            "rgba(54, 162, 236, 1)",
            "rgba(54, 162, 236, 1)",
            "rgba(54, 162, 236, 1)",

            ],
            borderWidth: 1,
          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });



    // ------------------------------graph season location 2

    var ctx = document.getElementById("graph_L2").getContext("2d");
    var graph_L2 = new Chart(ctx, {
       type: "bar",
      data: {
        labels: ["winter","spring","summer","autumn" ],
        datasets: [
          {
            label: P2Ndatabase1,
            data: [S_hiver_D1P2,S_print_D1P2,S_été___D1P2,S_autom_D1P2],
            backgroundColor: [

            "rgba(255, 206, 86, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(255, 206, 86, 0.6)",

            ],
            borderColor: [

            "rgba(255, 206, 86, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 206, 86, 1)",

            ],
            borderWidth: 1,
          },
          {
            label: P2Ndatabase2,
            data: [S_hiver_D2P2,S_print_D2P2,S_été___D2P2,S_autom_D2P2],
            backgroundColor: [

            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.6)",

            ],
            borderColor: [

            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(75, 192, 192, 0.6)",


            ],
            borderWidth: 1,
          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


/////////////////////////////////////////////----------les scenarios------------ //////////////////////////////////////////

var lo1 =document.getElementById("lo1")
lo1.innerHTML =  "scenarios of location ("+Nplace1+")";
var lo2 =document.getElementById("lo2")
lo2.innerHTML = "scenarios of location ("+Nplace2+")";
  //obtimist mocation 1
var OPTp1 = SD1P1;
var OPTp1jan =D1P1january;
var OPTp1fev = D1P1february;
var OPTp1mar = D1P1march;
var OPTp1avr = D1P1april;
var OPTp1mai = D1P1may;
var OPTp1juin = D1P1june;
var OPTp1juil = D1P1july;
var OPTp1out = D1P1august;
var OPTp1sep = D1P1september;
var OPTp1oct = D1P1october;
var OPTp1nov = D1P1november;
var OPTp1dec = D1P1december; 
 //pisimist location 1
var PIp1 = SD2P1;
var PIp1jan =D2P1january;
var PIp1fev = D2P1february;
var PIp1mar = D2P1march;
var PIp1avr = D2P1april;
var PIp1mai = D2P1may;
var PIp1juin = D2P1june;
var PIp1juil = D2P1july;
var PIp1out = D2P1august;
var PIp1sep = D2P1september;
var PIp1oct = D2P1october;
var PIp1nov = D2P1november;
var PIp1dec = D2P1december; 

if (SD1P1<SD2P1){
        //obtimist mocation 1
var OPTp1 = SD2P1;
var OPTp1jan =D2P1january;
var OPTp1fev = D2P1february;
var OPTp1mar = D2P1march;
var OPTp1avr = D2P1april;
var OPTp1mai = D2P1may;
var OPTp1juin = D2P1june;
var OPTp1juil = D2P1july;
var OPTp1out = D2P1august;
var OPTp1sep = D2P1september;
var OPTp1oct = D2P1october;
var OPTp1nov = D2P1november;
var OPTp1dec = D2P1december; 
//pisimist location 1
var PIp1 = SD1P1;
var PIp1jan =D1P1january;
var PIp1fev = D1P1february;
var PIp1mar = D1P1march;
var PIp1avr = D1P1april;
var PIp1mai = D1P1may;
var PIp1juin = D1P1june;
var PIp1juil = D1P1july;
var PIp1out = D1P1august;
var PIp1sep = D1P1september;
var PIp1oct = D1P1october;
var PIp1nov = D1P1november;
var PIp1dec = D1P1december; 
}

//moyenne

var MOYp1jan = (PIp1jan + OPTp1jan)/2;
var MOYp1fev = (PIp1fev + OPTp1fev)/2;
var MOYp1mar = (PIp1mar + OPTp1mar)/2;
var MOYp1avr = (PIp1avr + OPTp1avr)/2;
var MOYp1mai = (PIp1mai + OPTp1mai)/2;
var MOYp1juin = (PIp1juin + OPTp1juin)/2;
var MOYp1juil = (PIp1juil + OPTp1juil)/2;
var MOYp1out = (PIp1out + OPTp1out)/2;
var MOYp1sep = (PIp1sep + OPTp1sep)/2;
var MOYp1oct = (PIp1oct + OPTp1oct)/2;
var MOYp1nov = (PIp1nov + OPTp1nov)/2;
var MOYp1dec = (PIp1dec + OPTp1dec)/2;


var S_opt="optimistic scenario";
var S_moy="average scenario";
var S_pi="pessimistic scenario";



var table_senarios1_schedule = document.getElementById("table_senarios1_schedule");
table_senarios1_schedule.innerHTML = "";


var rowS_1 = table_senarios1_schedule.insertRow();
var cll1S_1 = rowS_1.insertCell(0);
var cll1S_2 = rowS_1.insertCell(1);
var cll1S_3 = rowS_1.insertCell(2);
var cll1S_4 = rowS_1.insertCell(3);
var cll1S_5 = rowS_1.insertCell(4);       
var cll1S_6 = rowS_1.insertCell(5);
var cll1S_7 = rowS_1.insertCell(6);        
var cll1S_8 = rowS_1.insertCell(7);
var cll1S_9 = rowS_1.insertCell(8);        
var cll1S_1_0 = rowS_1.insertCell(9);
var cll1S_1_1= rowS_1.insertCell(10);        
var cll1S_1_2 = rowS_1.insertCell(11);
var cll1S_1_3 = rowS_1.insertCell(12);

cll1S_1.innerHTML = S_opt ;
cll1S_2.innerHTML = OPTp1jan ;
cll1S_3.innerHTML = OPTp1fev ;
cll1S_4.innerHTML = OPTp1mar ;
cll1S_5.innerHTML = OPTp1avr ;
cll1S_6.innerHTML = OPTp1mai ;
cll1S_7.innerHTML = OPTp1juin ;        
cll1S_8.innerHTML = OPTp1juil ;
cll1S_9.innerHTML = OPTp1out ;        
cll1S_1_0.innerHTML = OPTp1sep ;
cll1S_1_1.innerHTML = OPTp1oct ;        
cll1S_1_2.innerHTML = OPTp1nov ;
cll1S_1_3.innerHTML = OPTp1dec ;

//moy



var rowS_2 = table_senarios1_schedule.insertRow();
var cll1S_1 = rowS_2.insertCell(0);
var cll1S_2 = rowS_2.insertCell(1);
var cll1S_3 = rowS_2.insertCell(2);
var cll1S_4 = rowS_2.insertCell(3);
var cll1S_5 = rowS_2.insertCell(4);       
var cll1S_6 = rowS_2.insertCell(5);
var cll1S_7 = rowS_2.insertCell(6);        
var cll1S_8 = rowS_2.insertCell(7);
var cll1S_9 = rowS_2.insertCell(8);        
var cll1S_1_0 = rowS_2.insertCell(9);
var cll1S_1_1= rowS_2.insertCell(10);        
var cll1S_1_2 = rowS_2.insertCell(11);
var cll1S_1_3 = rowS_2.insertCell(12);

cll1S_1.innerHTML = S_moy ;
cll1S_2.innerHTML = MOYp1jan  ;
cll1S_3.innerHTML = MOYp1fev  ;
cll1S_4.innerHTML = MOYp1mar  ;
cll1S_5.innerHTML = MOYp1avr  ;
cll1S_6.innerHTML = MOYp1mai  ;
cll1S_7.innerHTML = MOYp1juin  ;        
cll1S_8.innerHTML = MOYp1juil  ;
cll1S_9.innerHTML = MOYp1out  ;        
cll1S_1_0.innerHTML = MOYp1sep  ;
cll1S_1_1.innerHTML = MOYp1oct  ;        
cll1S_1_2.innerHTML = MOYp1nov  ;
cll1S_1_3.innerHTML = MOYp1dec  ;


//pis

var rowS_3 = table_senarios1_schedule.insertRow();
var cll1S_1 = rowS_3.insertCell(0);
var cll1S_2 = rowS_3.insertCell(1);
var cll1S_3 = rowS_3.insertCell(2);
var cll1S_4 = rowS_3.insertCell(3);
var cll1S_5 = rowS_3.insertCell(4);       
var cll1S_6 = rowS_3.insertCell(5);
var cll1S_7 = rowS_3.insertCell(6);        
var cll1S_8 = rowS_3.insertCell(7);
var cll1S_9 = rowS_3.insertCell(8);        
var cll1S_1_0 = rowS_3.insertCell(9);
var cll1S_1_1= rowS_3.insertCell(10);        
var cll1S_1_2 = rowS_3.insertCell(11);
var cll1S_1_3 = rowS_3.insertCell(12);

cll1S_1.innerHTML = S_pi ;
cll1S_2.innerHTML = PIp1jan  ;
cll1S_3.innerHTML = PIp1fev  ;
cll1S_4.innerHTML = PIp1mar  ;
cll1S_5.innerHTML = PIp1avr  ;
cll1S_6.innerHTML = PIp1mai  ;
cll1S_7.innerHTML = PIp1juin  ;        
cll1S_8.innerHTML = PIp1juil  ;
cll1S_9.innerHTML = PIp1out  ;        
cll1S_1_0.innerHTML = PIp1sep  ;
cll1S_1_1.innerHTML = PIp1oct  ;        
cll1S_1_2.innerHTML = PIp1nov  ;
cll1S_1_3.innerHTML = PIp1dec  ;




//graph of scenrios



var ctx = document.getElementById("graph_SC_L1").getContext("2d");
    var graph_L2 = new Chart(ctx, {
        type: "line",
//type:'doughnut',
        data: {
        labels: [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
        datasets: [
        {
            label: S_pi,
            data: [PIp1jan,PIp1fev,PIp1mar,PIp1avr,PIp1mai,PIp1juin,PIp1juil,PIp1out,PIp1sep,PIp1oct,PIp1nov,PIp1dec],
            backgroundColor: [

            "rgba(235, 0, 0)",

            ],
            borderColor: [

            "rgba(235, 0, 0)",


            ],
            borderWidth: 2 ,
            fill: false

          },
          {
            label: S_moy,
            data: [MOYp1jan,MOYp1fev,MOYp1mar,MOYp1avr,MOYp1mai,MOYp1juin,MOYp1juil,MOYp1out,MOYp1sep,MOYp1oct,MOYp1nov,MOYp1dec],
            backgroundColor: [

            "rgba(255, 251, 0, 0.977)",

            ],
            borderColor: [

            "rgba(255, 251, 0, 0.977)",


            ],
            borderWidth: 2 ,
            fill: false

          },
          {
            label: S_opt,
            data: [OPTp1jan,OPTp1fev,OPTp1mar,OPTp1avr,OPTp1mai,OPTp1juin,OPTp1juil,OPTp1out,OPTp1sep,OPTp1oct,OPTp1nov,OPTp1dec],
            backgroundColor: [

            "rgba(52, 196, 0)",
            ],
            borderColor: [

            "rgba(52, 196, 0)",

            ],
            borderWidth: 2 ,
            fill: false

          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });



/////////////////////////////////////////////----------end  scenarios------------ //////////////////////////////////////////

/////////////////////////////////////////////----------location2  scenarios------------ //////////////////////////////////////////

  //obtimist mocation 1
var OPTp2 = SD1P2;
var OPTp2jan =D1P2january;
var OPTp2fev = D1P2february;
var OPTp2mar = D1P2march;
var OPTp2avr = D1P2april;
var OPTp2mai = D1P2may;
var OPTp2juin = D1P2june;
var OPTp2juil = D1P2july;
var OPTp2out = D1P2august;
var OPTp2sep = D1P2september;
var OPTp2oct = D1P2october;
var OPTp2nov = D1P2november;
var OPTp2dec = D1P2december; 
 //pisimist location 1
var PIp2 = SD2P2;
var PIp2jan =D2P2january;
var PIp2fev = D2P2february;
var PIp2mar = D2P2march;
var PIp2avr = D2P2april;
var PIp2mai = D2P2may;
var PIp2juin = D2P2june;
var PIp2juil = D2P2july;
var PIp2out = D2P2august;
var PIp2sep = D2P2september;
var PIp2oct = D2P2october;
var PIp2nov = D2P2november;
var PIp2dec = D2P2december; 

if (SD1P2<SD2P2){
        //obtimist mocation 1
var OPTp2 = SD2P2;
var OPTp2jan =D2P2january;
var OPTp2fev = D2P2february;
var OPTp2mar = D2P2march;
var OPTp2avr = D2P2april;
var OPTp2mai = D2P2may;
var OPTp2juin = D2P2june;
var OPTp2juil = D2P2july;
var OPTp2out = D2P2august;
var OPTp2sep = D2P2september;
var OPTp2oct = D2P2october;
var OPTp2nov = D2P2november;
var OPTp2dec = D2P2december; 
//pisimist location 1
var PIp2 = SD1P2;
var PIp2jan =D1P2january;
var PIp2fev = D1P2february;
var PIp2mar = D1P2march;
var PIp2avr = D1P2april;
var PIp2mai = D1P2may;
var PIp2juin = D1P2june;
var PIp2juil = D1P2july;
var PIp2out = D1P2august;
var PIp2sep = D1P2september;
var PIp2oct = D1P2october;
var PIp2nov = D1P2november;
var PIp2dec = D1P2december; 
}

//moyenne

var MOYp2jan = (PIp2jan + OPTp2jan)/2;
var MOYp2fev = (PIp2fev + OPTp2fev)/2;
var MOYp2mar = (PIp2mar + OPTp2mar)/2;
var MOYp2avr = (PIp2avr + OPTp2avr)/2;
var MOYp2mai = (PIp2mai + OPTp2mai)/2;
var MOYp2juin = (PIp2juin + OPTp2juin)/2;
var MOYp2juil = (PIp2juil + OPTp2juil)/2;
var MOYp2out = (PIp2out + OPTp2out)/2;
var MOYp2sep = (PIp2sep + OPTp2sep)/2;
var MOYp2oct = (PIp2oct + OPTp2oct)/2;
var MOYp2nov = (PIp2nov + OPTp2nov)/2;
var MOYp2dec = (PIp2dec + OPTp2dec)/2;


var S_opt_p2="optimistic scenario";
var S_moy_p2="average scenario";
var S_pi_p2="pessimistic scenario";



var table_senarios2_schedule = document.getElementById("table_senarios2_schedule");
table_senarios2_schedule.innerHTML = "";


var rowS_p2_1 = table_senarios2_schedule.insertRow();
var cll2S_1 = rowS_p2_1.insertCell(0);
var cll2S_2 = rowS_p2_1.insertCell(1);
var cll2S_3 = rowS_p2_1.insertCell(2);
var cll2S_4 = rowS_p2_1.insertCell(3);
var cll2S_5 = rowS_p2_1.insertCell(4);       
var cll2S_6 = rowS_p2_1.insertCell(5);
var cll2S_7 = rowS_p2_1.insertCell(6);        
var cll2S_8 = rowS_p2_1.insertCell(7);
var cll2S_9 = rowS_p2_1.insertCell(8);        
var cll2S_1_0 = rowS_p2_1.insertCell(9);
var cll2S_1_1= rowS_p2_1.insertCell(10);        
var cll2S_1_2 = rowS_p2_1.insertCell(11);
var cll2S_1_3 = rowS_p2_1.insertCell(12);

cll2S_1.innerHTML = S_opt_p2 ;
cll2S_2.innerHTML = OPTp2jan  ;
cll2S_3.innerHTML = OPTp2fev  ;
cll2S_4.innerHTML = OPTp2mar  ;
cll2S_5.innerHTML = OPTp2avr  ;
cll2S_6.innerHTML = OPTp2mai  ;
cll2S_7.innerHTML = OPTp2juin  ;        
cll2S_8.innerHTML = OPTp2juil  ;
cll2S_9.innerHTML = OPTp2out  ;        
cll2S_1_0.innerHTML = OPTp2sep  ;
cll2S_1_1.innerHTML = OPTp2oct  ;        
cll2S_1_2.innerHTML = OPTp2nov  ;
cll2S_1_3.innerHTML = OPTp2dec  ;

//moy



var rowS_p2_2 = table_senarios2_schedule.insertRow();
var cll2S_1 = rowS_p2_2.insertCell(0);
var cll2S_2 = rowS_p2_2.insertCell(1);
var cll2S_3 = rowS_p2_2.insertCell(2);
var cll2S_4 = rowS_p2_2.insertCell(3);
var cll2S_5 = rowS_p2_2.insertCell(4);       
var cll2S_6 = rowS_p2_2.insertCell(5);
var cll2S_7 = rowS_p2_2.insertCell(6);        
var cll2S_8 = rowS_p2_2.insertCell(7);
var cll2S_9 = rowS_p2_2.insertCell(8);        
var cll2S_1_0 = rowS_p2_2.insertCell(9);
var cll2S_1_1= rowS_p2_2.insertCell(10);        
var cll2S_1_2 = rowS_p2_2.insertCell(11);
var cll2S_1_3 = rowS_p2_2.insertCell(12);

cll2S_1.innerHTML = S_moy_p2 ;
cll2S_2.innerHTML = MOYp2jan ;
cll2S_3.innerHTML = MOYp2fev ;
cll2S_4.innerHTML = MOYp2mar ;
cll2S_5.innerHTML = MOYp2avr ;
cll2S_6.innerHTML = MOYp2mai ;
cll2S_7.innerHTML = MOYp2juin ;        
cll2S_8.innerHTML = MOYp2juil ;
cll2S_9.innerHTML = MOYp2out ;        
cll2S_1_0.innerHTML = MOYp2sep ;
cll2S_1_1.innerHTML = MOYp2oct ;        
cll2S_1_2.innerHTML = MOYp2nov ;
cll2S_1_3.innerHTML = MOYp2dec ;


//pis

var rowS_p2_3 = table_senarios2_schedule.insertRow();
var cll2S_1 = rowS_p2_3.insertCell(0);
var cll2S_2 = rowS_p2_3.insertCell(1);
var cll2S_3 = rowS_p2_3.insertCell(2);
var cll2S_4 = rowS_p2_3.insertCell(3);
var cll2S_5 = rowS_p2_3.insertCell(4);       
var cll2S_6 = rowS_p2_3.insertCell(5);
var cll2S_7 = rowS_p2_3.insertCell(6);        
var cll2S_8 = rowS_p2_3.insertCell(7);
var cll2S_9 = rowS_p2_3.insertCell(8);        
var cll2S_1_0 = rowS_p2_3.insertCell(9);
var cll2S_1_1= rowS_p2_3.insertCell(10);        
var cll2S_1_2 = rowS_p2_3.insertCell(11);
var cll2S_1_3 = rowS_p2_3.insertCell(12);

cll2S_1.innerHTML = S_pi_p2 ;
cll2S_2.innerHTML = PIp2jan  ;
cll2S_3.innerHTML = PIp2fev  ;
cll2S_4.innerHTML = PIp2mar  ;
cll2S_5.innerHTML = PIp2avr  ;
cll2S_6.innerHTML = PIp2mai  ;
cll2S_7.innerHTML = PIp2juin  ;        
cll2S_8.innerHTML = PIp2juil  ;
cll2S_9.innerHTML = PIp2out  ;        
cll2S_1_0.innerHTML = PIp2sep  ;
cll2S_1_1.innerHTML = PIp2oct  ;        
cll2S_1_2.innerHTML = PIp2nov  ;
cll2S_1_3.innerHTML = PIp2dec  ;




//graph of scenrios



var ctx = document.getElementById("graph_SC_L2").getContext("2d");
    var graph_L2 = new Chart(ctx, {
        type: "line",
//type:'doughnut',
        data: {
        labels: [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
        datasets: [
        {
            label: S_pi,
            data: [PIp2jan,PIp2fev,PIp2mar,PIp2avr,PIp2mai,PIp2juin,PIp2juil,PIp2out,PIp2sep,PIp2oct,PIp2nov,PIp2dec],
            backgroundColor: [

            "rgba(235, 0, 0)",

            ],
            borderColor: [

            "rgba(235, 0, 0)",


            ],
            borderWidth: 2 ,
            fill: false

          },
          {
            label: S_moy,
            data: [MOYp2jan,MOYp2fev,MOYp2mar,MOYp2avr,MOYp2mai,MOYp2juin,MOYp2juil,MOYp2out,MOYp2sep,MOYp2oct,MOYp2nov,MOYp2dec],
            backgroundColor: [

            "rgba(255, 251, 0, 0.977)",

            ],
            borderColor: [

            "rgba(255, 251, 0, 0.977)",


            ],
            borderWidth: 2 ,
            fill: false

          },
          {
            label: S_opt,
            data: [OPTp2jan,OPTp2fev,OPTp2mar,OPTp2avr,OPTp2mai,OPTp2juin,OPTp2juil,OPTp2out,OPTp2sep,OPTp2oct,OPTp2nov,OPTp2dec],
            backgroundColor: [

            "rgba(52, 196, 0)",
            ],
            borderColor: [

            "rgba(52, 196, 0)",

            ],
            borderWidth: 2 ,
            fill: false

          },



        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    




    //---------------------------------new data--------////////

    //location1
    
    n_d_janP1 = (D1P1january + D2P1january)/2;
    n_d_fevP1 = (D1P1february + D2P1february)/2;
    n_d_marP1 = (D1P1march + D2P1march)/2;
    n_d_avrP1 = (D1P1april + D2P1april)/2;
    n_d_maiP1 = (D1P1may + D2P1may)/2;
    n_d_juiP1 = (D1P1june + D2P1june)/2;
    n_d_jilP1 = (D1P1july + D2P1july)/2;
    n_d_outP1 = (D1P1august + D2P1august)/2;
    n_d_sepP1 = (D1P1september + D2P1september)/2;
    n_d_octP1 = (D1P1october + D2P1october)/2;
    n_d_novP1 = (D1P1november + D2P1november)/2;
    n_d_decP1 = (D1P1december + D2P1december)/2;

    //location2

    n_d_janP2 = (D1P2january + D2P2january)/2;
    n_d_fevP2 = (D1P2february + D2P2february)/2;
    n_d_marP2 = (D1P2march + D2P2march)/2;
    n_d_avrP2 = (D1P2april + D2P2april)/2;
    n_d_maiP2 = (D1P2may + D2P2may)/2;
    n_d_juiP2 = (D1P2june + D2P2june)/2;
    n_d_jilP2 = (D1P2july + D2P2july)/2;
    n_d_outP2 = (D1P2august + D2P2august)/2;
    n_d_sepP2 = (D1P2september + D2P2september)/2;
    n_d_octP2 = (D1P2october + D2P2october)/2;
    n_d_novP2 = (D1P2november + D2P2november)/2;
    n_d_decP2 = (D1P2december + D2P2december)/2;




    
var table_content_new_data = document.getElementById("table_content_new_data");
table_content_new_data.innerHTML = "";



    var n_d_row1 = table_content_new_data.insertRow();
    var cell1_n_d_1 = n_d_row1.insertCell(0);
    var cell1_n_d_2 = n_d_row1.insertCell(1);
    var cell1_n_d_3 = n_d_row1.insertCell(2);
    var cell1_n_d_4 = n_d_row1.insertCell(3);
    var cell1_n_d_5 = n_d_row1.insertCell(4);
    var cell1_n_d_6 = n_d_row1.insertCell(5);
    var cell1_n_d_7 = n_d_row1.insertCell(6);
    var cell1_n_d_8 = n_d_row1.insertCell(7);
    var cell1_n_d_9 = n_d_row1.insertCell(8);
    var cell1_n_d_1_0 = n_d_row1.insertCell(9);
    var cell1_n_d_1_1 = n_d_row1.insertCell(10);
    var cell1_n_d_1_2 = n_d_row1.insertCell(11);
    var cell1_n_d_1_3 = n_d_row1.insertCell(12);

    cell1_n_d_1.innerHTML = Nplace2 ;
    cell1_n_d_2.innerHTML = n_d_janP1 ;
    cell1_n_d_3.innerHTML = n_d_fevP1 ;
    cell1_n_d_4.innerHTML = n_d_marP1 ;
    cell1_n_d_5.innerHTML = n_d_avrP1 ;
    cell1_n_d_6.innerHTML = n_d_maiP1 ;
    cell1_n_d_7.innerHTML = n_d_juiP1 ;
    cell1_n_d_8.innerHTML = n_d_jilP1 ;
    cell1_n_d_9.innerHTML = n_d_outP1 ;
    cell1_n_d_1_0.innerHTML = n_d_sepP1 ;
    cell1_n_d_1_1.innerHTML = n_d_octP1 ;
    cell1_n_d_1_2.innerHTML = n_d_novP1 ;
    cell1_n_d_1_3.innerHTML = n_d_decP1 ;


    var n_d_row2 = table_content_new_data.insertRow();
    var cell2_n_d_1 = n_d_row2.insertCell(0);
    var cell2_n_d_2 = n_d_row2.insertCell(1);
    var cell2_n_d_3 = n_d_row2.insertCell(2);
    var cell2_n_d_4 = n_d_row2.insertCell(3);
    var cell2_n_d_5 = n_d_row2.insertCell(4);
    var cell2_n_d_6 = n_d_row2.insertCell(5);
    var cell2_n_d_7 = n_d_row2.insertCell(6);
    var cell2_n_d_8 = n_d_row2.insertCell(7);
    var cell2_n_d_9 = n_d_row2.insertCell(8);
    var cell2_n_d_1_0 = n_d_row2.insertCell(9);
    var cell2_n_d_1_1 = n_d_row2.insertCell(10);
    var cell2_n_d_1_2 = n_d_row2.insertCell(11);
    var cell2_n_d_1_3 = n_d_row2.insertCell(12);

    cell2_n_d_1.innerHTML = Nplace2 ;
    cell2_n_d_2.innerHTML = n_d_janP2;
    cell2_n_d_3.innerHTML = n_d_fevP2;
    cell2_n_d_4.innerHTML = n_d_marP2;
    cell2_n_d_5.innerHTML = n_d_avrP2;
    cell2_n_d_6.innerHTML = n_d_maiP2;
    cell2_n_d_7.innerHTML = n_d_juiP2;
    cell2_n_d_8.innerHTML = n_d_jilP2;
    cell2_n_d_9.innerHTML = n_d_outP2;
    cell2_n_d_1_0.innerHTML = n_d_sepP2;
    cell2_n_d_1_1.innerHTML = n_d_octP2;
    cell2_n_d_1_2.innerHTML = n_d_novP2;
    cell2_n_d_1_3.innerHTML = n_d_decP2;






    ////////////////////////





    var ctx = document.getElementById("graph_content_new_data").getContext("2d");
    var graph_L2 = new Chart(ctx, {
      type: "line",
      data: {
        labels: [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
        datasets: [
          {
            label: Nplace1,
            data: [n_d_janP1,n_d_fevP1,n_d_marP1,n_d_avrP1,n_d_maiP1,n_d_juiP1,n_d_jilP1,n_d_outP1,n_d_sepP1,n_d_octP1,n_d_novP1,n_d_decP1],
            backgroundColor: [

            "rgba(255, 206, 86, 0.6)",


            ],
            borderColor: [

            "rgba(255, 206, 86, 1)",


            ],
            borderWidth: 2,
            fill: false

          },
          {
            label: Nplace2,
            data: [n_d_janP2,n_d_fevP2,n_d_marP2,n_d_avrP2,n_d_maiP2,n_d_juiP2,n_d_jilP2,n_d_outP2,n_d_sepP2,n_d_octP2,n_d_novP2,n_d_decP2],
            backgroundColor: [

            "rgba(255, 0, 0)",


            ],
            borderColor: [

            "rgba(255, 0, 0)",


            ],
            borderWidth: 2,
            fill: false

          }

        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


// la somme anuelle NEW data

var SP1 = (SD1P1 + SD2P1)/2;
var SP2 = (SD1P2 + SD2P2)/2;




var table_content_n_d_anuell = document.getElementById("table_content_n_d_anuell");
table_content_n_d_anuell.innerHTML = "";



    var s_rw_1 = table_content_n_d_anuell.insertRow();
    var cell1s_1 = s_rw_1.insertCell(0);
    var cell1s_2 = s_rw_1.insertCell(1);
    cell1s_1.innerHTML = Nplace1 ;
    cell1s_2.innerHTML = SP1+" (kWh/m2/y)" ;

    var s_rw_2 = table_content_n_d_anuell.insertRow();
    var cell1s_1 = s_rw_2.insertCell(0);
    var cell1s_2 = s_rw_2.insertCell(1);
    cell1s_1.innerHTML = Nplace2 ;
    cell1s_2.innerHTML = SP2+" (kWh/m2/y)" ;

    //graph


var ctx = document.getElementById("graph_content_n_d_anuell").getContext("2d");
    var graph_L2 = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: Nplace1,
            data: [SP1.toFixed(2)],
            backgroundColor: [

            "rgba(255, 206, 86, 0.6)",



            ],
            borderColor: [

            "rgba(255, 206, 86, 1)",



            ],
            borderWidth: 2,

          },
          {
            label: [Nplace2],
            data: [SP2.toFixed(2)],
            backgroundColor: [

            "rgba(255, 0, 0)",



            ],
            borderColor: [

            "rgba(255, 0, 0)",



            ],
            borderWidth: 2,

          },
          
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });



//notation___--------------------------------------------------------------


var n_moy_P1 = document.getElementById("not_moy_P1");
var n_moy_P2 = document.getElementById("not_moy_P2");


notation_L1 = (n_D1P1 + n_D2P1)/2;
notation_L2 = (n_D1P2 + n_D2P2)/2;

n_moy_P1.innerHTML="the middle evaluation of  -"+Nplace1+"-  is : ( "+notation_L1+"/4 )";
n_moy_P2.innerHTML="the middle evaluation of  -"+Nplace2+"-  is : ( "+notation_L2+"/4 )";

if(notation_L1>notation_L2){

}
//classement par notation
var n_loca2_classement_ = document.getElementById("n_loca2_classement_");
var n_loca1_classement_ = document.getElementById("n_loca1_classement_");

var numero_de_location1 = document.getElementById("numero_de_location1");
var le_nome_loca_1 = document.getElementById("le_nome_loca_1");

var numero_de_location2 = document.getElementById("numero_de_location2");
var le_nome_loca_2 = document.getElementById("le_nome_loca_2");



if(notation_L1 > notation_L2){
xx=50;
yy=90;
le_nome_loca_2.innerHTML=Nplace2
numero_de_location2.innerHTML="RANK -2-"

le_nome_loca_1.innerHTML=Nplace1
numero_de_location1.innerHTML="RANK -1-"


}
if(notation_L1 < notation_L2){
yy=50;
xx=90;
le_nome_loca_2.innerHTML=Nplace2
numero_de_location2.innerHTML="RANK -1-"

le_nome_loca_1.innerHTML=Nplace1
numero_de_location1.innerHTML="RANK -2-"
}
if(notation_L1 === notation_L2){
xx=50;
yy=50;
le_nome_loca_2.innerHTML=Nplace2
numero_de_location2.innerHTML="RANK -1-"

le_nome_loca_1.innerHTML=Nplace1
numero_de_location1.innerHTML="RANK -1-"
}
n_loca2_classement_.style.height = xx +"%";
n_loca1_classement_.style.height = yy +"%";




///////////////////////////////////-RANKIN-----------------------------------------------
var d1_n2=2;
var d1_n1=1;




if(SD1P2<SD1P1){
class_SD1P1 = d1_n1;
class_SD1P2 = d1_n2;

var aaa=1;
}else{
var aaa=0;
}

if (SD1P2>SD1P1){
class_SD1P1 = d1_n2;
class_SD1P2 = d1_n1;

var bbb=1


}else{
var bbb=0

}

if (SD1P2===SD1P1){
class_SD1P1 = d1_n1;
class_SD1P2 = d1_n1;

var ccc=1;
}else{
var ccc=0;
}



////////


var d2_n2=2;
var d2_n1=1;


if(SD2P2<SD2P1){
class_SD2P1 = d2_n1;
class_SD2P2 = d2_n2;

var ddd=1;
}else{
var ddd=0;
}

if (SD2P2>SD2P1){
class_SD2P1 = d2_n2;
class_SD2P2 = d2_n1;

var eee=1;


}else{
var eee=0;
}

if (SD2P2===SD2P1){
class_SD2P1 = d2_n1;
class_SD2P2 = d2_n1;
fff=1;
}else{
var fff=0;
}

n_clas_P1_1 = fff+ddd+ccc+aaa;
n_clas_P1_2 = eee+bbb;
n_clas_P2_1 = fff+eee+ccc+bbb;
n_clas_P2_2 = aaa+ddd;

p_n_clas_P1_1=(n_clas_P1_1/2)*100;
p_n_clas_P1_2=(n_clas_P1_2/2)*100;
p_n_clas_P2_1=(n_clas_P2_1/2)*100;
p_n_clas_P2_2=(n_clas_P2_2/2)*100;

avr_n_clas_P1=(class_SD1P1+class_SD2P1)/2;
avr_n_clas_P2=(class_SD2P2+class_SD1P2)/2;

revers_P1=(2-avr_n_clas_P1);
revers_P2=(2-avr_n_clas_P2);

p_rank_1=1;
p_rank_2=2;


if(revers_P1>revers_P2){
rank_p1=p_rank_1;
rank_p2=p_rank_2;

}
if(revers_P1<revers_P2){
rank_p1=p_rank_2;
rank_p2=p_rank_1;
}
if(revers_P1==revers_P2){
rank_p1=p_rank_1;
rank_p2=p_rank_1;
}




//rank_rankin_n_clas_P1_1

var rankin_frequency_rankn_loca2_classement_ = document.getElementById("rankin_frequency_rankn_loca2_classement_");
var rankin_frequency_rankn_loca1_classement_ = document.getElementById("rankin_frequency_rankn_loca1_classement_");

var rankin_frequency_ranknumero_de_location1 = document.getElementById("rankin_frequency_ranknumero_de_location1");
var rankin_frequency_rankle_nome_loca_1 = document.getElementById("rankin_frequency_rankle_nome_loca_1");

var rankin_frequency_ranknumero_de_location2 = document.getElementById("rankin_frequency_ranknumero_de_location2");
var rankin_frequency_rankle_nome_loca_2 = document.getElementById("rankin_frequency_rankle_nome_loca_2");

var DATA1 = document.getElementById("DATA1");
var DATA2 = document.getElementById("DATA2");

DATA1.innerHTML=P1Ndatabase1
DATA2.innerHTML=P1Ndatabase2




if(rank_p1<rank_p2){
xxx=50;
yyy=90;
rankin_frequency_rankle_nome_loca_2.innerHTML=Nplace2
rankin_frequency_ranknumero_de_location2.innerHTML="RANK -2-"

rankin_frequency_rankle_nome_loca_1.innerHTML=Nplace1
rankin_frequency_ranknumero_de_location1.innerHTML="RANK -1-"


}
if(rank_p1>rank_p2){
yyy=50;
xxx=90;
rankin_frequency_rankle_nome_loca_2.innerHTML=Nplace2
rankin_frequency_ranknumero_de_location2.innerHTML="RANK -1-"

rankin_frequency_rankle_nome_loca_1.innerHTML=Nplace1
rankin_frequency_ranknumero_de_location1.innerHTML="RANK -2-"
}
if(rank_p1==rank_p2){
xxx=50;
yyy=50;
rankin_frequency_rankle_nome_loca_2.innerHTML=Nplace2
rankin_frequency_ranknumero_de_location2.innerHTML="RANK -1-"

rankin_frequency_rankle_nome_loca_1.innerHTML=Nplace1
rankin_frequency_ranknumero_de_location1.innerHTML="RANK -1-"
}
rankin_frequency_rankn_loca2_classement_.style.height = xxx +"%";
rankin_frequency_rankn_loca1_classement_.style.height = yyy +"%";






var rankin_frequency_table_content = document.getElementById("rankin_frequency_table_content");
rankin_frequency_table_content.innerHTML = "";


    var f_ran_row__R1 = rankin_frequency_table_content.insertRow();
    var f_ran_cll1__R1 = f_ran_row__R1.insertCell(0);
    var f_ran_cll1__R2 = f_ran_row__R1.insertCell(1);
    var f_ran_cll1__R3 = f_ran_row__R1.insertCell(2);
    var f_ran_cll1__R4 = f_ran_row__R1.insertCell(3);
    var f_ran_cll1__R5 = f_ran_row__R1.insertCell(4);
    var f_ran_cll1__R6 = f_ran_row__R1.insertCell(5);
    var f_ran_cll1__R7 = f_ran_row__R1.insertCell(6);

    f_ran_cll1__R1.innerHTML = Nplace1 ;
    f_ran_cll1__R2.innerHTML = class_SD1P1 ;
    f_ran_cll1__R3.innerHTML = class_SD2P1 ;
    f_ran_cll1__R4.innerHTML = p_n_clas_P1_1.toFixed(2)  + "  (%) ";
    f_ran_cll1__R5.innerHTML = p_n_clas_P1_2.toFixed(2)  + "  (%) ";
    f_ran_cll1__R6.innerHTML = avr_n_clas_P1;
    f_ran_cll1__R7.innerHTML = rank_p1;



    var f_ran_row__R2 = rankin_frequency_table_content.insertRow();
    var f_ran_cll2__R1 = f_ran_row__R2.insertCell(0);
    var f_ran_cll2__R2 = f_ran_row__R2.insertCell(1);
    var f_ran_cll2__R3 = f_ran_row__R2.insertCell(2);
    var f_ran_cll2__R4 = f_ran_row__R2.insertCell(3);
    var f_ran_cll2__R5 = f_ran_row__R2.insertCell(4);
    var f_ran_cll2__R6 = f_ran_row__R2.insertCell(5);
    var f_ran_cll2__R7 = f_ran_row__R2.insertCell(6);

    f_ran_cll2__R1.innerHTML = Nplace2 ;
    f_ran_cll2__R2.innerHTML = class_SD1P2 ;
    f_ran_cll2__R3.innerHTML = class_SD2P2 ;
    f_ran_cll2__R4.innerHTML = p_n_clas_P2_1.toFixed(2)  + "  (%) ";
    f_ran_cll2__R5.innerHTML = p_n_clas_P2_2.toFixed(2)  + "  (%) ";
    f_ran_cll2__R6.innerHTML = avr_n_clas_P2;
    f_ran_cll2__R7.innerHTML = rank_p2;



// classmen brut + %rankin



if(SP1>SP2){
classp1 = 1;
classp2 = 2;
major =SP1;
}
if(SP1<SP2){
classp1 = 2;
classp2 = 1;

major =SP2;
}
if(SP1 === SP2){
classp1= 1;
classp2= 1;

major =SP1;
}

marg_pourcentage_P1 = 100*(major-SP1)/major;
marg_pourcentage_P2 = 100*(major-SP2)/major;


// ...............X1






if(marg_pourcentage_P1<x_1){p1_class_pourx1=1;} if(marg_pourcentage_P1>x_1){p1_class_pourx1=2;}
if(marg_pourcentage_P2<x_1){p2_class_pourx1=1;} if(marg_pourcentage_P2>x_1){p2_class_pourx1=2;}
//:::::::::::::::::::::::::::::::::::::
if(marg_pourcentage_P1<x_2){p1_class_pourx2=1;} if(marg_pourcentage_P1>x_2){p1_class_pourx2=2;}
if(marg_pourcentage_P2<x_2){p1_class_pourx2=1;} if(marg_pourcentage_P1>x_2){p1_class_pourx2=2;}
if(marg_pourcentage_P2<x_2){p2_class_pourx2=1;} if(marg_pourcentage_P2>x_2){p2_class_pourx2=2;}
if(marg_pourcentage_P2<x_2){p2_class_pourx2=1;} if(marg_pourcentage_P2>x_2){p2_class_pourx2=2;}
//:::::::::::::::::::::::::::::::::::::
if(marg_pourcentage_P1<x_3){p1_class_pourx3=1;} if(marg_pourcentage_P1>x_3){p1_class_pourx3=2;}
if(marg_pourcentage_P1<x_3){p1_class_pourx3=1;} if(marg_pourcentage_P1>x_3){p1_class_pourx3=2;}
if(marg_pourcentage_P2<x_3){p2_class_pourx3=1;} if(marg_pourcentage_P2>x_3){p2_class_pourx3=2;}
if(marg_pourcentage_P2<x_3){p2_class_pourx3=1;} if(marg_pourcentage_P2>x_3){p2_class_pourx3=2;}
//:::::::::::::::::::::::::::::::::::::
if(marg_pourcentage_P1<x_4){p1_class_pourx4=1;} if(marg_pourcentage_P1>x_4){p1_class_pourx4=2;}
if(marg_pourcentage_P1<x_4){p1_class_pourx4=1;} if(marg_pourcentage_P1>x_4){p1_class_pourx4=2;}
if(marg_pourcentage_P2<x_4){p2_class_pourx4=1;} if(marg_pourcentage_P2>x_4){p2_class_pourx4=2;}
if(marg_pourcentage_P2<x_4){p2_class_pourx4=1;} if(marg_pourcentage_P2>x_4){p2_class_pourx4=2;}





//tank------------------------------------------------------



//rank_rankin_n_clas_P1_1

var class_back_rank_brut_n_loca1_classement_ = document.getElementById("class_back_rank_brut_n_loca1_classement_");
var class_back_rank_brut_n_loca2_classement_ = document.getElementById("class_back_rank_brut_n_loca2_classement_");

var class_back_rank_brut_numero_de_location1 = document.getElementById("class_back_rank_brut_numero_de_location1");
var class_back_rank_brut_le_nome_loca_1 = document.getElementById("class_back_rank_brut_le_nome_loca_1");

var class_back_rank_brut_numero_de_location2 = document.getElementById("class_back_rank_brut_numero_de_location2");
var class_back_rank_brut_le_nome_loca_2 = document.getElementById("class_back_rank_brut_le_nome_loca_2");


x_1_re.innerHTML=" rank in "+x_1.toFixed(2)  + "  (%) " ;
x_2_re.innerHTML=" rank in "+x_2.toFixed(2)  + "  (%) " ;
x_3_re.innerHTML=" rank in "+x_3.toFixed(2)  + "  (%) " ;
x_4_re.innerHTML=" rank in "+x_4.toFixed(2)  + "  (%) " ;







if(SP1>SP2){
xxxx=50;
yyyy=90;
class_back_rank_brut_le_nome_loca_2.innerHTML=Nplace2
class_back_rank_brut_numero_de_location2.innerHTML="RANK -2-"

class_back_rank_brut_le_nome_loca_1.innerHTML=Nplace1
class_back_rank_brut_numero_de_location1.innerHTML="RANK -1-"


}
if(SP1<SP2){
yyyy=50;
xxxx=90;
class_back_rank_brut_le_nome_loca_2.innerHTML=Nplace2
class_back_rank_brut_numero_de_location2.innerHTML="RANK -1-"

class_back_rank_brut_le_nome_loca_1.innerHTML=Nplace1
class_back_rank_brut_numero_de_location1.innerHTML="RANK -2-"
}
if(SP1==SP2){
xxxx=50;
yyyy=50;
class_back_rank_brut_le_nome_loca_2.innerHTML=Nplace2
class_back_rank_brut_numero_de_location2.innerHTML="RANK -1-"

class_back_rank_brut_le_nome_loca_1.innerHTML=Nplace1
class_back_rank_brut_numero_de_location1.innerHTML="RANK -1-"
}
class_back_rank_brut_n_loca2_classement_.style.height = xxxx +"%";
class_back_rank_brut_n_loca1_classement_.style.height = yyyy +"%";







//table -------------------------------------------------

var table_back_rank_brut_content = document.getElementById("table_back_rank_brut_content");
table_back_rank_brut_content.innerHTML = "";


    var f_ran_row__R1 = table_back_rank_brut_content.insertRow();
    var f_ran_cll1__R1 = f_ran_row__R1.insertCell(0);
    var f_ran_cll1__R2 = f_ran_row__R1.insertCell(1);
    var f_ran_cll1__R3 = f_ran_row__R1.insertCell(2);
    var f_ran_cll1__R4 = f_ran_row__R1.insertCell(3);
    var f_ran_cll1__R5 = f_ran_row__R1.insertCell(4);
    var f_ran_cll1__R6 = f_ran_row__R1.insertCell(5);
    var f_ran_cll1__R7 = f_ran_row__R1.insertCell(6);
    var f_ran_cll1__R8 = f_ran_row__R1.insertCell(7);



    f_ran_cll1__R1.innerHTML = Nplace1 ;
    f_ran_cll1__R2.innerHTML = SP1;
    f_ran_cll1__R3.innerHTML = marg_pourcentage_P1.toFixed(2)  + "  (%) " ;
    f_ran_cll1__R4.innerHTML = classp1;
    f_ran_cll1__R5.innerHTML = p1_class_pourx1;
    f_ran_cll1__R6.innerHTML = p1_class_pourx2;
    f_ran_cll1__R7.innerHTML = p1_class_pourx3;
    f_ran_cll1__R8.innerHTML = p1_class_pourx4;





    var f_ran_row__R2 = table_back_rank_brut_content.insertRow();
    var f_ran_cll2__R1 = f_ran_row__R2.insertCell(0);
    var f_ran_cll2__R2 = f_ran_row__R2.insertCell(1);
    var f_ran_cll2__R3 = f_ran_row__R2.insertCell(2);
    var f_ran_cll2__R4 = f_ran_row__R2.insertCell(3);
    var f_ran_cll2__R5 = f_ran_row__R2.insertCell(4);
    var f_ran_cll2__R6 = f_ran_row__R2.insertCell(5);
    var f_ran_cll2__R7 = f_ran_row__R2.insertCell(6);
    var f_ran_cll2__R8 = f_ran_row__R2.insertCell(7);



    f_ran_cll2__R1.innerHTML = Nplace2 ;
    f_ran_cll2__R2.innerHTML = SP2 ;
    f_ran_cll2__R3.innerHTML = marg_pourcentage_P2.toFixed(2)  + "  (%) "  ;
    f_ran_cll2__R4.innerHTML = classp2;
    f_ran_cll2__R5.innerHTML = p2_class_pourx1;
    f_ran_cll2__R6.innerHTML = p2_class_pourx2;
    f_ran_cll2__R7.innerHTML = p2_class_pourx3;
    f_ran_cll2__R8.innerHTML = p2_class_pourx4;





























}

