<template>
  <b-list-group-item>
    <b-form v-if="!isChanging" class="col-md-9">
      <input type="checkbox" :id="index" :checked="done" @click="checkTask(index)" />
      <label :for="index" :class="done ? 'crossed' : ''">{{ task }}</label>
    </b-form>
    <b-form v-else class="col-md-9" @submit.prevent="completeChange()">
      <b-form-input
      v-model="changedTaskName"
      ></b-form-input>
    </b-form>
    <b-button-group>
      <b-button variant="primary" @click="changeTask"><i class="fa fa-pencil" aria-hidden="true"></i></b-button>
      <b-button variant="secondary" @click="deleteTask(index)"><i class="fa fa-trash" aria-hidden="true"></i></b-button>
    </b-button-group>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    task: String,
    done: Boolean,
    index: Number,
    deleteTask: Function,
    enterChange: Function,
    checkTask: Function
  },
  data () {
    return {
      changedTaskName: '',
      isChanging: false
    }
  },
  methods: {
    changeTask () {
      this.isChanging = !this.isChanging
      this.changedTaskName = this.task
    },
    completeChange () {
      this.enterChange(this.index, this.changedTaskName)
      this.isChanging = false
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
  .list-group-item > * {
    display: inline-block;
  }
</style>
