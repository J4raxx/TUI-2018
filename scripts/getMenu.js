
	let myMenu = document.querySelector('menu-id');

	console.log(myMenu);

	var myRequest = new Request('menu.json');

	fetch(myRequest)
		.then(function(response) {return response.json();} )
		.then(function(data){
			for (var i = 0; i < data.products.length; ++i){
				var menuItem = document.createElement('div');
				console.log(menuItem);
				menuItem.className = "dish_class";
				menuItem.innerHTML = '<strong>' + data.products[i].Name + 
				'</strong><br> can be found in ' + data.products[i].Location + 
				'. Cost <strong> $' + data.products[i].Price + '</strong>'
				//myMenu.appendChild(menuItem);
				myMenu.appendChild(menuItem);
			}
	})
//var obj = JSON.parse(menu);

/*function addDish(){
	var div = document.createElement('div');

	div.className = 'dish';

	div.innerHTML = 
	'<h1>dishes.name</h1> <br>\
	<h1>dishes.price</h1> ';
	document.getElementById('menu_id').appendChild(div);
}*/
