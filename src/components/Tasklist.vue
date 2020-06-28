<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>To Do List</template>

      <template v-slot:lead>
        Do these tasks, check them or add your own and do those. Happy work!
      </template>

      <hr class="my-4">

      <b-list-group>
        <b-list-group-item v-for="(item, index) in list" :key="index" @click="checkTask(index)">
          <input type="checkbox" :id="index" :checked="item.done" />
          <label :for="index" :class="item.done? 'crossed' :''">{{ item.task }}</label>
        </b-list-group-item>
      </b-list-group>

      <form  @submit.prevent="submitNewTask()">
        <b-form-input v-model="x" placeholder="Enter new task"></b-form-input>
      </form>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      taskIndex: null,
      x: ''
    }
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['addTask']),
    checkTask (index) {
      this.taskIndex = index
      this.list[this.taskIndex].done = !this.list[this.taskIndex].done
    },
    submitNewTask () {
      const newTask = {
        task: this.x,
        done: false
      }
      this.addTask(newTask)
      this.x = ''
    }
  }
}
</script>

<style scoped>
  .crossed {
    text-decoration: line-through;
  }
  input[type='checkbox'] {
    margin-right: 10px;
  }
  .list-group-item:hover {
    background-color: yellow;
  }
</style>
