const digimonClass = document.getElementsByClassName('diginame')

Array.from(digimonClass).forEach(function(element) {
    element.addEventListener('click', function(){
      const name = this.innerText
      fetch('digiDelete', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name
        })
      }).then(function (response) {
        console.log('reloaded')
        window.location.reload()
      })
    });
});