$(document).ready(function() {
  $("#addMedsButton").click(openPopup);
  $("#cancelAddMed").click(closePopup);
  $("#addNewMed").click(addMeds);
})
var simpleData = {'title': 'Eye drops', 'notes': '2 drops per eye', 'time': '3:00pm', 'index': 1};
var dataIndex = 1;
var medData = [
{'title': 'Eye drops', 'notes': '2 drops per eye', 'time': '3:00pm', 'date': '11/6/17', 'index': 1},
{'title': 'Ear drops', 'notes': '2 drops per eye', 'time': '4:00pm', 'date': '11/6/17', 'index': 2},
{'title': 'BP Pills', 'notes': '1 pill after eating', 'time': '5:00pm', 'date': '11/6/17', 'index': 3},
{'title': 'Insulin', 'notes': '1 shot', 'time': '2:00pm', 'date': '11/7/17', 'index': 4},
{'title': 'Cholesterol pills', 'notes': '1 pill, with or without food', 'time': '7:00pm', 'date': '11/8/17', 'index': 5},
{'title': 'Herbal tea', 'notes': '1 cup at night', 'time': '9:00pm', 'date': '11/9/17', 'index': 6}
]

function openPopup(){
  // Get the modal
  var modal = document.getElementById('myModal');
  // When the user clicks the button, open the modal
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}


function closePopup(){
  // Get the modal
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

var cancelled = false;
var datePattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

$('#addNewMed').click(function(){
  if($('#name').val() == ''){
     alert('Name cannot be left blank');
     cancelled = true;
  }
   else if($('#date').val() == ''){
      alert('Date cannot be left blank');
      cancelled = true;
   }
  /* else if(!datePattern.test($('#date').val())){
      alert('Date must be in format MM/DD/YYYY');
      cancelled = true;
   }*/

   else if($('#time').val() == ''){
      alert('Time cannot be left blank');
      cancelled = true;
   }
});


function addMeds() {
  if(cancelled == true){
    cancelled = false;
    return;
  }
  console.log("Testing");

  var d = new Date();
  var todaysDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

  var userMedName = document.getElementById('name').value;
  var userMedFreq = document.getElementById('frequency').value;
  var userMedDate = document.getElementById('date').value;
  var userMedTime = document.getElementById('time').value;
  var userMedNotes = document.getElementById('notes').value;

  var userMedData = {'title': userMedName, 'notes': userMedNotes, 'time': userMedTime,'date': userMedDate,
                    'freq' : userMedFreq, 'index' : dataIndex};

//TODAY'S MEDICINES
  if(userMedDate == todaysDate){
    //var person = prompt("Bill name:", "Electric bill");
    var source = $("#today-template").html();
    var template = Handlebars.compile(source);

    //var html = template(medData[dataIndex]);
    var html = template(userMedData);

    //$("#item1").toggle();
    var todayList = $("#mList");
    todayList.append(html);
  }
  //CURRENTLY TAKING
  else{
    var source2 = $("#future-template").html();
    var template = Handlebars.compile(source2);

    var html = template(userMedData);
    var currList = $("#currList");
    //var box = $("#item1");

    currList.append(html);
    //list.append(box);
  }


  dataIndex++;

  closePopup();

}

/*
function deleteItem(item_id){
  //alert("Close clicked on " + item_id);
  $("#" + item_id).parent().remove();
}

function editItem(item_id){
  alert("Edit clicked on " + item_id);
  deleteItem(item_id);
  openPopup();
  //NEED TO CHANGE to fill in fields with data
}*/

function deleteItem(item_id){
  //alert("Close clicked on " + item_id);
  var med_id = $("#" + item_id).parent().attr('id');
  //alert("Close clicked on " + med_id);
  $("#" + item_id).parent().remove();

  localStorage.removeItem(med_id);
  numOfMeds--;
  localStorage.setItem('numOfMeds', numOfMeds);
}

function editItem(item_id){
  //alert("Edit clicked on " + item_id);
  deleteItem(item_id);
  openPopup();
  //NEED TO CHANGE to fill in fields with data
}
