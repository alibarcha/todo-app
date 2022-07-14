<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click="$emit('del-todo',todo.id)" class="del">x</button>
            </p>
    </div>
</template>

<script>
export default {
    name:'TodoItem',

    props:['todo'],

    methods:{
        markComplete(){
            this.todo.completed=!this.todo.completed
        }
    }
 

}
</script>

<style scoped>
.todo-item{
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    padding: 15px 30px;
}
.is-complete{
    text-decoration: line-through;
}
.del{
    background: rgb(226, 68, 10);
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    font-weight: bold;
    color: white;
    text-align: center;
    line-height: 50%;
    
    float: right;
    margin-right: 110px;
}
.del:hover{
    background: orangered;
    color: #222;
     width: 22px;
    height: 22px;
}
</style>