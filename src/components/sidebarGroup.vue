<template>
    <div>
        <template v-for="item in menuList">
            <a-sub-menu v-if="item.children && item.children.length" :key="item.subKey">
                <template #icon>
						<menu-unfold-outlined />
					</template>
                <template #title>
					{{ item.title }}
				</template>
                <sidebarGroup :list="item.children">

                </sidebarGroup>
            </a-sub-menu>
            <a-menu-item :key="item.itemKey" v-else>
                <template #icon>
					<menu-unfold-outlined />
				</template>
				{{item.title}}
            </a-menu-item>
        </template>
    </div>
</template>

<script>
    import { Menu } from 'ant-design-vue';
    import { MenuUnfoldOutlined } from '@ant-design/icons-vue';
    import { computed, onMounted } from 'vue';
    import sidebarGroup from '@/components/sidebarGroup.vue'
    export default {
        name: 'sidebarGroup',
        components: {
            AMenuItem: Menu.Item,
            ASubMenu: Menu.SubMenu,
            sidebarGroup
        }
    }
</script>
<script setup>
    let props = defineProps({
        list: Array
    })
    let menuList = computed(() => {
        return props.list
    })
    onMounted( () => {
        console.log("获取组件props：",props.list)
    })
</script>