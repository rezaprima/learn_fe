<template>
  <div id="login">
	<h1>Login</h1>
	<div class="form_field">
		<div class="field_name">Username</div>
		<input type="text" name="username">
	</div>
	<div class="form_field">
		<div class="field_name">Password</div>
		<input type="password" name="password" id="thepassword">
	</div>
	<div class="form_field">
		<input type="checkbox" onclick="togglePasswordVisible(this)" id="toggleCheck"> Show Password
	</div>
	<div class="submit_btn">
		<input type="submit" title="Login">
	</div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
	input[type=submit]{
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