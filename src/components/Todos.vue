<template>
   <div id="todos">
        
        <div v-for="todo in todos" v-bind:key="todo.item">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
   </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name:'Todos',
    components:{
        TodoItem,
    },


    props:['todos']

}
</script>

<style scoped>

</style>