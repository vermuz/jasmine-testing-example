define([
  'jasmine',
  'jasmine-jquery'
],
function (jasmine) {
  beforeEach(function() {
    this.addMatchers({
      toBeAGoodInvestment: function() {
        var investment = this.actual;
        var what = this.isNot ? 'bad' : 'good';

        this.message = function() {
          return 'Expected investment to be a '+ what +' investment';
        };

        return investment.get('isGood');
      }
    });
  });

  jasmine.getFixtures().fixturesPath = 'spec/fixtures';
})