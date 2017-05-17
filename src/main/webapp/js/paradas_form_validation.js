$(function(){
	$("#form_paradas").validate({
		rules:{
			txtValue:{
				required: true,
				email: true
			}
		},
		messages:{
			txtValue:{
				required: "Please type a value",
				email: "Type something in the box"
			}
		}
	});		
});