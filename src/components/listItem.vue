<template>
    <div class="list-item clearfix">
        <div class="textBox">
            <input type="checkbox" :checked="listitem.finished" :id="listitem.id" @click="finish(listitem)"/>
            <label :for="listitem.id" v-if="listitem.finished"><i class="fas fa-check-circle"></i></label>
            <label :for="listitem.id" v-else><i class="far fa-circle" ></i></label>
            <label for="">{{listitem.value}}</label>
            <input v-focus="focusState" class="editInput" type="text" @blur="editDone(listitem)" v-model="editText" v-if="listitem.id === editList.id" />
        </div>
        <div class="icon">
            <i class="fas fa-edit" @click="edit(listitem)"></i>
            <i class="fas fa-trash-alt" @click="remove(listitem)"></i>
        </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
    name:'listlist',
    props:{ listitem : Object},
    data() {
        return {
            textInput: '',
            editText: '',
            editList: {},
            focusState: false,
        }
    },
    methods: {
        edit:function(item) {
            this.focusState = true;
            this.editText = item.value;
            this.editList = item;
        },
        editDone:function(item) {
            item.value = this.editText;
            this.edittodo(item);
            this.editText = '';
            this.editList = '';
        },
        remove:function(removeItem) {
            let todoList = this.$store.state.todoList;
            let del_index = todoList.findIndex(function(item,index){
                return removeItem.id === item.id;
            });
            this.removetodo(del_index);
        },
        finish:function(item) {
            this.finishList(item);
        },
        ...mapActions(['edittodo','removetodo', 'finishList'])
    },
}
</script>