<template>
    <div>
        <headbar title="个人中心"></headbar>
        <div id="content">
            <login></login>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import headbar from '@/components/Header'
import login from '@/components/Login'
import tabbar from '@/components/Tabbar'
export default {
    components: {
        headbar,
        tabbar,
        login
    }
}
</script>

<style lang="scss" scoped>

</style>
