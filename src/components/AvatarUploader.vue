<template>
  <div ref="imagezone">
    <p>
      <img
        class="img-thumbnail max-h-300"
        :src="picture" >
    </p>
    <div class="row">
      <div class="col-md-2">
        <input
          type="file"
          ref="image"
          class="hidden"
          @change="upload" >
        <button
          class="btn btn-primary btn-block"
          @click="selectNewImage">Выбрать новую</button>
      </div>
      <div class="col-md-10">
        <input
          type="text"
          class="form-control"
          v-model="picture"
          readonly >
      </div>
    </div>
  </div>
</template>

<script>
// Используемые плагины
import axios from 'axios'
//import 'dropzone/dist/dropzone.css'
export default {
  name: 'AvatarUploader',
  model: {
    prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  },
  mounted() {
   // this.initDropzone()
  },
  methods: {
    // Показать окно выбора файла
    selectNewImage() {
      this.$refs.image.click()
    },
    setNewAvatar(picture) {
      this.$emit('input', picture)
    },
    // Upload новой аватарки пользователя
    upload() {
      const url = `${process.env.VUE_APP_TERMINAL_PREFIX}/api/newsapi/upload`
      const data = new FormData()
      data.append('uploadedFile', this.$refs.image.files[0])
    
      axios
        .post(url, data)
        .then(response => response.data)
        .then(response => {
            let result=`${process.env.VUE_APP_TERMINAL_PREFIX}${response}`;
          this.setNewAvatar(result);
          this.$refs.image.value = ''
        }).catch(error=>console.log(error));
        
    },
    
  }
}
</script>

<style>
.hidden {
  display: none;
}

.max-h-300
{
    max-height:300px;
}
</style>