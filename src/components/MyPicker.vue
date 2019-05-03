<template>
<div>
  <datepicker
    :value="new Date(value)"
    :format="'dd.MM.yyyy'"
    @selected="newValue=>$emit('input', newValue)"
    :language="ru"
    wrapper-class="d-flex justify-content-center"
  >
  <div slot="beforeCalendarHeader" class="calender-header">
    Выберите дату
  </div>
  </datepicker>
  
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";
import moment from "moment";

export default {
  components: { Datepicker },

  name: "my-picker",
  data: function() {
    return {
      ru: ru
    };
  },
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
