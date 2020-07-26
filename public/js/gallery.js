
fetch('https://travel-experts-site.herokuapp.com/api/destinations')
// fetch('http://localhost:3000/api/destinations')
  .then(response => response.json())
  .then(function(response) {
    let galleryTemplate = '';

    response.forEach(function(item){   
      galleryTemplate += `<figure class='destination-card' style='background-image: url("https://picsum.photos/id/${item.id}/1000/1000")'>
        <img src="" alt="${item.location}">
        <figcaption class='destination-info flex-column center'>
          <h2>${item.title}</h2>
          <p>${item.descriptionBasic}</p>
          <p>${item.descriptionExpanded}</p>
          <a class='button' href='/${item.location}' title='${item.location} website link'>Learn More</a>
        </figcaption>
      </figure>`;
    });

    document.querySelector('.gallery').innerHTML = galleryTemplate;

    destinationCards = Array.from(document.querySelectorAll('.destination-card'))

    for (i=0; i < destinationCards.length; i++) {
      destinationInfo = destinationCards[i].querySelector('.destination-info');

      if (i % 2) {
        destinationInfo.classList.add(`align-self-start`);
      } else {
        destinationInfo.classList.add(`align-self-end`)
      }
    };
  })