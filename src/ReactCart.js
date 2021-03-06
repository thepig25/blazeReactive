
/**
 * The shopping cart product component.
 * @jsx React.DOM
 */

/* jshint unused:false */


/*jshint ignore:start*/
var ReactCart = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	handleUpdateSubmit: function(product) {
		$.ajax({
			url: '/mockData/updatedJson.json',
				dataType: 'json',
				success: function(data) {
					this.setState({data: data});
			}.bind(this),
				error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
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
				<ReloadData onUpdateSubmit={this.handleUpdateSubmit}/>
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

var ReloadData = React.createClass({
	handleSubmit: function() {
		this.props.onUpdateSubmit();
	},
	render: function() {
		return (
				<p>Update Items:&nbsp;
					<button className="update" type="button" onClick={this.handleSubmit}>Update</button>
				</p>
		);
  	}
});
React.renderComponent(
	<ReactCart  url="/mockData/testingJson.json" />,
	document.getElementById('reactCart')
);
/*jshint ignore:end*/