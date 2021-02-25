<template>
    <div class="messagebox" ref="msg">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div @click="handleCancel">{{cancel}}</div>
            <div @click="handleOk">{{ok}}</div>
        </div>
    </div>    
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .messagebox{max-width: 300px;min-height: 160px;border: solid 1px #ccc;border-radius: 5px;background-color: white;box-shadow: 3px 3px 3px lightgray;position: fixed;left: 50%;top: 50%;
    transform: translateX(-50%) translateY(-50%);
        h2{text-align: center;line-height: 40px;font-size: 18px;}
        p{text-align: center;}
    }
    .messagebox>div{display: flex;position:absolute;bottom: 0;width:100%;border-top: 1px solid #ccc;
        div{flex: 1;text-align: center;line-height: 30px;border-right: solid 1px #ccc;}
        div:last-child{border: none;}
    }
</style>
