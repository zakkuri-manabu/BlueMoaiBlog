<template>
  <span class="float">
    <font-awesome-icon class="float-icon" :icon="['fas', 'bars']" />
  </span>
</template>

<style lang="scss">
.float {
  position: fixed;
	width: 50px;
	height: 50px;
	bottom: 80px;
	right: 40px;
	background-color: #4cb6ac;
	color: #FFF;
	border-radius: 50px;
	text-align: center;
	box-shadow: 0 2px 5px rgba(0,0,0,0.26);

  .float-icon {
    margin-top: 17px;
  }
}
</style>

