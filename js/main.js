//salle
let seatsCenter = document.querySelector('.seats-center');
let seatsRight = document.querySelector('.seats-right');
let seatsLeft = document.querySelector('.seats-left');

const numberSelected = document.querySelector('#number-selected')


let price = document.querySelector('#price');
const movieSelect = document.getElementById('movie');






function randomSeats(min, max){
    let icon = document.querySelectorAll('i')
for( min; min < max; min++) {

    let random = Math.floor( Math.random() * 79 - min + 1) + min

    icon[random].classList.add('disabled')
    }
}

 function centerSeat(min, max, sideSeats){

    for(let i = min; i < max; i++){
        
        const places = document.createElement('i')
        places.classList.add('red')
        places.classList.add('fas', 'fa-loveseat')
        sideSeats.appendChild(places)
    
        let numberPlace = document.createElement('span')
         numberPlace.classList.add('number-seats')
        places.appendChild(numberPlace)
        numberPlace.textContent = i
    
          if( i < 10) {
               numberPlace.textContent = '0' + i
           }

         places.addEventListener('click', () => {
             
            if(places.classList.contains('disabled')){
                places.classList.remove('seat-reserved')
                
            } else{

                places.classList.toggle('seat-reserved')
            }
                        
            numberPlace.classList.toggle('number-seat')

                displaySeatSelected();

         })



    }
    
    
    }
    let ticketPrice = +movieSelect.value;
    function displaySeatSelected() {
        const seatReserved = document.querySelectorAll('.seat-reserved')
        // Nombre de places prises
        numberSelected.textContent = seatReserved.length
        
        // Prix des places sélectionnées
        price.textContent = seatReserved.length * ticketPrice
    }
    console.log(ticketPrice);
    

   
    const seatReserved = document.querySelectorAll('.seat-reserved')

 movieSelect.addEventListener('change', e => {

     price.textContent = 0
     ticketPrice = +e.target.value;
     console.log(ticketPrice);
     console.log(movieSelect.value);
     

    
     
     
     
   });

    centerSeat(1, 65, seatsCenter);
    centerSeat(65, 73, seatsRight);
    centerSeat(73, 81, seatsLeft);
    randomSeats(1, 25)
    
    
    
