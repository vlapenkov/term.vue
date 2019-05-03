<template>
  <div>
    <h2>Редактирование новости</h2>

    <div v-if="!news" class="alert alert-warning">
      Загрузка...
    </div>

    <!--<user-form v-else :user="user" @input="value => (user = value)" /> -->
    <news-form v-else v-model="news" />
    <hr />
    <button type="button" class="btn btn-primary" @click="save">Сохранить</button>
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
      return `${process.env.VUE_APP_TERMINAL_PREFIX}/api/newsapi/${this.id}` ;      
    }
  },
  mounted: function() {
    this.loadData();
  },

  methods: {
    save() {
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
         // console.log(data);
         // debugger;
        this.news = data;
      });
    }
  }
};
</script>

<style>

</style>
