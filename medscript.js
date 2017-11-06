$(document).ready(function() {
  $("#addMedsButton").click(addMeds);

})
var simpleData = {'title': 'Eye drops', 'notes': '2 drops per eye', 'time': '3:00pm', 'index': 1};
var dataIndex = 0;
var medData = [
{'title': 'Eye drops', 'notes': '2 drops per eye', 'time': '3:00pm', 'index': 1},
{'title': 'Ear drops', 'notes': '2 drops per eye', 'time': '4:00pm', 'index': 2},
{'title': 'BP Pills', 'notes': '1 pill after eating', 'time': '5:00pm', 'index': 3}
]

function addMeds() {

  console.log("Testing");

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var html = template(medData[dataIndex]);
  dataIndex++;

  //$("#item1").toggle();
  var list = $("#mList");
  //var box = $("#item1");
  list.append(html);
  //list.append(box);
}
