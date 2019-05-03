<template>
  <div class="newslist-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>Имя новости</th>         
          <th>Активность</th>
          <th>Дата публикации</th>
          <th>Картинка</th>
          <th>Путь к превью</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in newsList" :key="item.id">
          <td>
            <router-link :to="'/news/edit/' + item.id">{{ item.id }}</router-link>
          </td>
          <td>{{ item.newsName }}</td>          
          <td>
            <!--{{ item.active }}-->
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" :checked="item.active">
              <label class="custom-control-label " ></label>
            </div>
          </td>
          <td>{{  item.datePublish | formatDate }}</td>
          <td><img :src="item.pathToFullImage" class="max-h-100"/></td>
          <td>{{ item.pathToPreviewImage }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">Всего новостей: {{ total }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
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
import moment from "moment";
export default {
  name: "news-list",
  // components: { MyPaginator, MySelect },
  props: {
    newsList: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  methods: {
    dateFormat(date) {
      return moment(date).format("DD.MM.YYYY");
    }
  }
};
</script>

<style>
.max-h-100 {
  max-height: 100px;
}
</style>
