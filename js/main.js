 "use strict";

$("#card-selector").change( () => {
  $("#category-display").remove();
  var selectedCard = $("#card-selector option:selected").val();
  getCategory(selectedCard).then(
  	getTypes(selectedCard), console.error)
  .then(
  	getProducts, console.error);
});


let getCategory = (cat) => {
	return new Promise((resolve,reject) => {
		$.ajax({
			url:"json/categories.json"
		}).done((x) => {
			for (var k in x) {
				let catHeader = ``;
				let catData = x[k];
				catHeader = `<h2 id="category-display">${catData[cat].name}</h2>`;
				$("#card-display").prepend(catHeader);
				resolve();
			}
		});
	});
};

let getTypes = (card) => {
	return new Promise((resolve,reject) => {
		$.ajax({
			url:"json/types.json"
		}).done((obj) => {
			var x = obj.types;
			$("#type-display").empty();
			for (var k in x) {
				let typeHeaders = ``;
				let typeData = x[k];
				if (typeData.category == card) {
					typeHeaders = `<h3>${typeData.name}</h3><h5>${typeData.description}</h5><div id="display-${typeData.id}"></div>`;
					$("#type-display").append(typeHeaders);
				}
				resolve();
			}
		});
	});
};

let getProducts = () => {
	return new Promise((resolve,reject) => {
		$.ajax({
			url:"json/products.json"
		}).done((obj) => {
			var x = obj.products;
			for (var k in x) {
				let productCards = ``;
				let productData = x[k];
				for (var keys in productData) {
					let cardData = productData[keys];
					if (cardData.type === 0) {
						productCards = `<div class="col-sm-6 col-md-4">
										    <div class="thumbnail" style="background-color:#ef9a9a;">
										      <div class="caption">
										        <h3>${cardData.name}</h3>
										        <p>${cardData.description}</p>
										      </div>
										    </div>
										  </div>`;
						$("#display-0").append(productCards);
					}
					if (cardData.type == 1) {
						productCards = `<div class="col-sm-6 col-md-4">
										    <div class="thumbnail" style="background-color:#fff176;">
										      <div class="caption">
										        <h3>${cardData.name}</h3>
										        <p>${cardData.description}</p>
										      </div>
										    </div>
										  </div>`;
						$("#display-1").append(productCards);
					}
					if (cardData.type == 2) {
						productCards = `<div class="col-sm-6 col-md-4">
										    <div class="thumbnail" style="background-color:#b39ddb;">
										      <div class="caption">
										        <h3>${cardData.name}</h3>
										        <p>${cardData.description}</p>
										      </div>
										    </div>
										  </div>`;
						$("#display-2").append(productCards);
					}
					if (cardData.type == 3) {
						productCards = `<div class="col-sm-6 col-md-4">
										    <div class="thumbnail" style="background-color:#bdbdbd;">
										      <div class="caption">
										        <h3>${cardData.name}</h3>
										        <p>${cardData.description}</p>
										      </div>
										    </div>
										  </div>`;
						$("#display-3").append(productCards);
					}
					if (cardData.type == 4) {
						productCards = `<div class="col-sm-6 col-md-4">
										    <div class="thumbnail" style="background-color:#90caf9;">
										      <div class="caption">
										        <h3>${cardData.name}</h3>
										        <p>${cardData.description}</p>
										      </div>
										    </div>
										  </div>`;
						$("#display-4").append(productCards);
					}
					if (cardData.type == 5) {
						productCards = `<div class="col-sm-6 col-md-4">
										    <div class="thumbnail" style="background-color:#a5d6a7;">
										      <div class="caption">
										        <h3>${cardData.name}</h3>
										        <p>${cardData.description}</p>
										      </div>
										    </div>
										  </div>`;
						$("#display-5").append(productCards);
					}
				}
				resolve();
			}
		});
	});
};


