<!--<template>
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
</template> -->
<template>
  <div class="newslist-container">
    <div class="table table-hover">
      
        <div class="row d-none d-md-flex head">
          <div class="col-md-1">id</div>
          <div class="col-md-2">Имя новости</div>         
          <div class="col-md-2">Активность</div>
          <div class="col-md-2">Дата публикации</div>
          <div class="col-md-2">Картинка</div>
          <div class="col-md-2">Путь к превью</div>
        </div>
      
      
        <div class="row" v-for="item in newsList" :key="item.id">
          <div class="col-md-1">
            <router-link :to="'/news/edit/' + item.id">{{ item.id }}</router-link>
          </div>
          <div class="col-md-2">{{ item.newsName }}</div>          
          <div class="col-md-2">    
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" :checked="item.active">
              <label class="custom-control-label " ></label>
            </div>
          </div>
          <div class="col-md-2">{{  item.datePublish | formatDate }}</div>
          <div class="col-md-2"><img :src="item.pathToFullImage" class="max-h-100"/></div>
          <div class="col-md-2">{{ item.pathToPreviewImage }}</div>
        </div>
      
      <tfoot>
        <tr>
          <th colspan="3">Всего новостей: {{ total }}</th>
        </tr>
      </tfoot>
    </div>
  </div>
</template>

<script>

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

.newslist-container
{
  font-size: .9em;
}

.head
{
  font-size: 1.2em;
  margin-bottom: 30px;
}

</style>
