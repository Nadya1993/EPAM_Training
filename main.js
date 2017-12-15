function loadMap() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAdrZuFXlo3OoE2XXEH5d0smdoPhE6EKXk', true);
    xhr.send();

    if (xhr.status != 200) {
      // обработать ошибку
      alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } else {
      // вывести результат
      alert(xhr.responseText);
    }
  }

