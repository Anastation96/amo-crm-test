<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th :style="{ minWidth: '40px' }"></th>
          <th :style="{ width: 'auto' }">Название</th>
          <th :style="{ minWidth: '25%' }">Бюджет</th>
          <th :style="{ width: 'auto' }">Статус</th>
          <th :style="{ width: 'auto' }">Ответственный</th>
          <th :style="{ minWidth: '100px' }">Дата создания</th>
        </tr>
      </thead>
      <tbody v-if="props.service && props.service?.leads && props.service.leads.length > 0">
        <template v-for="(item, i) in props.service.leads" :key="i">
          <tr @click="onClick(item.id)">
            <th>{{item.showDetails ? "-" : "+"}}</th>
            <th>{{ item.name}}</th>
            <th>{{ item.price }}</th>
            <th> <div class="status br" :style="{backgroundColor: props.service?.statuses?.find(s => s.id == item.status_id)?.color ?? ''}"> {{ props.service?.statuses?.find(s => s.id == item.status_id)?.name}} </div> </th>
            <th>
              <div class="responsible">
                <div class="round">
                  <img src="../assets/avatar-people-person-svgrepo-com.svg">
                </div>
                {{ props.service?.users.find(s => s.id == item.responsible_user_id)?.name ?? '' }}
              </div>
            </th>
            <th>{{ item?.formatDate() }}</th>
          </tr>
          <tr v-if="item.showDetails">
            <th class="details-th" :colspan="6">
              <div class="details">
                <div class="round"> <img src="../assets/avatar-people-person-svgrepo-com.svg"> </div>
                {{ props.service?.contacts?.find(contact => contact.responsible_user_id == item.responsible_user_id)?.name ?? '' }}
                <div class="round"> <img src="../assets/phone-rounded-svgrepo-com.svg"> </div>
                <div class="round"> <img src="../assets/mail-svgrepo-com.svg"> </div>
              </div>
            </th>
          </tr>
        </template>
      </tbody>
    </table>
    <div v-if="!service.leads.length" class="no-data">
      No data
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Service from "../Service";

const props = defineProps({
  service: {type: Object as PropType<Service>}
})

const onClick = (id: number) => {
  let item = props.service?.leads?.find(lead => lead.id == id);
  if (!item) return;
  item.showDetails = !item.showDetails
}

</script>

<style lang="scss">
.table {
  background-color: lavender;
  overflow: auto hidden;
  width: 100%;
  height: auto;
  font-weight: 100;
  table {
    width: 100%;
    th {
      text-align: center;
      height: 40px;
      background-color: #fff;
      padding: 0 8px;
      &.details-th {
        padding: 0;
      }
      span {
        display: flex;
        align-self: center;
      }
      .status {
        display: flex;
        align-items: center;
        padding: 0 8px;
        height: 25px;
        width: max-content;
        text-align: left;
      }
    }
    thead {
      font-weight: bold;
      th {
        background-color: rgb(203, 203, 203);
      }
    }
  }
  .no-data {
    min-width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
img {
  width: 18px;
  height: 18px;
}
.details {
  min-width: calc(100% - 32px);
  height: 40px;
  background-color: lavender;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 16px;
}
.round {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lavender;
}
.responsible {
  display: flex;
  align-items: center;
}
</style>