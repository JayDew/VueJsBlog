<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="jumbotron">
            <h1><b>Vue Bootstrap</b></h1>
            <p></p>
            <p>
              <small>Currently displaying {{ filterMembers.length }} posts</small>
            </p>
            <input
              v-model="message"
              class="form-control input-lg"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </div>

    <blog-card
      v-for="i in filterMembers"
      :id="i.id"
      :title="i.title"
      :body="i.body"
      :key="i.id"
    ></blog-card>
  </div>
</template>

<script>
  import BlogCard from "./blog/BlogCard.vue";

  export default {
    name: "MainBody",
    data: function() {
      return {
        posts: [],
        message: ""
      };
    },

    computed: {
      filterMembers: function() {
        let filtered = this.posts;
        filtered = this.posts.filter(
          m => m.title.includes(this.message) || m.body.includes(this.message)
        );
        console.log(filtered.length);
        return filtered;
      }
    },
    methods: {
      getData() {
        console.log("get the data");
        this.$http
          .get("posts")
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.posts = resultArray;
          });
      }
    },
    components: {
      BlogCard: BlogCard
    },
    created() {
      this.getData();
    }
  };
</script>

<style scoped>
  h1 {
    margin: 10px;
  }

  div.jumbotron {
    /*background: #1aba9f;*/
    background: #3ec2ac;
  }

  small {
    color: white;
  }
</style>
