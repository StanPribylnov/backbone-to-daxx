/* Author: 

*/
myapp.view.statesItem = Backbone.View.extend({
	events: {},
	render: function(data) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},
	initialize : function(){
		this.template = _.template($("#state_item_tpl").html());
	}
});