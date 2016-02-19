var faker = require('faker');
var wordpress = require( "wordpress" );
var client = wordpress.createClient({
	url: "localhost:8000/wp-api",
	username: "admin",
	password: "admin123"
});
	
	var postData = {
		title: faker.name.findName(),
		content: faker.address.streetAddress(),
		status:'publish',
		/*
		terms: {
			category:[1]
		},
		*/
		termNames:{
			'category':[faker.address.city(),faker.address.city()],
			'post_tag':[faker.address.city(),faker.address.city()]
		},
			
		customFields: [
			{key:'city', value:faker.address.city()},
			{key:'county', value:faker.address.county()}
		],
		type:'user_post'
	}
	client.newPost(postData ,function(error, id){
		if(error){
			console.log(error.faultString);
		}
		else{
			console.log( "post_id " + id );
		}
	});

/*
client.getPosts(function(err,res){
	console.log(res.length);
})
*/
