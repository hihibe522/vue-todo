<template>
    <div>
        <input id="textIn" type="text" v-model="textInput" @keyup.enter="add" placeholder="new todo" />
        <button class="addList"  @click="add">Add</button>
        <hr />
        <div class="todoList">
            <listlist v-for="item in filterList" :key="item.id" :listitem="item"></listlist>
        </div>
    </div>
</template>

<script>
import { mapGetters , mapActions} from "vuex";
import listlist from "./listItem";

export default {
    data() {
        return {
            textInput: '',
            editText: '',
            editList: {},
        };
    },
    components:{
        listlist
    },
    computed: {
        filterList(){
            return this.todoList.filter( item => {
                return item.finished === false;
            });
        },
        ...mapGetters(['todoList'])
    },
    methods: {
        add: function () {
            let text = this.textInput.trim();
            // 加入timestamp 作為list-item ID 
            let timestamp = Math.floor(Date.now());
            if (!text) {
                return ;
            }
            let newTodo = {
              id: timestamp,
              value: text,
              finished: false,
            };
            this.addtodo(newTodo);
            this.textInput = '';
        },
        ...mapActions(['addtodo'])
    },
};
</script>

<style scoped>

#textIn {
  width: 70%;
}

.addList {
  margin: 0 20px;
  height: 30px;
  background-color: #008080;
  color: #e2f2ef;
  border-radius: 5px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
}

</style>