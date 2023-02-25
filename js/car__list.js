const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
];

function cardAllItemFunction(imgLink,itemTitle,details,Prise){
    const cardContainer = document.getElementById('cardContainer');
    const cardBody = document.createElement('div');
    cardBody.classList.add('col')
    cardBody.innerHTML = `
    <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <img src="${imgLink ? imgLink : 'https://loremflickr.com/320/240'}" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title">${itemTitle}</h5>
                        <p class="card-text">${details}</p>
                        <button class="btn btn-primary">Car Prise :${Prise}$ </button>
                    </div>
    </div>
    `;
    cardContainer.appendChild(cardBody);
}


function setAllCarEasy(position){
    const img__Car = data[position].imageURL;
    const title__Car = data[position].name;
    const description__Car = data[position].description;
    const prise__Car = data[position].price;

    cardAllItemFunction(img__Car,title__Car,description__Car,prise__Car);
}

setAllCarEasy(0);
setAllCarEasy(1);
setAllCarEasy(2);
setAllCarEasy(3);