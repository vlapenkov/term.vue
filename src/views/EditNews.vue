<template>
  <div>
    <h2>Редактирование новости</h2>

    <div v-if="!news" class="alert alert-warning">
      Загрузка...
    </div>

    <!--<user-form v-else :user="user" @input="value => (user = value)" /> -->
    <news-form v-else v-model="news" />
    <hr />
    <button type="button" class="btn btn-primary" @click="save">Save</button>
    <pre>{{ news }}</pre>
  </div>
</template>

<script>
import axios from "axios";
import NewsForm from "@/components/NewsForm.vue";
export default {
  name: "EditNews",
  components: {
    NewsForm
  },
  data: function() {
    return {
      // Пользователь
      news: null,
      hasErrors: false
    };
  },
  
  computed: {
    id() {
      return this.$route.params.id;
    },
    url() {
      return "https://localhost:44302/api/newsapi/" + this.id;
      
    }
  },
  mounted: function() {
    this.loadData();
  },
  created()
  {
      console.log('created');
  },

  methods: {
    save: function() {
      axios
        .put(this.url, this.news)
        .then(response => {
          console.log(response);
          this.$router.push("/news");
        })
        .catch(console.error);
    },
    loadData: function() {
      axios.get(this.url).then(({ data }) => {
          console.log(data);
        this.news = data;
      });
    }
  }
};
</script>

<style>

</style>
