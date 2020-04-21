<template>
  <!-- Image and text -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" active-class="active"
    ><a class="navbar-brand"
    >VueBootstrap<span class="sr-only">(current)</span></a
    ></router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <!-- home-->
          <router-link to="/" active-class="active"
          ><a class="nav-link"
          >Home <span class="sr-only">(current)</span></a
          ></router-link
          >
        </li>
        <li class="nav-item">
          <!--about-->
          <router-link to="/about" active-class="active"
          ><a class="nav-link"
          >About <span class="sr-only">(current)</span></a
          ></router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  };
</script>

<style scoped></style>
