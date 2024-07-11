<template>
  <div class="wrapper br-big">
    <Filter :service="service" />
    <Table :service="service" />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import Filter from "./views/filter.vue";
import Table from "./views/table.vue";
import Service from "./Service";

const service = ref(Service.getInstance());
onMounted(async () => {
  await service.value.GetInfo();
})
</script>
<style>
body, #app {
  background-color: rgb(237, 237, 237);
  padding: 0;
  margin: 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px;
  padding: 40px;
  background-color: #fff;
  width: calc(100vw - 180px);
  height: auto;
}
.br {
  border-radius: 8px;
}
.br-big {
  border-radius: 16px;
}
</style>