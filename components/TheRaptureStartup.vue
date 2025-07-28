<template>
    <div :class="$style.background">
      <!-- Text container wrapping the 3 text blocks -->
      <div :class="$style.title">
        <div :class="$style.theRaptureStartupContainer">
          <span>THE </span>
          <span :class="$style.rapture1">RAPTURE</span>
          <span> STARTUP</span>
        </div>
  
        <div :class="$style.manyCarefullyCraftContainer">
          <span :class="$style.manyCarefullyCraftContainer1">
            <p :class="$style.manyCarefullyCrafted">Many carefully crafted components to </p>
            <p :class="$style.manyCarefullyCrafted">present your </p>
            <p :class="$style.manyCarefullyCrafted">business.</p>
          </span>
        </div>
  
        <div :class="$style.with200BlocksContainer">
          <span :class="$style.with200BlocksContainer1">
            <p :class="$style.with200BlocksMagicDesign">
              <span :class="$style.with200Blocks">With 200 blocks, magic design & a perfect layer organization, using </span>
              <span :class="$style.the">The </span>
              <i :class="$style.rapture">Rapture</i>
              <span :class="$style.the"> Startup</span>
            </p>
            <p :class="$style.willGiveYou">will give you Déjà vu.</p>
          </span>
        </div>
      </div>
  
      <button :class="$style.button">VIEW PROJECT</button>
  
      <div :class="$style.imagesContainer">
        <img :class="$style.screen1Icon" alt="" src="~/assets/Screen 1.png" />
        <img :class="$style.ipadIcon" alt="" src="~/assets/iPad.png" />
        <img :class="$style.screen2Icon" alt="" src="~/assets/Screen 2.png" />
      </div>
    </div>
  </template>
  
  <style module>
  .background {
    width: 100%;
    position: relative;
    background-color: #bcc6c9;
    height: 1100px;
    overflow: visible;
    z-index: 0;
  }
  
  /* Text container wrapping text blocks */
  .title {
    position: relative;
    width: 100%;
    height: 425px;
    overflow: hidden;
    text-align: left;
    font-size: 18px;
    color: #3a3d4b;
    font-family: Montserrat;
    z-index: 10; /* above images */
  }
  
  /* Absolute positions for text blocks inside title */
  .theRaptureStartupContainer {
    position: absolute;
    top: 0px;
    left: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 26px;
    color: #3a3d4b;
    font-family: Montserrat;
    display: inline-block;
  }
  
  .rapture1 {
    font-weight: 600;
    font-family: 'Droid Serif';
  }
  
  .manyCarefullyCraftContainer {
    position: absolute;
    top: 60px;
    left: 0px;
    width: 470.6px;
    height: 208px;
    font-size: 42px;
    letter-spacing: -1px;
    line-height: 52px;
    color: #222328;
    display: flex;
    align-items: center;
  }
  
  .manyCarefullyCraftContainer1 {
    width: 100%;
  }
  
  .manyCarefullyCrafted {
    margin: 0;
  }
  
  .with200BlocksContainer {
    position: absolute;
    top: 313px;
    left: 3px;
    width: 293px;
    height: 112px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #3a3d4b;
    font-size: 18px;
  }
  
  .with200BlocksContainer1 {
    width: 100%;
  }
  
  .with200BlocksMagicDesign {
    margin: 0;
    font-family: Montserrat;
  }
  
  .with200Blocks {
    font-weight: 300;
    font-family: Montserrat;
  }
  
  .the {
    font-family: Montserrat;
  }
  
  .rapture {
    font-family: 'Droid Serif';
    font-weight: 600;
  }
  
  .span {
    font-weight: 300;
    font-family: Montserrat;
  }
  
  .willGiveYou {
    margin: 0;
    font-weight: 300;
  }
  
  /* Button styling */
  .button {
    width: 125px;
    height: 50px;
    border-radius: 25px;
    background-color: #3b55e6;
    margin-top: 20px;
  
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: 1.5px;
    color: #fff;
  
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  
    cursor: pointer;
    border: none;
  
    position: relative;
    z-index: 10;
  }
  
  /* Images container behind text but above background */
  .imagesContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none; /* so images don’t interfere with clicks */
    z-index: 5;
  }
  
  /* Individual images absolutely positioned for diagonal layout */
  .screen1Icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    max-width: 600px;
    height: auto;
    object-fit: cover;
  }
  
  /* Adjusted iPad image */
  .ipadIcon {
    position: absolute;
    top: 40%;
    right: 15%;  /* moved closer to Screen 1 */
    width: 38%;  /* made larger */
    max-width: 560px;
    height: auto;
    object-fit: cover;
    transform: translate(10%, 0); /* slight horizontal shift */
  }
  
  .screen2Icon {
    position: absolute;
    bottom: 50px; /* not all the way bottom */
    left: 5%;
    width: 28%;
    max-width: 560px;
    height: auto;
    object-fit: cover;
    transform: translate(-10%, 0);
  }
  </style>
  