<template>
        <tr>
            <td>{{task.id}}</td>
            <td>{{task.title}}</td>
            <td>{{task.priority}}</td>
            <td><button class="btn btn-danger">REMOVE</button></td>
        </tr>

</template>

<script>
    export default  {
        data() {
            return { }
        },
        props: ['task']
    }
</script>

<style scoped>

</style>