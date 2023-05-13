<template>
	<div class="contain">
		<a-menu 
			mode="inline"
			@select="selectMenu"
			theme="dark"
		>
			<template v-for="item in menulist">
				<a-sub-menu v-if="item.children.length" :key="item.subKey">
					<template #icon>
						<menu-unfold-outlined />
					</template>
					<template #title>
						{{ item.title }}
					</template>
					<sidebar-group :list="item.children"></sidebar-group>
				</a-sub-menu>
				<a-menu-item v-else :key="item.itemKey">
					<template #icon>
						<menu-unfold-outlined />
					</template>
					{{item.title}}
				</a-menu-item>
			</template>
		</a-menu>
	</div>
</template>

<script>
  import { Menu } from 'ant-design-vue';
  import { MenuUnfoldOutlined } from '@ant-design/icons-vue';
  import sidebarGroup from '@/components/sidebarGroup.vue'
	export default {
		name: 'homeSidebar',
		components: {
			AMenu: Menu,
			AMenuItem: Menu.Item,
			ASubMenu: Menu.SubMenu,
			MenuUnfoldOutlined,
			sidebarGroup
		}
	}
</script>

<script setup>
	import { reactive, onMounted, ref } from 'vue';
	import { useRouter, useRoute } from 'vue-router'
	import routesList from '../assets/json/routes.json'
	let menulist = ref([])
	let router = useRouter()
	onMounted(() => {
		if(routesList.status == 1){
			menulist.value = routesList.data
		}
	})
	let selectMenu = ( data ) => {
		console.log(data)
		router.push(data.key)
	}
	// menulist = [
	// {
	// 		title: '首页',
	// 		// icon: <menu-unfold-outlined />,
	// 		itemKey: '/',
	// 		subKey: '1',
	// 		route: '',
	// 		children: [
				
	// 		]
	// 	},
	// 	{
	// 		title: '权限管理',
	// 		// icon: <menu-unfold-outlined />,
	// 		itemKey: '1',
	// 		subKey: '1',
	// 		route: '',
	// 		children: [
	// 			{
	// 				title: '路由管理',
	// 				// icon: <menu-unfold-outlined />,
	// 				itemKey: '/permission/routeSetting',
	// 				subKey: '1',
	// 				route: 'routeSetting',
	// 				key: 'routeSetting',
	// 				children: [
						
	// 				]
	// 			},
	// 		]
	// 	},
	// 	{
	// 		title: '校友管理',
	// 		// icon: <menu-unfold-outlined />,
	// 		itemKey: '2',
	// 		subKey: '2',
	// 		route: '',
	// 		children: [
	// 			{
	// 				title: '校友列表',
	// 				// icon: <menu-unfold-outlined />,
	// 				itemKey: '/alumni/alumniList',
	// 				subKey: '3',
	// 				route: '',
	// 				children: [

	// 				]
	// 			}
	// 		]
	// 	},
	// 	{
	// 		title: '内容管理',
	// 		// icon: <menu-unfold-outlined />,
	// 		itemKey: '5',
	// 		subKey: '5',
	// 		route: '',
	// 		children: [
	// 			{
	// 				title: '文章管理',
	// 				// icon: <menu-unfold-outlined />,
	// 				itemKey: '/content/articleList',
	// 				subKey: '6',
	// 				route: '',
	// 				children: [

	// 				]
	// 			},
	// 			{
	// 				title: '文章编辑',
	// 				// icon: <menu-unfold-outlined />,
	// 				itemKey: '/content/articleEdit',
	// 				subKey: '7',
	// 				route: '',
	// 				children: [

	// 				]
	// 			},
	// 		]
	// 	},
	// ]
</script>

<style lang="less" scoped>
	.contain{
		width: 13vw;
	}
	/deep/.ant-menu-item{
		font-size: 19px;
		height: 50px;
	}
	/deep/.ant-menu-item-icon{
		font-size: 19px;
	}
	/deep/.ant-menu-submenu-title{
		font-size: 19px;
		height: 50px;
	}
</style>