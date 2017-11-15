$(document).ready(function() {
  console.log("Local storage length is " + localStorage.length);

  if(localStorage.length > 0) loadDashboardData();
})

var d = new Date();
var todaysDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

var numOfBills = 0;
var numOfMeds = 0;


function loadDashboardData(){
  //load 3 of each bill/med/groceries

//Bills
numOfBills = localStorage.getItem('numOfBills');
if(numOfBills > 0) {
  for(i=1; i<=numOfBills ; i++){
    var billData = JSON.parse(localStorage.getItem('bill' + i));
    var billDate = billData['date'];
    var billIndex = billData['index'];
    //alert("The med num is " + medIndex);
    console.log("The bill num is " + billIndex);
    //TODAY'S MEDICINES
      if(medDate == todaysDate){
        //alert("Testing med load");
        var source = $("#bill-template").html();
        var template = Handlebars.compile(source);

        var html = template(medData);

        //$("#item1").toggle();
        var billList = $("#billBox");
        billList.append(html);
      }

  }
}



//MEDICINES
numOfMeds = localStorage.getItem('numOfMeds');
if(numOfMeds > 0){
  for(i=1; i<=numOfMeds ; i++){
    var medData = JSON.parse(localStorage.getItem('med' + i));
    var medDate = medData['date'];
    var medIndex = medData['index'];
    //alert("The med num is " + medIndex);
    console.log("The med num is " + medIndex);
    //TODAY'S MEDICINES
      if(medDate == todaysDate){
        //alert("Testing med load");
        var source = $("#med-template").html();
        var template = Handlebars.compile(source);

        var html = template(medData);

        //$("#item1").toggle();
        var medicineList = $("#medBox");
        medicineList.append(html);
      }
      //CURRENTLY TAKING
      /*else{
        var source2 = $("#future-template").html();
        var template = Handlebars.compile(source2);

        var html = template(medData);
        var currList = $("#currList");
        //var box = $("#item1");

        currList.append(html);
        //list.append(box);
      }*/
  }
}

}