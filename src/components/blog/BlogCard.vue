<template>
  <div class="card mb-3" @click="seeDetails">
    <img
      class="card-img-top"
      src="https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png"
      alt="Card image cap"
    />
    <div class="card-body">
      <h3 class="card-title">
        <b>{{ title }}</b>
      </h3>
      <p class="card-text">{{ body | filterLength }}</p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogCard",
    filters: {
      // ensure that there are only a finite amount of characters visible
      filterLength: function(value) {
        if (!value) return "";
        value = value.substring(0, 200);
        return value;
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      body: {
        type: String
      },
      id: {
        type: Number,
        required: true
      }
    },
    methods: {
      seeDetails() {
        console.log("see details");
        this.$router.push({ name: "details", params: { id: this.id } });
      }
    }
  };
</script>

<style scoped>
  .card {
    margin: auto;
    width: 500px;
  }
</style>
