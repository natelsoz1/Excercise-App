<template>
  <div class="home">
    <h1>Your Goals</h1>

<h3>Push-ups Done</h3>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h3>Miles Ran</h3>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h3>Calories Burnt</h3>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
