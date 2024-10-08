import React from 'react'
 import '../css/Carousel.css'
 import laptop from '../Assets/laptop.avif'
 import clothing from '../Assets/clothing.avif'
 import toys from  '../Assets/toys.avif'
 import grocery from '../Assets/grocery.webp'

function Carousel() {
  return (
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src={grocery} class="d-block w-90 " alt="..."/>
      <h3>Grocery</h3>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={clothing} class="d-block w-90" alt="..."/>
      <h3>Clothing</h3>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={toys} class="d-block w-90" alt="..."/>
      <h3>Toys</h3>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={laptop} class="d-block w-90" alt="..."/>
      <h3>Electronics</h3>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel