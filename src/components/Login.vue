<template>
  <div id="login">
    <h1>Login</h1>
    <div class="form_field">
      <div class="field_name">Username</div>
      <input type="text" v-model="username" name="username">
    </div>
    <div class="form_field">
      <div class="field_name">Password</div>
      <input :type="passwordType" v-model="password" name="password" id="thepassword">
    </div>
    <div class="form_field">
      <input type="checkbox" v-model="showPassword" id="toggleCheck"> Show Password
    </div>
    <div class="submit_btn">
      <input type="button" title="Login" :disabled="loginNotAllowed" value="Login">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    }
  },
  computed: {
    passwordType: function() {
      return this.showPassword ? 'text' : 'password'
    },
    loginNotAllowed: function() {
      return !(this.username !== '' && this.password !== '')
    }
  }
}
</script>

<style>
  form_field{
    display: block;
  }
  .field_name{
    font-size: 12pt;
  }
  input{
    font-size: large;
  }
  .submit_btn {
    padding-top: 5px;
    width: 100%;
    margin: auto;
  }
  input[type=button]{
    margin: auto;
    width: 50%;
    background-color: #6ebe40;
    border-radius: 4px;
  }

  input[type=text]{
    border-radius: 4px;
    border-color: gray;
  }
  input[type=password]{
    border-radius: 4px;
    border-color: gray;
  }
</style>
