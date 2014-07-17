var cartData = new Blaze.Var([
	{
		quantity: "2",
		monthlyCost: "20",
		productTitle: "Phone",
		upfrontCost: "40"
	},
	{
		quantity: "1",
		monthlyCost: "10",
		productTitle: "Modem",
		upfrontCost: "100"
	}
]);

Template.main.events({
	'click .update': function () {
		cartData.set([
			{
				quantity: "3",
				monthlyCost: "10",
				productTitle: "Shoes",
				upfrontCost: "40"
			},
			{
				quantity: "1",
				monthlyCost: "10",
				productTitle: "Bags",
				upfrontCost: "100"
			},
		]);
	}
});

Template.main.helpers({
	product: function () {
		return cartData.get();
	},

});