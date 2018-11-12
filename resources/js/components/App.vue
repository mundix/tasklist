<template>
    <div class="app-component">
        <table class="table">
            <thead>
                <tr>
                    <th>Task Title</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <task-component></task-component>
                <tr>
                    <td>
                        <input type="text" id="task" class="form-control">
                    </td>
                    <td>
                        <select id="select" class="form-control">
                            <option>Low</option>
                            <option>Med</option>
                            <option>High</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn btn-primary">ADD</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import TaskComponent from './Task';
    export default  {
        data() {
            return {
                message: "Hello From App Component"
            }
        },
        components:{
            TaskComponent
        },
        created() {
            console.log("We are here");
        }
    }
</script>

<style scoped>

</style>