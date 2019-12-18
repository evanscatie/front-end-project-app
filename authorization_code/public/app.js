// --------------------------------------------------------------APP-MAIN-JS (INCLUDES SPOTIFY)------------------------------------------------------

// ACCESS TOKEN SCRIPT 
// __________________________________________________________________________________________________

// < Obtains parameters from the hash of the URL @return Object >
function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

// < Saves access token as variable >
var params = getHashParams();
var access_token = params.access_token,
    refresh_token = params.refresh_token,
    error = params.error;

console.log(access_token);







// -------------------------------------------------------------------SPOTIFY----------------------------------------------------------------------------

// FETCH REQUEST TO SPOTIFY API FOR TOP ARTIST
// ___________________________________________________________________________________________________

// Defines required settings to access Spotify API
let settings = {
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${access_token}`,
  }
}

// Function creates fetch request to Spotify API and returns the user's top 10 artist and returns (name: med picture) as an object.

window.onload = (fetchArtists());


async function fetchArtists() {
  return await fetch('https://api.spotify.com/v1/me/top/artists', settings)
  .then((response) => {return response.json()})
    .then((data) => {
      let listOfArtists = data.items.slice(0, 10).map((item) => {
        return {
         name: item.name, 
         picture: item.images[0].url
        }
      })
      //console.log(listOfArtists)
      return listOfArtists;
         
//  },

//     )}  


// CREATES ARTIST CAROUSEL ELEMENT
// ___________________________________________________________________________________________________
//  })
// .then((listOfArtists) => {
//       let carouselIndicator = 0
//       listOfArtists.forEach((artist) => {
//           let createCarouselIndicator = document.createElement('li');
//           createCarouselIndicator.innerHTML = `
//             <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//             `
//               let carouselIndicatorContainer = document.querySelector(".carousel-indicators")
//               carouselIndicatorContainer.appendChild(createCarouselIndicator)
//               carouselIndicator++
//             } 
//           )
//         })

    //  }
  
        // .then((listOfArtists) => {
        //   listOfArtists.forEach((artist) => {
        //       let createCarouselEl = document.createElement('div');
        //         createCarouselEl.innerHTML = `
        //           <div class="carousel-item active">
        //               <img class="d-block w-100" src="${artist.picture}" alt="slide">
        //               <div class="carousel-caption d-none d-md-block">
        //                 <h5>${artist.name}</h5>
        //                 <button class="see-shows-btn">SEE UPCOMING SHOWS</button>
        //           </div>                
        //           `
              
              
        //         let carouselElContainer = document.querySelector(".carousel-inner")
        //         carouselElContainer.appendChild(createCarouselEl)
        //         } 
        //       )
        //     });
        //   };






// CREATES ARTIST CARD
// ___________________________________________________________________________________________________

    }).then((listOfArtists) => {
      listOfArtists.forEach((artist) => {
          let createCard = document.createElement('div');
          createCard.class = "card"
          createCard.innerHTML = `
          <div class="row card-row justify-content-center">
            <div class="col-md-6">
              <div class="card text-black text-center ">
                <img src="${artist.picture}" class="card-img rounded-circle shadow-lg p-0 mb-4  rounded" alt="...">
                  <div class="card-img-overlay"></div>
                    <div class="card-title font-weight-bold bg-transparent">${artist.name}
                    <div class="row-md-6">
                      <a href="" type="button" class="upcoming-shows-btn btn btn-outline-light login-btn shadow-lg">
                        View Upcoming Shows
                      </a>
                      </div>
                  </div>
                  </div>
                  </div>
                  `
      
              let container = document.querySelector(".artist-grid")
              container.appendChild(createCard)
            } 
          )
        });
      };


      // CREATES MODAL ELEMENT
      // ___________________________________________________________________________________________________
      
      // }).then((listOfArtists) => {
        //   listOfArtists.forEach((artist) => {
          //     let createCard = document.createElement('div');
          //     createCard.class = "card"
          //     createCard.innerHTML = `
          //         <div class="container">
          //           <div class="content text-center">
          //             <div class="heading">
          
          //               <div class="border"></div>
          //               <p></p>
          //               <br>
          //             </div>
          //           </div>
          
          //           <div class="container-fluid">
          //             <div class="row justify-content-center id="profile-grid">
          //               <div class="col-md-4 profile">
          //                     <div class="panel panel-default">
          //                       <div class="panel-thumbnail row justify-content-center">
          //                          <a href="#" title="artist 1" class="thumb">
          //                              <img src="${artist.picture}" class=" rounded-circle shadow-lg p-3 mb-5 bg-black rounded img-responsive img-rounded" data-toggle="modal" data-target=".modal-profile-lg">
          //                         </a>
          //                         </div>
          //                         <div class="panel-body text-center">
          //                         <p class="profile-name font-weight-bold">${artist.name}</p>
          //                         <p class="upcoming-show-button text-center">
          
          //                             <button class="thumb upcoming-shows-btn btn btn-dark">View Upcoming Shows</button>
          
          
          //                         </p>
          //                       </div>
          //                   </div>
          //               </div>
          //             </div>
          //           </div>
          //                 `
          
          
          
          //   createCard.addEventListener("Click", (e) => {
            //     //containerplaceholder.classList.add('hidden')
            //   }
            
            
          
          //   let container = document.querySelector(".page")
          //   container.appendChild(createCard)
          // }
          
        
          
        
          /* show lightbox when clicking a thumbnail */
            // $('a.thumb').click(function(event){
            //   event.preventDefault();
            //   var content = $('.modal-body');
            //   content.empty();
            //     var title = $(this).attr("title");
            //     $('.modal-title').html(title);      	
            //     content.html($(this).html());
            //     $(".modal-profile").modal({show:true});
            // });


      // getEventDetails(artist)
      // let hiddenContainer = document.querySelector(".")
      // classList.remove("hidden")


// EVENT MODAL
// ___________________________________________________________________________________________________


  // <!-- Button trigger modal -->
      // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
      //   Launch demo modal
      // </button>
      
      // <!-- Modal -->
      // <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      //   <div class="modal-dialog" role="document">
      //     <div class="modal-content">
      //       <div class="modal-header">
      //         <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
      //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      //           <span aria-hidden="true">&times;</span>
      //         </button>
      //       </div>
      //       <div class="modal-body">
      //         ...
      //       </div>
      //       <div class="modal-footer">
      //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      //         <button type="button" class="btn btn-primary">Save changes</button>
      //       </div>
      //     </div>
      //   </div>
      // </div>

// CREATES POPUP
// ___________________________________________________________________________________________________


// < ERROR HANDLING FOR USER LOGIN >
// ___________________________________________________________________________________________________
if (error) {
  alert('There was an error during the authentication');
} else {
  if (access_token) {
    $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
    });
  } else {
      // render initial screen
      $('#login').show();
      $('#loggedin').hide();
  }
      document.getElementById('obtain-new-token').addEventListener('click', function() {
        $.ajax({
          url: '/refresh_token',
          data: {
            'refresh_token': refresh_token
          }
        }).done(function(data) {
          access_token = data.access_token;
        });
      }, false);

  };
