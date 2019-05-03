<template>
  <section>
    <h1 class="main-caption">Список новостей</h1>
    <div class="d-flex">
      <div class="mr-auto">
        <div class="btn-group" role="group" aria-label="Basic example">
          <!-- <button type="button" class="btn btn-primary">Добавить</button> -->
          <router-link to="/news/add" exact>
            <button type="button" class="btn btn-primary">Добавить</button>
          </router-link>

          <!--<button type="button" class="btn btn-secondary">Middle</button>
          <button type="button" class="btn btn-secondary">Right</button>-->
        </div>
      </div>
      <div class="ml-auto">
        <my-select
      :value="countPerPage"
      @input="value => updateCount(value)"
      :countPerPageArray="[5, 10, 50, 100]"
    ></my-select>
    <span class="m-l-50">
        <my-paginator
          :total="total"
          :countPerPage="countPerPage"
          :activePage="activePage"
          @input="value => updateActivePage(value)"
        ></my-paginator>
        </span>
      </div>
    </div>
    <news-list :newsList="newsList" :total="total"></news-list>
  </section>
</template>

<script>
import * as axios from "axios";
import NewsList from "@/components/NewsList";
import MyPaginator from "@/components/MyPaginator";
import MySelect from "@/components/MySelect";

export default {
  name: "news",
  components: { NewsList, MyPaginator,MySelect },
  data: () => ({
    newsList: [],
    title: "Список новостей с сервера",
    total: 0,
    countPerPage: 5,
    activePage: 1,
    filter: {},
    //  searchText:'',
    isLoading: true,
    TERMINAL_PREFIX: process.env.VUE_APP_TERMINAL_PREFIX
  }),
  created() {
    this.getNews();
  },
  methods: {
    getNews: function() {
      this.news = axios
        .get(`${this.TERMINAL_PREFIX}/api/newsapi`, {
          params: {
            page: this.activePage,
            countperpage: this.countPerPage,
            q: ""
          }
        })
        .then(response => {
          this.newsList = response.data.result;
          this.total = response.data.total;
          this.isLoading = false;
        })
        .catch(error => console.error(error));
    },
updateCount(count) {
      this.countPerPage = count;
      this.getNews();
    },
    updateActivePage(page) {
      this.activePage = page;
      this.getNews();
    }
  }
};
</script>

<style>
.main-caption
{
  border-bottom:1px solid rgb(218, 218, 218);
  margin-bottom: 50px;
  padding-bottom: 10px;
}

.m-l-50
{
  margin-left:50px;
}
</style>
