<template>
  <div id="app">
    <div class="header">
      <h1>Riddles Galore</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/riddles">Find a Riddle</router-link>
    </div>
    
    <div id="content">
      <router-view/>
    </div>

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
    background-color: #bdcad8;
  }
  
  .header {
    background-color: #92acc9;
    text-align: center;
    padding: 10px;
    padding-bottom: 20px;
  }

  .header h1 {
    font-size: 50px;
  }
  
  .header a {
    font-weight: bold;
    font-size: 20px;
    color: #2c3e50;
    text-decoration: none;
    padding: 5px;
    border: solid 1px #2b2c2e;
    margin: 5px;
  }

  #content {
    padding-left: 20px;
  }
  
  .footer a {
    margin-left: 10px;
  }

  .footer {
    background-color: #92acc9;
    padding-top: 5px;
    padding-bottom: 10px;
    padding-left: 20px;
    margin-top: 20px;
  }
</style>
