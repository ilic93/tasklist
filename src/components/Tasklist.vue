<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>To Do List</template>

      <template v-slot:lead>
        Do these tasks, check them or add your own and do those. Happy work!
      </template>

      <hr class="my-4">

      <b-list-group>
        <Task v-for="(item, index) in list"
        :key="index"
        :index="index"
        :task="item.task"
        :done="item.done"
        :deleteTask="deleteFinishedTask"
        :enterChange="enterChange"
        :checkTask="checkTask" />
      </b-list-group>

      <form @submit.prevent="submitNewTask()">
        <b-form-input v-model="taskName" placeholder="Enter new task"></b-form-input>
      </form>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Task from './Task'
export default {
  components: {
    Task
  },
  data () {
    return {
      taskName: ''
    }
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['addTask', 'deleteTask', 'changeTask', 'checkTask']),
    submitNewTask () {
      const newTask = {
        task: this.taskName,
        done: false
      }
      this.addTask(newTask)
      this.taskName = ''
    },
    checkTask (index) {
      this.list[index].done = !this.list[index].done
    },
    deleteFinishedTask (index) {
      this.deleteTask(index)
    },
    enterChange (index, changedTask) {
      this.changeTask({ index, changedTask })
    }
  }
}
</script>

<style scoped>
  .list-group + form {
    margin-top: 15px;
  }
</style>
