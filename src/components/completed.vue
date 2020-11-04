<template>
    <div>
        <div class="sortTab"></div>
        <hr />
        <listlist v-for="item in filterList" :key="item.id" :listitem="item"></listlist>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import listlist from './listItem';

export default {
    data() {
        return {
      
        };
    },
    components:{
        listlist
    },
    computed: {
        filterList() {
            return this.todoList.filter(item => {
                return item.finished === true;
            });
         },
        ...mapGetters(['todoList'])
    },
};
</script>



