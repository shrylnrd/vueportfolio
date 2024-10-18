<template>
    <div class="stories-page">
      <h1>My Other Stories</h1>
      <p>Discover more about the things I love and treasure.</p>
  
      <div class="stories-cards">
        <!-- First Card: Travelling -->
        <div class="story-card">
          <div class="image-container">
            <img :src="travelImages[0]" class="slide" />
          </div>
          <p>
            Travel has always ranked among the greatest of my passions. I love exploring new locations, immersing myself in
            the new culture and the landscape that can be found within it. It is also an aspect that brings me closer to
            some of my family members and friends. We enjoy going on adventures be it a loud city or a calm place of nature.
          </p>
        </div>
  
        <!-- Second Card: Concerts -->
        <div class="story-card">
          <div class="image-container">
            <img :src="concertImages[0]" class="slide" />
          </div>
          <p>
            Wherever I go, one of the most cherished experiences besides travelling is attending a live concert. There is an
            incredible allure to a live performance, the involvement with the music and the audience's anticipation. Most of
            the times I go to such events with my family and close friends, thus, making every occasion more interesting.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        travelImages: [
          require('@/assets/travel2.jpg') 
        ],
        concertImages: [
          require('@/assets/concert1.jpg') 
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .stories-page {
    padding: 20px;
    text-align: center;
  }
  
  .stories-page h1 {
    font-size: 2.5rem;
    color: #b22222;
  }
  
  .stories-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
  }
  
  .story-card {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 60%;
    text-align: center;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .slide {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .story-card p {
    font-size: 1.2rem;
    color: #333;
    margin-top: 10px;
  }
  </style>
  