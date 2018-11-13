<template>
    <div class="app-component">
        <input type="text" name="search" @keypress="search()" v-model="searchQuery"/>
        <table class="table">
            <thead>
                <tr>
                    <th>Task ID</th>
                    <th>Task Title</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <task-component v-for="task in tasks" :key="task.id" :task="task"></task-component>
                <tr>
                    <td>
                        <input v-model="task.title" type="text" id="task" class="form-control">
                    </td>
                    <td>
                        <select v-model="task.priority" id="select" class="form-control">
                            <option>Low</option>
                            <option>Med</option>
                            <option>High</option>
                        </select>
                    </td>
                    <td>
                        <button @click="store" class="btn btn-primary">ADD</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    //Necesito instalar el paquete de Axios npm install axios
    import TaskComponent from './Task';
    export default  {
        data() {
            return {
                tasks: [

                ],
                task:{
                    id:'',
                    title:'',
                    priority:''
                },
                searchQuery: ''
            }
        },

        components:{
            TaskComponent
        },
        created() {
            this.getTasks();
        },
        methods: {
            getTasks(){
                window.axios.get('/api/tasks')
                    .then(({data})=>{
                        data.data.forEach(task => {
                            this.tasks.push(task);

                        });
                    });
            },
            store(){
                // console.log(this.task.title,this.task.priority);
                window.axios.post('api/tasks',this.task)
                    .then(savedTask => {
                        // this.tasks.push(savedTask.data);
                        this.tasks.unshift(savedTask.data);

                        this.task.title = '';
                        this.task.priority = '';
                        // this.getTasks();
                    });
            },
            search(){
                if(this.searchQuery.length >= 3)
                    console.log(this.searchQuery);
            }
        }
    }
</script>

<style scoped>

</style>
