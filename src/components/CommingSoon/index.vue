<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/3.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">234</span>人想看</p>
                    <p>主演：任素汐，沈腾，贾玲</p>
                    <p>2021-3-1上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CommingSoon'
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
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
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
    }
</style>
