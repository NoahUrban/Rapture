<template>
    <section :class="$style.recentWorkSection">
      <img :class="$style.backgroundImage" src="~/assets/recentworkbackground.png" alt="background" />
  
      <div :class="$style.titleContainer">
        <span>Our </span><i :class="$style.recent">Recent</i><span> Work</span>
      </div>
  
      <div :class="$style.description">
        Plastic designs & develops digital experiences that put people first.
      </div>
  
      <div :class="$style.grid">
        <div :class="$style.project">
          <img src="~/assets/alarmradio.png" alt="Alarm Radio" :class="$style.projectImage" />
          <div :class="$style.projectLabel">Alarm Radio</div>
        </div>
  
        <div :class="$style.project">
          <img src="~/assets/nexus5.png" alt="Nexus 5 Mockups" :class="$style.projectImage" />
          <div :class="$style.projectLabel">Nexus 5 Mockups</div>
        </div>
  
        <div :class="$style.project">
          <img src="~/assets/greyhound.png" alt="Greyhound" :class="$style.projectImage" />
          <div :class="$style.projectLabel">Greyhound</div>
        </div>
  
        <div :class="$style.project">
          <img src="~/assets/portland.png" alt="Portland" :class="$style.projectImage" />
          <div :class="$style.projectLabel">Portland</div>
        </div>
  
        <div :class="$style.project">
          <img src="~/assets/babelbay.png" alt="Babelbay" :class="$style.projectImage" />
          <div :class="$style.projectLabel">Babelbay</div>
        </div>
  
        <div :class="$style.project">
          <img src="~/assets/carwash.png" alt="Carwash" :class="$style.projectImage" />
          <div :class="$style.projectLabel">Carwash</div>
        </div>
      </div>
  
      <div :class="$style.ghostButton">
        <div :class="$style.button" />
        <div :class="$style.seeAllWorks">SEE ALL WORKS</div>
      </div>
    </section>
  </template>
  
  <style module>
  .recentWorkSection {
    position: relative;
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    gap: 40px;
  }
  
  .backgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1333px;
    object-fit: cover;
    opacity: 0.3;
    mix-blend-mode: normal;
    z-index: 0;
  }
  
  .titleContainer {
    position: relative;
    font-size: 25.2px;
    letter-spacing: -0.6px;
    line-height: 31.2px;
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    z-index: 1;
  }
  
  .recent {
    font-family: "Droid Serif";
  }
  
  .description {
    position: relative;
    width: 261.6px;
    font-size: 10.8px;
    line-height: 16.8px;
    font-family: Montserrat;
    color: #fff;
    text-align: center;
    opacity: 0.5;
    z-index: 1;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 24px;
    max-width: 1200px;
    width: 80%;
    z-index: 1;
    place-items: center;
  }
  
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .projectImage {
    width: 60%;
    max-width: 60%;
    object-fit: cover;
    overflow: hidden;
  }
  
  .projectLabel {
    margin-top: 4.8px;
    font-size: 9.6px;
    line-height: 15.6px;
    font-family: Montserrat;
    color: #fff;
    text-align: center;
  }
  
  .ghostButton {
    position: relative;
    height: 36px;
    width: 144px;
    overflow: hidden;
    text-align: center;
    font-size: 8.4px;
    color: #fff;
    font-family: Montserrat;
    z-index: 1;
  }
  
  .button {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 18px;
    border: 2px solid #fff;
    box-sizing: border-box;
    width: 144px;
    height: 36px;
    opacity: 0.3;
  }
  
  .seeAllWorks {
    position: absolute;
    top: 12.6px;
    left: 31.8px;
    letter-spacing: 0.9px;
    font-size: 8.4px;
  }
  </style>
  