ava.models.UtilityForModel = Backbone.Model.extend({
    numFormat: function (number) {
      return number.toFixed(2).replace(/./g, function(c, i, a) {
          return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
      });
    }
});