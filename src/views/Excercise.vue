<template>
  <div class="home">
    <div class="alert alert-success">
        The only bad workouts are the ones that never happen!
    </div>
    <h1>this is an excercise page</h1>
    <div class="card" style="width: 18rem;">
      <div class="card" style="width: 18rem;">
      <div class="card-header">Submit a workout</div>
        <ul class="list-group list-group-flush">
<li class="list-group-item">Excercise Type:
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox">
          </div>
          </li>
<li class="list-group-item">Routine Quantity:
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox">
          </div>
          </li>
<li class="list-group-item">Routine Lenght:
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input">
            </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox">
          </div>
          </li>
</ul>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       success
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>
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
