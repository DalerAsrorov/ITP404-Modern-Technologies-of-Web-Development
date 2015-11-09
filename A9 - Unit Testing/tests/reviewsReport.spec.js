// test case 1
var reviewsReportA = new ReviewsReport("Review A", [
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
]);

// test case 2
var reviewsReportB = new ReviewsReport("Review B", [
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
]);

// test case 3
var reviewsReportC = new ReviewsReport("Review C", [
    {
        title: 'whatever title you want',
        stars: 0,
        cost: 0,
        description: ''
    },
    {
        title: 'whatever title you want',
        stars: 0,
        cost: 0,
        description: ''
    }
]);

// test case 4
var reviewsReportD = new ReviewsReport("Review D", [
    {
        title: 'whatever title you want',
        stars: 5,
        cost: 30,
        description: ''
    },
    {
        title: 'whatever title you want',
        stars: 4,
        cost: 45,
        description: ''
    },
    {
        title: 'whatever title you want',
        stars: 3,
        cost: 45,
        description: ''
    }
]);
// test case 5
var reviewsReportE = new ReviewsReport("Review E", [
    {
        title: 'whatever title you want',
        stars: 0,
        cost: 2.5,
        description: ''
    },
]);
// test case 6
var reviewsReportF = new ReviewsReport("Review F", [
    {
        title: 'whatever title you want',
        stars: 0,
        cost: 3.5,
        description: ''
    },
]);
// test case 7
var reviewsReportG = new ReviewsReport("Review G", [
    {
        title: 'whatever title you want',
        stars: 2,
        cost: 1.5,
        description: ''
    },
    {
        title: 'whatever title you want',
        stars: 3,
        cost: 1.5,
        description: ''
    }
]);

describe("reviewsReport", function() {
  // ***test assertion for getAverageRating()***
  it("getAverageRating() should return the average of n movie ratings", function() {
    // Arrange, Act
    var averageRatingA = reviewsReportA.getAverageRating();
    var averageRatingB = reviewsReportB.getAverageRating();
    var averageRatingC = reviewsReportC.getAverageRating();
    var averageRatingD = reviewsReportD.getAverageRating();
    var averageRatingE = reviewsReportE.getAverageRating();
    var averageRatingF = reviewsReportF.getAverageRating();
    var averageRatingG = reviewsReportG.getAverageRating();

    // Assert
    expect(averageRatingA).toEqual(3.8333333333333335); // expect for the first test case
    expect(averageRatingB).toEqual(4.142857142857143); // expect for the second test case
    expect(averageRatingC).toEqual(0); // expect for the third test case
    expect(averageRatingD).toEqual(4); // expect for the 4th test case
    expect(averageRatingE).toEqual(0); // expect for the 5th test case
    expect(averageRatingF).toEqual(0); // expect for the 6th test case
    expect(averageRatingG).toEqual(2.5); // expect for the 7th test case
  });
  // ***test assertion for getAverageCost()***
  it("getAverageCost() should return the average of n movie costs", function() {

    // Arrange, Act
    var averageCostA = reviewsReportA.getAverageCost();
    var averageCostB = reviewsReportB.getAverageCost();
    var averageCostC = reviewsReportC.getAverageCost();
    var averageCostD = reviewsReportD.getAverageCost();
    var averageCostE = reviewsReportE.getAverageCost();
    var averageCostF = reviewsReportF.getAverageCost();
    var averageCostG = reviewsReportG.getAverageCost();

    // Assert
    expect(averageCostA).toEqual(2.1666666666666665); // expect for the first test case
    expect(averageCostB).toEqual(3.857142857142857); // expect for the second test case
    expect(averageCostC).toEqual(0); // expect for the third test case
    expect(averageCostD).toEqual(40); // expect for the fourth test case
    expect(averageCostE).toEqual(2.5); // expect for the fourth test case
    expect(averageCostF).toEqual(3.5); // expect for the fourth test case
    expect(averageCostG).toEqual(1.5); // expect for the fourth test case
  });
  // ***test assertion for convertCostToDollarSign()()***
  it("convertCostToDollarSign() should should show the corresponding number of $'s depending on the given cost", function() {

    // Arrange, Act
    var convertA = reviewsReportA.convertCostToDollarSign(2.1666666666666665); // $$
    var convertB = reviewsReportB.convertCostToDollarSign(3.857142857142857); // $$$$
    var convertC = reviewsReportC.convertCostToDollarSign(0); // $
    var convertD = reviewsReportD.convertCostToDollarSign(40); // $$$$
    var convertE = reviewsReportE.convertCostToDollarSign(2.5); // $$$
    var convertF = reviewsReportF.convertCostToDollarSign(3.5); // $$$$
    var convertG = reviewsReportF.convertCostToDollarSign(1.5); // $$

    // Assert
    expect(convertA).toEqual('$$'); // expect for the first test case
    expect(convertB).toEqual('$$$$'); // expect for the second test case
    expect(convertC).toEqual('$'); // expect for the third test case
    expect(convertD).toEqual('$$$$'); // expect for the 4th test case
    expect(convertE).toEqual('$$$'); // expect for the 5th test case
    expect(convertF).toEqual('$$$$'); // expect for the 6th test case
    expect(convertG).toEqual('$$'); // expect for the 6th test case
  });
  // ***test assertion for convertCostToDollarSign()()***
  it("summarize() should show the summary object of the passed data", function() {

    // Arrange, Act
    var summaryA = reviewsReportA.summarize();
    var summaryB = reviewsReportB.summarize();
    var summaryC = reviewsReportC.summarize();
    var summaryD = reviewsReportD.summarize();
    var summaryE = reviewsReportE.summarize();
    var summaryF = reviewsReportF.summarize();
    var summaryG = reviewsReportG.summarize();

    // Assert 1
    expect(summaryA).toEqual(
    {
        name: 'Review A',
        averageStarRating: 3.8333333333333335,
        totalReviews: 6,
        averageCost:
        {
          numeric: 2.1666666666666665,
          symbol: '$$'
        }
    }); // summary for the first test case ends

    // Assert 2
    expect(summaryB).toEqual(
    {
        name: 'Review B',
        averageStarRating: 4.142857142857143,
        totalReviews: 7,
        averageCost:
        {
          numeric: 3.857142857142857,
          symbol: '$$$$'
        }
    }); // summary for the first test case ends

    // Assert 3
    expect(summaryC).toEqual(
    {
        name: 'Review C',
        averageStarRating: 0,
        totalReviews: 2,
        averageCost:
        {
          numeric: 0,
          symbol: '$'
        }
    }); // summary for the third test case ends

    // Assert 4
    expect(summaryD).toEqual(
    {
        name: 'Review D',
        averageStarRating: 4,
        totalReviews: 3,
        averageCost:
        {
          numeric: 40,
          symbol: '$$$$'
        }
    }); // summary for the third test case ends

    // Assert 5
    expect(summaryE).toEqual(
    {
        name: 'Review E',
        averageStarRating: 0,
        totalReviews: 1,
        averageCost:
        {
          numeric: 2.5,
          symbol: '$$$'
        }
    }); // summary for the third test case ends

    // Assert 6
    expect(summaryF).toEqual(
    {
        name: 'Review F',
        averageStarRating: 0,
        totalReviews: 1,
        averageCost:
        {
          numeric: 3.5,
          symbol: '$$$$'
        }
    }); // summary for the third test case ends

    // Assert 7
    expect(summaryG).toEqual(
    {
        name: 'Review G',
        averageStarRating: 2.5,
        totalReviews: 2,
        averageCost:
        {
          numeric: 1.5,
          symbol: '$$'
        }
    }); // summary for the third test case ends

  });
});
