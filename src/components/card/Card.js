import { useState } from 'react'
import './Card.css'

function tellColorName(house) {
  let color

  if (house === 'Slytherin') {
    color = 'div_background--green'
  } else if (house === 'Gryffindor') {
    color = 'div_background--red'
  } else if (house === 'Hufflepuff') {
    color = 'div_background--yellow'
  } else if (house === 'Ravenclaw') {
    color = 'div_background--blue'
  } else {
    color = 'div_background--white'
  }

  return color
}

function Card({ characterName, house, picture }) {
  //const showDetails = false;
  const [showDetails, setShowDetails] = useState(false)
  const isCharacterName = (characterName);
  const houseColor = tellColorName(house)

  //   const characterName = 'Harry Potter'
  //   const house = 'Gryffindor'
  //   const picture = 'http://hp-api.herokuapp.com/images/harry.jpg'
  
  const handleDetailsButtonClick =() => {
    alert("button was clicked!");
    setShowDetails(showDetails ? false : true);
  }

  return (
    <section className="card">
      <div className="picture">
        <img
          className="character_picture"
          src={picture}
          alt={`Picture of ${characterName}`}
          // Eigentlich brauchen wir 'Picture of' nicht, weil der Screenreader automatisch erkennt, dass es sich um ein Picture handelt.
        />
      </div>
      <div className={`card__content ${houseColor}`}>
        <h2 className="contesnt__subtitle">{characterName}</h2>
        <p> House {house}</p>
        <button onClick={handleDetailsButtonClick}>more</button>
        {showDetails ? <div>DETAILS</div> : ""}
        <div>
          {house === "Gryffindor" ? "undesirable" : ""}
        </div>

      </div>
      <div class="grid-container">
  <div class="grid-item">species</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div>
    </section>
  )
}

export default Card
