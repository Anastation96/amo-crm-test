<template>
  <div class="filter br">
    <input class="br" type="text" v-model="data">
    <div class="button br" @click="onFilter">Filter</div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';
import Service from "../Service";

const props = defineProps({
  service: {type: Object as PropType<Service>}
})

const data = ref('');

const onFilter = () => {
  props.service?.GetLeadsList(data.value);
}
</script>

<style lang="scss">
.filter {
  height: 40px;
  width: calc(100% - 20px);
  padding: 10px;
  gap: 8px;
  background-color: lavender;
  display: flex;
  input {
    width: 75%;
    outline: none;
    border: 1px solid rgb(206, 206, 249);
    padding: 4px 8px;
  }
  .button {
    user-select: none;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(199, 199, 244);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: rgb(204, 204, 243);
    }
  }
}
</style>