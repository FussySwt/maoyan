<template>
    <div class="movie_body" v-if="nowplayingList.length > 0">
        <ul>
            <li v-for="data in nowplayingList" :key="data.filmId" @click="handleClick(data.filmId)">
                <div class="pic_show"><img :src="data.poster" alt=""></div>
                <div class="info_list">
                    <h2>{{data.name}} <span>{{data.filmType.name}}</span></h2>
                    <p>观众评分 <span class="grade">{{data.grade}}</span></p>
                    <p>主演：{{data.actors | actorfilter}}</p>
                    <p>{{data.nation}} | {{data.runtime}}分钟</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
        <footer>
            ----到底了----
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { Indicator } from 'mint-ui';
import Vue from 'vue'
Vue.filter('actorfilter',(item)=>{
    return item.map(item=>item.name).join(" ")
})
export default {
    name: 'Nowplaying',
    computed: {
        ...mapState(['nowplayingList'])
    },
    mounted () {
        if (this.nowplayingList.length === 0) {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$store.dispatch('getNowplayingAction')
        }
    },
    methods: {
        handleClick(data) {
            this.$router.push({name:'details',params:{uid:data}})
        }
    }
}
</script>

<style lang="scss" scoped>
    #content .movie_body{
        flex: 1;
        overflow: auto;
        ul{
            margin: 0 12px;
            overflow: hidden;
            li{
                margin-top: 12px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e6e6e6;
                padding-bottom: 10px;
            }
        }
        .pic_show{
            width: 64px;
            height: 90px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info_list{
            margin-left: 10px;
            flex: 1;
            position: relative;
            h2{
                font-size: 17px;
                line-height: 24px;
                width: 150px;
                font-weight: normal;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                span{
                    font-size: 14px;
                    color: white;
                    display: inline-block;
                    width: 25px;
                    height: 18px;
                    background-color: lightgray;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 18px;
                }
            }
            p{
                font-size: 13px;
                color: #666;
                line-height: 22px;
                width: 200px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .grade{
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
            }
            img{
                width: 50px;
                position: absolute;
                right: 10px;
                top: 5px;
            }
        }
        .btn_mall,.btn_pre{
            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            background-color: #f03d37;
            color: #fff;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
        }
        .btn_pre{
            background-color: #3c9fe6;
        }
        footer{
            height: 50px;
            background-color: #FAFAFA;
            line-height: 50px;
            text-align: center;
        }
    }
</style>
