var cartData = new Blaze.Var();

$.ajax({
	url: "/mockData/testingJson.json",
		//force to handle it as text
		dataType: "text",
		success: function (dataTest) {
			//data downloaded so we call parseJSON function
			//and pass downloaded data
			var json = $.parseJSON(dataTest);
			cartData.set(json);
		}
});

Template.main.events({
	'click .update': function () {
		$.ajax({
			url: "/mockData/updatedJson.json",
			//force to handle it as text
				dataType: "text",
					success: function (dataTest) {

					//data downloaded so we call parseJSON function
					//and pass downloaded data
					var json = $.parseJSON(dataTest);
					cartData.set(json);


	             }
	  });
	}
});
Template.main.helpers({
	product: function () {
		return cartData.get();
	}


});

