$(document).ready(function() {
  $("#addMedsButton").click(openPopup);
  $("#cancelAddMed").click(closePopup);
  $("#addNewMed").click(addMeds);
})
var simpleData = {'title': 'Eye drops', 'notes': '2 drops per eye', 'time': '3:00pm', 'index': 1};
var dataIndex = 0;
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


function addMeds() {

  console.log("Testing");

  if(dataIndex<3){
    //var person = prompt("Bill name:", "Electric bill");
    var source = $("#today-template").html();
    var template = Handlebars.compile(source);

    var html = template(medData[dataIndex]);

    //$("#item1").toggle();
    var todayList = $("#mList");
    todayList.append(html);
  } else{
    var source2 = $("#future-template").html();
    var template = Handlebars.compile(source2);

    var html = template(medData[dataIndex]);
    var currList = $("#currList");
    //var box = $("#item1");

    currList.append(html);
    //list.append(box);
  }


  dataIndex++;

  closePopup();

}
