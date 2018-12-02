<template>
  <div class="home">
    <div class="alert alert-success">
        A journey of a thaousand miles beings with a single step.
    </div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Userame</span>
  </div>
  <input type="text" v-model ="user.name" class="form-control" placeholder="Userame" aria-label="Userame" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">First Name</span>
  </div>
  <input type="text" v-model ="user.firstname" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Last Name</span>
  </div>
  <input type="text" v-model ="user.lastname" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Password</span>
  </div>
  <input type="text" v-model ="user.password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
</div>

<button type="button" class="btn btn-primary" @click.prevent= "register()" >
 Register
</button>

  </div>
</template>

<script>
import * as api from '@/services/api_access';

export default {
  data(){
        return {
          user:{
            name: "",
            firstname: "",
            lastname: "",
            password: ""
          }
            
        }
    },
  methods: {
    
    register(){
      api.register(this.user.name, this.user.firstname, this.user.lastname, this.user.password);
    },
    
  }
}
</script>
