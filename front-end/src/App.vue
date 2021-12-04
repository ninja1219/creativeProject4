<template>
  <div id="app">
    <div class="header">
      <h1>Riddles Galore</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/riddles">Find a Riddle</router-link>
      <router-link to="/userRiddles">Your Riddles</router-link>
      <button v-if="signedIn" v-on:click="signOut">Sign Out</button>
    </div>
    
    <router-view/>

    <div class="footer">
      <h3>For Reference:</h3>
      <a href="https://github.com/ninja1219/creativeproject4.git">Github</a>
    </div>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2b2c2e;
    margin: 30px;
    background-color: #bdcad8;
  }
  
  .header {
    background-color: #92acc9;
    text-align: center;
    padding: 10px;
  }
  
  .header a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 5px;
    border: solid 1px #2b2c2e;
  }
  
  .header button {
    background-color: #92acc9;
    font-size: 15px;
    padding: 3px;
    font-weight: bold;
    margin-left: 10px;
  }
  
  .footer a {
    margin-left: 10px;
  }
</style>
