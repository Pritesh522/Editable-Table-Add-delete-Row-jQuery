//$(function () {
//
//	
//});

$(document).ready(function () {

	var person = new Array();
	person.push(["Jill", "Smith", "50"]);
	person.push(["Steve", "Jobs", "55"]);
	person.push(["Bill", "Gates", "45"]);

	//	for (var i = 0; i < person.length; i++) {
	//		addRow(person[i]);
	//	}

	for (var i = 0; i < person.length; i++) {
		//addRow(null,person[i][0], person[i][1], person[i][2]);
		addRow(person[i]);
	}
//e,fName, sName, age
	function addRow(person) {
//				var newRow = "<tr><td>"+fName+"</td><td>"+sName+"</td><td>"+age+"</td><td><input type='button' value='Remove' class='delbtn'/></td></tr>";
		//console.log(fName);
		//console.log(sName);

//		var newRow = "<tr><td>" + (fName ? fName : " ") + "</td><td>" + (sName ? sName : " ") + "</td><td>" + (age ? age : " ") + "</td><td><input type='button' value='Remove' class='delbtn'/></td></tr>";
		//		
				var newRow = "<tr><td>"+(person[0] ? person[0]: " ")+"</td><td>"+(person[1] ? person[1]: " ")+"</td><td>"+(person[2] ? person[2]: " ")+"</td><td><input type='button' value='Remove' class='delbtn'/></td></tr>";
		$("tbody").append(newRow)
	};

	//$("#add").click(function(){addRow("","","")});
	$("#add").click(addRow);
	//	$("#add").click(function(){
	//  	var newRow = "<tr><td></td><td></td><td></td><td><input type='button' value='Remove' class='delbtn'/></td></tr>";
	// $("tbody").append(newRow)
	//        
	//  });

	//  $(".delbtn").click(function(){
	//  	$('table tbody').find('input[value="Remove"]').each(function(){
	//    	$(this).parents("tr").remove();
	//    });
	//  });
	function deleteRow() {
		var par = $(this).parent().parent();
		par.remove();
	};
	$("#myTable").on("click", ".delbtn", deleteRow);
});
