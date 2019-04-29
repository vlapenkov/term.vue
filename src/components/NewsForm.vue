<template>
<div>
     <div class="form-group">
      <label>Id</label>
      <input type="text" class="form-control" v-model="localNews.id" />
    </div>

    <div class="form-group">
      <label>Имя новости</label>
      <input type="text" class="form-control" v-model="localNews.newsName" />
    </div>

    <div class="form-group">
      <label>Текст</label>
      <input type="text" class="form-control" v-model="localNews.newsText" />
    </div>

    <div class="form-group">
      <label>Дата</label>
     <!-- <input type="text" class="form-control" v-model="localNews.datePublish" /> -->
     <my-picker v-model="localNews.datePublish"></my-picker>
    </div>
</div>
</template>

<script>
import MyPicker from "@/components/MyPicker.vue";
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

export default {
    name:"NewsForm",
    components: {MyPicker},
 props: {
    // Объект с данными пользователя
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    // Локальный изменяемый объект пользователя
    localNews: null    
  }),
  watch: {
    localNews: {
      deep: true,
      handler() {
        console.log("UPDATE NEWS", this.localNews);
        this.$emit("input", Object.assign({}, this.localNews));
      }
    }},
  created() {
    // Копируем новость в локальное состояние
    this.localNews = Object.assign({}, this.value);
    
  }
}
</script>

<style>

</style>

