<template>
  <div class="container">
    <h1 class="is-size-2 has-text-centered page-header">Task Manager</h1>

    <div class="task box"
      v-for="(task, index) in tasks"
      v-bind:item="task"
      v-bind:index="index"
      v-bind:key="task.id"
    >
      <div class="columns">
        <div class="column is-1"
          v-if="task.status == 'New'"
        >
          <input type="checkbox" name="status" id="status">
        </div>
        <div class="column is-1"
          v-else
        >
          <input type="checkbox" name="status" id="status" checked>
        </div>
        <div class="column is-three-quarters">
          <h3 class="is-size-4">{{ task.name }}</h3>
          <hr>
          <p>{{ task.description }}</p>
        </div>
        <div class="column has-text-weight-bold">
          {{ task.dueDate }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'AllTasks',
    data () {
      return {
        tasks: []
      }
    },
    mounted() {
      axios.get('http://localhost:3000/api/tasks')
        .then(response => (this.tasks = response.data));
    }
  }
</script>

<style scoped>
  .page-header {
    color: #00ee20;
    padding: 1em 0;
  }
</style>