var ReviewsReport = function(name, restaurant) {
	this.name = name;
	this.restaurant = restaurant;
	this.averageStarRating = 0;
	this.totalReviews = 0;
	this.averageCost = {
		numeric: 0,
		symbol: ''
	};
};

ReviewsReport.prototype = {
	constructor: ReviewsReport,

	getAverageRating: function() {
		var sum = 0;
		var averageR = 0;

		for(var i = 0; i < this.restaurant.length; i++) {
			sum += this.restaurant[i].stars;
		}
		this.averageStarRating = sum / this.restaurant.length;
	},

	getAverageCost: function() {
		var sum = 0;
		var averageC = 0;

		for(var i = 0; i < this.restaurant.length; i++) {
			sum += this.restaurant[i].cost;
		}
		return sum / this.restaurant.length;
	},

	convertCostToDollarSign: function(value) {
		this.averageCost.numeric = value;

		// Less than 1.5 = $
		// Between 1.5 (inclusive) and 2.5 (not inclusive) = $$
		// Between 2.5 (inclusive) and 3.5 (not inclusive) = $$$
		// otherwise = $$$$

		switch (true) {
   			case (value < 1.5):
        		this.averageCost.symbol = "$";
        		break;
		    case (value >= 1.5) && (value < 2.5):
		        this.averageCost.symbol = "$$";
		        break;
		    case (value >= 2.5) && (value < 3.5):
		        this.averageCost.symbol = "$$$";
		        break;
		    case (value >= 3.5):
		        this.averageCost.symbol = "$$$$";
		        break;
		    default:
		    	this.averageCost.symbol="Unknown";
		    	break; 
		}	
	},

	summarize: function() {
		this.totalReviews = this.restaurant.length;
		var objectToPrint = {};

		objectToPrint.name = this.name;
		objectToPrint.averageStarRating = this.averageStarRating;
		objectToPrint.totalReviews = this.totalReviews;
		objectToPrint.averageCost = this.averageCost;

		console.log(objectToPrint);
	}
};

/* Testing section here... */
reviews={};

reviews.restaurantA = [
    { 
        title: 'whatever title you want', 
        stars: 4, 
        cost: 2,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 3, 
        cost: 1,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 4, 
        cost: 3,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 4, 
        cost: 3,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 5, 
        cost: 2,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 3, 
        cost: 2,
        description: '' 
    }
];

reviews.restaurantB = [
    { 
        title: 'whatever title you want', 
        stars: 5, 
        cost: 3,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 3, 
        cost: 4,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 4, 
        cost: 4,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 5, 
        cost: 4,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 2, 
        cost: 3,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 5, 
        cost: 4,
        description: '' 
    },
    { 
        title: 'whatever title you want', 
        stars: 5, 
        cost: 5,
        description: '' 
    }
];

var reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
reportA.getAverageRating(); // 3.8333333333333335
var cost = reportA.getAverageCost(); // 2.1666666666666665
reportA.convertCostToDollarSign(cost); // '$$'
reportA.summarize();

var reportB = new ReviewsReport('Restaurant B 2014', reviews.restaurantB);
reportB.getAverageRating(); // 4.142857142857143
reportB.getAverageCost(); // 3.857142857142857
reportB.convertCostToDollarSign(3.857142857142857); // '$$$$'
reportB.summarize();
