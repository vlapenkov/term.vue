<template>
<div>
     <div class="form-group hidden">
      <label>Id</label>
      <input type="text"  class="form-control" v-model="localNews.id" readonly/>
    </div>

     <div class="form-group">
      <label>Активность</label>      
       <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" :checked="localNews.active">
              <label class="custom-control-label" @click="localNews.active=!localNews.active" ></label>
            </div>
    </div>

    <div class="form-group">
      <label>Имя новости</label>
      <input type="text" class="form-control" v-model="localNews.newsName" v-validate="'required'" name="newsName"/>
    <span class="error-text">{{ errors.first("newsName") }}</span>  
    </div>
    

    <div class="form-group">
      <label>Текст</label>
      <!--<input type="text" class="form-control" v-model="localNews.newsText" />-->
      <rich-editor v-model="localNews.newsText" />
    </div>

    <div class="form-group">
      <label>Дата</label>
     <!-- <input type="text" class="form-control" v-model="localNews.datePublish" /> -->
     <my-picker v-model="localNews.datePublish"></my-picker>
    </div>
     <div class="form-group">
      <label>Картинка</label>
     <div>
      <avatar-uploader v-model="localNews.pathToFullImage" />
      </div>
      
    </div>
</div>
</template>

<script>
import MyPicker from "@/components/MyPicker.vue";
import AvatarUploader from "@/components/AvatarUploader.vue";
import RichEditor from "@/components/RichEditor.vue";

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
    components: {MyPicker,AvatarUploader,RichEditor},
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
.max-h-300
{max-height:300px;}
.error-text
{
    text-transform: lowercase;
    font-size: 15px;
    color: rgb(114, 28, 36);
    font-style: italic;
}
</style>

