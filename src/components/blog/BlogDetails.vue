<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Post Content Column -->
    <div class="col-lg-8">
      <!-- Title -->
      <h1 class="mt-4">{{ post.title }}</h1>
      <hr />
      <p>Posted on January 1, 2019 at 12:00 PM</p>
      <!-- Preview Image -->
      <img
        class="img-fluid rounded"
        src="https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png"
        alt=""
      />
      <hr />
      <!-- Post Content -->
      <p>{{ post.body }}</p>
      <hr />
      <blog-comments></blog-comments>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
  import BlogComments from "./BlogComments.vue";

  export default {
    name: "BlogDetails",
    data: function() {
      return {
        post: {}
      };
    },
    methods: {
      getData() {
        console.log("get blog post");
        this.$http
          .get("posts/" + this.$route.params.id)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            this.post = data;
          });
      }
    },
    components: {
      blogComments: BlogComments
    },
    created() {
      this.getData();
    }
  };
</script>

<style scoped></style>
