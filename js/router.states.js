
myapp.router.states = Backbone.Router.extend({

	routes: {
		"":  	"list",  
	 },
	list: function(){
		this.listContainerView = new myapp.view.statesContainer({
			collection:myapp.collection.states
		});
		$("#contentContainer").append(this.listContainerView.render().el);	
		this.listContainerView.sorts()
	 }
});

myapp.router.states = new myapp.router.states;