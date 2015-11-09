describe("orders service", function() {
  var orders, $httpBackend;

  beforeEach(module('orders-app'));
  beforeEach(inject(function($injector) {
    orders = $injector.get('orders');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('https://some-shopping-site.com/orders')
      .respond(200, {
        orders: [
          {
            id: "1234",
            total: 56.99
          },
          {
            id: "1234",
            total: 6.99
          },
          {
            id: "1234",
            total: 5.99
          },
          {
            id: "1234",
            total: 9.00
          },
          {
            id: "1234",
            total: 8.03
          },
          {
            id: "1234",
            total: 87.00
          }
        ]
      });
  }));

  it("getTotalSpent() should resolve with a single number that is the sum of the total property for all orders.", function() {
    orders.getTotalSpent().then(function(total) {
      expect(total).toEqual(174);
    });
    $httpBackend.flush();
  });

});
