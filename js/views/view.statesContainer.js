/* Author: 

*/
myapp.view.statesContainer = Backbone.View.extend({
	events: {
		"keyup #searchstate" : "search",
		"change #stateSorting":"sorts"
	},
	render: function(data) {
		$(this.el).html(this.template);
		return this;
	},
	renderList : function(states){
		$("#stateList").html("");

		states.each(function(state){
			var view = new myapp.view.statesItem({
				model: state,
				collection: this.collection
			});
			$("#stateList").append(view.render().el);
		});
		return this;
	},
	initialize : function(){
		this.template = _.template($("#list_container_tpl").html());
		this.collection.bind("reset", this.render, this);
	},
	search: function(e){
		var letters = $("#searchstate").val();
		this.renderList(this.collection.search(letters));
	},	
	sorts: function(e){
		var status = $("#stateSorting").find("option:selected").val();
		if(status == "") status = 0;
		this.renderList(this.collection.currentStatus(status));
	}
});