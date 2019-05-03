
<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top top-menu">
      <a class="navbar-brand logotip-terminal" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"/>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
       <!-- <a class="navbar-brand logotip-terminal" href="/"></a>-->
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/" exact active-class="active">
            <a class="nav-link" href="#">Главная</a>
          </router-link>
          <router-link tag="li" to="/news" exact active-class="active">
            <a class="nav-link" href="#">Новости</a>
          </router-link>
          
        </ul>
      </div>
    </nav>

    <main id="app" role="main" class="container main-container">
      <router-view/>
    </main>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.main-container {
  margin-top: 70px;
}
.top-menu
{
  background-color: rgb(24, 53, 93);
}
.logotip-terminal
{
  padding: 5px;
    width: 170px;
    min-height: 70px;
    background: url('https://terminal.yst.ru/img/YST.png') no-repeat center center;
    z-index: 100;
}
.navbar.top-menu
{
padding: 0 1rem;
}
</style>
