
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
        todoList: [],
    },
    actions:{
        addtodo(context, payload) {
            context.commit('NEWTODO', payload);
        },
        edittodo(context, payload) {
            context.commit('EDITDONE', payload);
        },
        removetodo(context, payload) {
            context.commit('REMOVE', payload);
        },
        finishList(context, payload) {
            context.commit('FINISHED', payload);
        },
        sortList(context, payload) {
            context.commit('SORT', payload);
        }

    },
    mutations: {
        // 將state設定為參數
        NEWTODO(state, payload) {
            state.todoList.push(payload);
        },
        EDITDONE(state, payload) {
            // console.log('EDITDONE');
        },
        REMOVE(state, payload) {
            state.todoList.splice(payload,1);
        },
        FINISHED(state, payload) {
            state.todoList = state.todoList.map( item=> {
                if(item.id === payload.id){
                    item.finished =! item.finished;
                    return { ...item } ;
                }
                return item ;
            });

          
        },
        SORT(state, payload) {
            switch (payload) {
                case 'finished' :
                    let ok = [];
                    let no = [];
                    state.todoList.forEach(item=>{
                        if(item.finished){
                          ok.push(item);
                        }
                        else{
                          no.push(item);
                        }            
                    });
                    state.todoList = [...no,...ok];
                break ; 
                case "time" :
                    state.todoList.sort(function(a, b) {
                        return a.id > b.id ? 1 : -1 ;
                    }); 
                break ;
            }
        },
    },
    getters: {
        todoList:state => state.todoList
    },

})
export default store;