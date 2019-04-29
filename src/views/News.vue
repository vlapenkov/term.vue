<template>
<section>
  <p>This is news component</p>
  <news-list :newsList="newsList" :total="total"></news-list>
</section>
</template>

<script>
/*
{
id: 1,
newsName: "sdfsdf2",
newsText: "Тестовая новость",
contentType: null,
culture: "ru-RU",
active: true,
datePublish: "2018-12-19T15:21:02.1560081",
pathToFullImage: "/images/news/cbcca6c3-221b-4a87-a6be-bd3fa59c0160.jpg",
pathToPreviewImage: "/images/news/bfc01153-b2c5-492b-9bf9-bf34e9a4d752.jpg"
},
*/

import * as axios from 'axios';
import NewsList from "@/components/NewsList";

export default {
  name: "news",
  components : {NewsList},
  data: () => ({
    newsList: [],
    title: "Список новостей с сервера",
    total: 0,
    countPerPage: 10,
    activePage: 1,
    filter: {},
    //  searchText:'',
    isLoading: true
  }),
  created() {
    this.loadNews();
  },
  methods: {
    loadNews: function() {
      this.news = axios
        .get("https://localhost:44302/api/newsapi")
        .then(response => {
          this.newsList = response.data.result;
          this.total = response.data.total;
          this.isLoading = false;
        });
        
    }
  }
};
</script>

<style>
</style>
