<template>
  <div class="home">
    <div class="alert alert-success">
        A journey of a thaousand miles beings with a single step.
    </div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Userame</span>
  </div>
  <input type="text" id ="name" class="form-control" placeholder="Userame" aria-label="Userame" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">First Name</span>
  </div>
  <input type="text" id ="firstname" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Last Name</span>
  </div>
  <input type="text" id ="lastname" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Password</span>
  </div>
  <input type="text" id ="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
</div>

<button type="button" class="btn btn-primary" @click.prevent= "register()" >
 Register
</button>





<!-- Modal -->
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
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>

import api from '@/components/api_access';
export default {
  
  methods: {
    
    register(){
      var name = document.getElementById("name").value
      var firstname = document.getElementById("firstname").value 
      var lastname = document.getElementById("lastname").value 
      var password = document.getElementById("password").value
        api.register(name, firstname, lastname, password);
    },
    
  }
}
</script>
