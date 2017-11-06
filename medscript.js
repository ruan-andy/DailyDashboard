$(document).ready(function() {
  $("#addMedsButton").click(addMeds);

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

function addMeds() {

  console.log("Testing");

  if(dataIndex<3){
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

}
