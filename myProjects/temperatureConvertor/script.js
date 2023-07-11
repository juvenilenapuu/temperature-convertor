      function Convert() {
        var Cel_value = Number(document.getElementById("Celsius").value);
        var Fahren_value = Number(document.getElementById("Fahrenheit").value);
        var conversion = Cel_value * 1.8 + 32;
        document.getElementById("Fahrenheit").value = conversion;
      }