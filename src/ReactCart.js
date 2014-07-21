/**
 * The shopping cart product component.
 * @jsx React.DOM
 */

/* jshint unused:false */


var ReactCart = React.createClass({

	render: function () {

		/*jshint ignore:start*/
		return (
			<div className="reactCart panel">

				<p>Update Items: </p>
				<ul className="pricing-table">
					<li className="title"></li>
					<li className="price">Monthly: $</li>
					<li className="price">Upfront: $</li>
					<li className="bullet-item">Quantity</li>
				</ul>

			</div>
		);


	}


});
React.renderComponent(
	<ReactCart />,
	document.getElementById('reactCart')
);
/*jshint ignore:end*/