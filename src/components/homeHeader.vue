<template>
	<div class="contain">
		<div class="logo">
			logo图标
		</div>
		<div class="loginMenu">
			用户信息
		</div>
	</div>
</template>
<script>
	import { Select } from 'ant-design-vue';
	export default {
		name: "homeHeader",
		components: {
			ASelect: Select
		}
	}
</script>

<style scoped>
	.contain{
		width: 100%;
		height: 8vh;
		background-color: #fff;
		border-bottom: 1px solid #333;
		display: flex;
		justify-content: space-between;
	}
	.logo{
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 30px;
	}
	.loginMenu{
		height: 100%;
		margin-right: 30px;
		display: flex;
		align-items: center;
	}
</style>