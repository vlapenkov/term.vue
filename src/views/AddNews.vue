<template>
  <div>
    <h2 class="main-caption">Добавление новости</h2>

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
import NewsForm from "@/components/NewsForm.vue";
import axios from "axios";


const emptyObj = {
  id: 0,
  newsName: "",
  newsText: "",
  active: false,
  datePublish: new Date(),
  pathToFullImage: "",
  pathToPreviewImage: ""
};




export default {
  name: "AddNews",
  components: {
    "news-form": NewsForm
  },
  data: function() {
    return {
      // Новость
      news: null
    };
  },
  mounted: function() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      this.news = Object.assign({}, emptyObj);
    },
    save: function() {
      axios.post(`${process.env.VUE_APP_TERMINAL_PREFIX}/api/newsapi/`,  this.news).then(response => {
        console.log(response);
        this.$router.push("/news");
      }).catch(console.error);
    }
  }
};
</script>
