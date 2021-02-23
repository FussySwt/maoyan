<template>
    <div id="main">
        <headbar title="猫眼电影"></headbar>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/city" class="city_name">
                    <span>滁州</span><i class="iconfont icon-xiala"></i>
                </router-link>
                <div class="hot_switch">
                    <router-link tag="div" to="/film/nowplaying" class="hot_item" active-class="active">正在热映</router-link>
                    <router-link tag="div" to="/film/commingsoon" class="hot_item" active-class="active">正在热映</router-link>
                </div>
                <router-link tag="div" to="/film/search" class="search_entry" active-class="active">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import headbar from '@/components/Header'
import tabbar from '@/components/Tabbar'
export default {
    name: 'Film',
    components: {
        headbar,
        tabbar
    }
}
</script>

<style lang="scss" scoped>
    .myClass{color: red;}
    #content{
        flex: 1;
        overflow: auto;
        margin-bottom: 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        .movie_menu{
            width: 100%;
            height: 45px;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            justify-content: space-between;
            .city_name{
                margin-left: 20px;
                height: 100%;
                line-height: 45px;
            }
            .city_name.active{
                color: #ef4238;
                border-bottom: 2px solid #ef4238;
            }
            .hot_switch{
                display: flex;
                height: 100%;
                line-height: 45px;
            }
            .hot_item{
                font-size: 15px;
                color: #666;
                width: 80px;
                text-align: center;
                margin: 0 12px;
                font-weight: 700;
            }
            .hot_item.active{
                color: #ef4238;
                border-bottom: 2px solid #ef4238;
            }
            .search_entry{
                margin-right: 20px;
                height: 100%;
                line-height: 45px;
                box-sizing: border-box;
            }
            .search_entry.active{
                color: #ef4238;
                display: block;
                border-bottom: 2px solid #ef4238;
            }
            .search_entry i{
                font-size: 24px;
                color: red;
            }
        }
    }
</style>
