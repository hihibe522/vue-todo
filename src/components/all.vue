<template>
    <div>
        <div class="sortTab">
            <span>排序依</span>
            <button @click="sortBy('finished')">完成度</button>
            <button @click="sortBy('time')">時間</button>
        </div>
        <hr />
        <div class="todoList">
            <listlist v-for="item in todoList" :key="item.id" :listitem="item"></listlist>
        </div>
    </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex';
import listlist from './listItem';

export default {
    data() {
        return {
            sortType: '',
            todos: this.todoList,
        };
    },
    components:{
        listlist
    },
    methods: {
        sortBy(type) {
            this.sortList(type);
        },
        ...mapActions(['sortList'])
    },
    computed: { 
      ...mapGetters(['todoList']) 
    },
};
</script>

<style scope>
  .sortTab {
      text-align: right;
  }
  button {
      margin: 0 5px;
      height: 30px;
      background-color: #008080;
      color: #e2f2ef;
      border-radius: 5px;
      font-size: 1.1rem;
      border: none;
      cursor: pointer;
  }
</style>