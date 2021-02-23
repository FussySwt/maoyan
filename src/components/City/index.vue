<template>
    <!-- <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>安徽</li>
                    <li>安徽</li>
                    <li>安徽</li>
                    <li>安徽</li>
                    <li>安徽</li>
                    <li>安徽</li>
                    <li>安徽</li>
                    <li>安徽</li>
                </ul>
            </div>
            <div class="city_sort">
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                    </ul>
                </div>
                <div>
                    <h2>B</h2>
                    <ul>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                    </ul>
                </div>
                <div>
                    <h2>C</h2>
                    <ul>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                    </ul>
                </div>
                <div>
                    <h2>D</h2>
                    <ul>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                    </ul>
                </div>
                <div>
                    <h2>E</h2>
                    <ul>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                        <li>滁州</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
            </ul>
        </div>
    </div> -->
    <div>
        <header>
            <router-link tag="div" to="/film/nowplaying" class="quit">x</router-link>
            <h4>当前城市</h4>
        </header>
        <mt-index-list id="city">
            <div>
                <!-- <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell> -->
                <ul class="hot_city">
                    <li><div>123</div>
                    </li>
                    <li><div>123</div>
                    </li>
                    <li><div>123</div>
                    </li>
                    <li><div>123</div>
                    </li>
                    <li><div>123</div>
                    </li>
                    <li><div>123</div>
                    </li>
                    <li><div>123</div>
                    </li>
                    <li><div>123</div>
                    </li>
                </ul>
            </div>
            <mt-index-section index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
export default {
    name: 'City'
}
</script>

<style lang="scss" scoped>
    header{
        height: 40px;
        border-bottom: 10px solid lightblue;
        position: relative;
        .quit{
            position: absolute;
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h4{
            line-height: 40px;
            text-align: center;
            font-weight: normal;
        }
    }
    header::after{
        content:"";
        display: block;
        clear: both;
    }
    #city{
        touch-action: none;
        .hot_city{
            height: 180px;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-rows: repeat(3,1fr);
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                div{
                    width: 100px;
                    height: 30px;
                    border-radius: 3px;
                    border: none;
                    background-color: #F4F4F4;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }
    }
    /* #content .city_body{
        margin-top: 45px;
        display: flex;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        .city_list{
            flex: 1;
            overflow: auto;
            background:#FFF5F0;
        }
        .city_list::-webkit-scrollbar{
            background-color: transparent;
            width: 0;
        }
        .city_hot{
            margin-top: 20px;
            h2{
                padding-left: 15px;
                line-height: 30px;
                font-size: 14px;
                background:#F0F0F0;
                font-weight: normal;
            }
            ul li{
                float: left;
                background:#fff;
                width: 29%;
                height: 33px;
                margin-top: 15px;
                margin-left: 3%;
                padding: 0 4px;
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                line-height: 33px;
                text-align: center;
                box-sizing: border-box;
            }
        }
        .city_sort{
            div{
                margin-top: 20px;
            }
            h2{
                padding-left: 15px;
                line-height: 30px;
                font-size: 14px;
                background:#F0F0F0;
                font-weight: normal;
            }
            ul{
                padding-left: 10px;
                margin-top: 10px;
                li{
                    line-height: 30px;
                }
            }
        }
        .city_index{
            width: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            border-left: 1px #e6e6e6 solid;
        }
    } */
</style>
