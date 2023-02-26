// Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// chooseStations(stations);

// ['Bright Lights Elementary', 'Moose Mountain Community Centre']

const chooseStations = function (stations) {
  let goodStations = [];
  for (let station of stations){
    if (station[1]>=20){
      if (station[2]=='community centre'||station[2]=='school'){
        goodStations.push(station[0]);
    } } } 
  return (goodStations);
  }

  console.log(chooseStations(stations));