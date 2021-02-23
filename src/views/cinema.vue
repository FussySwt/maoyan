<template>
    <div>
        <headbar title="猫眼影院"></headbar>
        <div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-xiala"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-xiala"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-xiala"></i>
				</div>
			</div>
            <cinemaList></cinemaList>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import headbar from '@/components/Header'
import cinemaList from '@/components/CinemaList'
import tabbar from '@/components/Tabbar'
export default {
    components: {
        headbar,
        tabbar,
        cinemaList
    }
}
</script>

<style lang="scss" scoped>
    #content{
        .cinema_menu{width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
    }
</style>
