
/**
 * The shopping cart product component.
 * @jsx React.DOM
 */

/* jshint unused:false */


// $.ajax({
// 	url: "/mockData/testingJson.json",
// 		//force to handle it as text
// 		dataType: "text",
// 		success: function (dataTest) {
// 			//data downloaded so we call parseJSON function
// 			//and pass downloaded data
// 			var json = $.parseJSON(dataTest);
// 			cartData = json;
// 		}
// });
/*jshint ignore:start*/
var ReactCart = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		$.ajax({
			url: this.props.url,
				dataType: 'json',
				success: function(data) {
				this.setState({data: data});
			}.bind(this),
				error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function () {

		return (
			<div className="reactCart">
				<Products data={this.state.data} />
			</div>
		);


	}


});

var Products = React.createClass({

	render: function () {


		var productNodes = this.props.data.map(function (product) {
			return (
				<ProductLine
					title={product.productTitle}
					monthly={product.monthlyCost}
					upfront={product.upfrontCost}
					quantity={product.quantity}
				>
				</ProductLine>
		    )
		});
		return (
			<ul className="pricing-table">
				{productNodes}
			</ul>
		);
	}

});

var ProductLine = React.createClass({
	render: function() {
		return (
			<div className="ProductLine">
				<li className="title">{this.props.title}</li>
				<li className="price">Monthly: ${this.props.monthly}</li>
				<li className="price">Upfront: ${this.props.upfront}</li>
				<li className="bullet-item">Quantity: {this.props.title}</li>
			</div>
		);
	}
});

React.renderComponent(
	<ReactCart  url="/mockData/testingJson.json" />,
	document.getElementById('reactCart')
);
/*jshint ignore:end*/