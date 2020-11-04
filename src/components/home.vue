<template>
    <div>
        <div class="container clearfix">
            <h1>{{ title }}</h1>
            <div class="sideBar">
                <ol>
                    <li>
                      <router-link active-class="actived-tab" to="/all">全部</router-link>
                    </li>
                    <li>
                      <router-link active-class="actived-tab" to="/active">待辦事項</router-link>
                    </li>
                    <li>
                      <router-link active-class="actived-tab" to="/completed">已完成</router-link>
                    </li>
                </ol>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Todo-List',
        };
    },
};
</script>

<style>
@import '../assets/css/standard.css';
@import '../assets/css/main.css';
</style>