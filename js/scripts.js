$(document).ready(function() {
  $("#form1").submit(function(event) {
 var lists = ["#item1", "#item2", "#item3", "#item4"];

 lists.forEach(function(list) {
   var userInput = $("input#" + list).val();
   $("." + list).text(userInput);
 });
 var upper = lists.map(function(list) {
  return list.toUpperCase();
 upper.sort();

 $("#stuff").show();
    event.preventDefault();
  });
});
});
