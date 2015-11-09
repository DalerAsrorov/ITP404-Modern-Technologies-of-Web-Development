function ReviewsReport(name, data) {
	this.name = name;
	this.data = data;
}

ReviewsReport.prototype.getAverageRating = function() {
	var sum = 0;
	var average;

	for (var i = 0; i < this.data.length; i++) {
		sum += this.data[i].stars;
	}

	average = sum / this.data.length;

	return average;
};

ReviewsReport.prototype.getAverageCost = function() {
	var sum = 0;
	var average;

	for (var i = 0; i < this.data.length; i++) {
		sum += this.data[i].cost;
	}

	average = sum / this.data.length;

	return average;
};

ReviewsReport.prototype.convertCostToDollarSign = function(averageCost) {
	if (averageCost < 1.5) {
		return '$';
	}
	else if (averageCost >= 1.5 && averageCost < 2.5) {
		return '$$';
	}
	else if (averageCost >= 2.5 && averageCost < 3.5) {
		return '$$$';
	}
	else {
		return '$$$$';
	}
};

ReviewsReport.prototype.summarize = function() {
	var averageCost = this.getAverageCost();
	var averageCostSymbol = this.convertCostToDollarSign(averageCost);

	return {
		name: this.name,
		averageStarRating: this.getAverageRating(),
		totalReviews: this.data.length,
		averageCost: {
			numeric: averageCost,
			symbol: averageCostSymbol
		}
	};
};
