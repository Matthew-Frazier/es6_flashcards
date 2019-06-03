// @ts-nocheck
$(document).ready(function () {
  const add_card = $('#create');
  let card = $('.flipcard');

  

  function cardFlip(c) {
    card.on("click", function() {
      card.toggleClass('flipped');
    });
  }

  this.on("click", cardFlip())
  

  // Add a card 
  add_card.click(() => {
    $(".cards").append(`
    <div class="card-container">
    <div class="container">
      <div class="flipcard">
        <div class="front">
          <h2>Question</h2>
        </div>
        <div class="back">
          <p>Answer</p>
        </div>
      </div>
      <div id="button-group">
        <button id="edit-card" class="btn">Edit Card</button>
        <button id="delete-card" class="btn">Delete Card</button>
      </div>
    </div>
  </div>
    `);
  });
  
  // Fill in the data for new card 



  // Edit cards



  //Delete a card 




});