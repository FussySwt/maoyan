<template>
    <div>
        <headbar title="个人中心"></headbar>
        <div id="content">
            <router-view></router-view>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import headbar from '@/components/Header'
import tabbar from '@/components/Tabbar'
export default {
    components: {
        headbar,
        tabbar
    }
}
</script>

<style lang="scss" scoped>

</style>
