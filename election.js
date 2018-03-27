document.addEventListener("DOMContentLoaded", function() {

    var ul = document.getElementById('list');

    var request = $.ajax ({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    data: {},
    dataType: 'json'
  }).done(function(data){
    data.candidates.forEach(function(candidate){
      var li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = candidate.name + ": " + "Votes " + candidate.votes;
    })
  })
});
