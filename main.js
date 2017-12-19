//AIzaSyCHQreOyVTeIunKEZIFzCCCrrTdO_Af8hk

function loadMap() {
    var searchQuery = {
      city : document.querySelector("#city").value,
      street : document.querySelector("#street").value,
      structure : document.querySelector("#structure").value
    };

    jQuery.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+searchQuery.city+',+'+searchQuery.street+',+'+searchQuery.structure+'&key=AIzaSyCHQreOyVTeIunKEZIFzCCCrrTdO_Af8hk',
      type: "GET",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8', 
      success: function(resultData) {
        if (resultData.status == "ZERO_RESULTS") {
          alert ("Please enter a correct address data!")
        }
        else {
          document.querySelector(".result").innerHTML = "https://www.google.ru/maps/@" + resultData.results[0].geometry.location.lat + "," + resultData.results[0].geometry.location.lng + ",7.75z";
          document.querySelector(".result").href = "https://www.google.ru/maps/@" + resultData.results[0].geometry.location.lat + "," + resultData.results[0].geometry.location.lng + ",7.75z";
          // "Latitude: " + resultData.results[0].geometry.location.lat.toFixed(2)  
          // + "; Longitude: " + resultData.results[0].geometry.location.lng.toFixed(2);
        };
      },
      error : function(jqXHR, textStatus, errorThrown) {
        alert("Something goes wrong: " + textStatus);
      },

      timeout: 12000
  });

  }
