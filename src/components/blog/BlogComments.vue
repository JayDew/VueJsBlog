<template>
  <div>
    <!-- Comments Form -->
    <div class="card my-4">
      <h5 class="card-header">Leave a Comment:</h5>
      <div class="card-body">
        <form>
          <div class="form-group">
            <textarea class="form-control" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <div class="container">
      <div class="panel panel-default widget">
        <div class="panel-heading">
          <span class="glyphicon glyphicon-comment"></span>
          <h3 class="panel-title">
            Recent Comments
          </h3>
          <span class="label label-info"> {{ comments.length }}</span>
        </div>
        <div class="panel-body" v-for="item in comments">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="row">
                <div class="col-xs-10 col-md-11">
                  <div class="mic-info">
                    By: <a href="#"> {{ item.name }}</a> on 2 Aug 2013
                  </div>
                  <div class="comment-text">
                    {{ item.body }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogComments",
    data: function() {
      return {
        comments: []
      };
    },
    methods: {
      getData() {
        console.log("get the comments");
        this.$http
          .get("posts/" + this.$route.params.id + "/comments")
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            this.comments = data;
          });
      }
    },
    created() {
      this.getData();
    }
  };
</script>

<style scoped></style>
