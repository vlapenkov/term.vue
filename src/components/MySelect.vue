<template>
  <div class="inline-block">    
    <label>Выводить по </label>
    <select @change="$emit('input', $event.target.value)" :value="value">
      <option v-for="option in countPerPageArray" :value="option" :key="option">{{
        option
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    value: {
      type: Number,
      required: true
    },
    countPerPageArray: {
      type: Array,
      required: true
    }
  }
};
</script>
<style>
.inline-block
{
display:inline-block;
}
</style>
>