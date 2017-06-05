$(document).ready(function() {
  $("#form1").submit(function(event) {
 var lists = ["item1", "item2", "item3", "item4"];
 var upper = lists.map(function(list) {
  return list.toUpperCase();
 upper.sort();

    event.preventDefault();
  });
});
