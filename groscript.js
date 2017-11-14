$(document).ready(function() {
  $("#addBillsButton").click(openPopup);
  $("#cancelAddBill").click(closePopup);
  $("#addNewBill").click(addMeds);
})
var simpleData = {'title': 'Vallia Ice Cream', 'Amount': '1 Gallon', 'date': 'Nov 15, 2017', 'index': 1};
var dataIndex = 0;
var medData = [
{'title': 'Bananas', 'Amount': '1', 'date': 'N/A', 'index': 1},
{'title': 'eggs', 'Amount': '1 Dozen', 'date': '11/17/17', 'index': 2},
{'title': 'Frozen Dumplings', 'Amount': '1','date': '12/30/17', 'index': 3},
{'title': 'Gyo Don', 'Amount': '1','date': '11/7/17', 'index': 4},
{'title': 'Milk', 'Amount': '2 Gallon', 'date': '12/1/17', 'index': 5},
{'title': 'Pizza', 'Amount': '1','date': '11/9/17', 'index': 6}
]

var userMedData;

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

function toggleCheckbox(element) {
  if (element.checked) {
    var source = $("#today-template").html();
    var template = Handlebars.compile(source);
    var html = template(userMedData);
    var currList = $("#currList");
    currList.append(html);
   }
}


function addMeds() {

  console.log("Testing");
    if(dataIndex<3){
      //var person = prompt("Bill name:", "Electric bill");
      var source = $("#today-template").html();
      var template = Handlebars.compile(source);

      var name = document.getElementById('name').value;
      var num = document.getElementById('time').value;
      var exp = document.getElementById('date').value;
      //var userMedTime = document.getElementById('time').value;
      //var note = document.getElementById('notes').value;
      var userMedData = {'title': name, 'time': num, 'date': exp, 'index': 1};


      //var html = template(medData[dataIndex]);
      var html = template(userMedData);

      //$("#item1").toggle();
      var todayList = $("#mList");
      todayList.append(html);
    } else{
      var source2 = $("#future-template").html();
      var template = Handlebars.compile(source2);

      var html = template(medData[dataIndex]);
      var currList = $("#currList");
      //var box = $("#item1");
      //list.append(box);
}
  dataIndex++;

  closePopup();

}
