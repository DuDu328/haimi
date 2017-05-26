<template>
    <div>
        <div class="evaluate" v-for="item in evaluate">
            <div class="evaluate-head">
                <span class="evaluate-info">
                    <img :src="item.Buyer.Avatar" alt="">
                    <span class="evaluate-Reviewer">{{item.Buyer.NickName}}</span>
                </span>
                <span class="evaluate-time">{{item.CreateTime}}</span>

            </div>
            <div class="evaluate-cont">{{item.BuyerNote}}</div>
            <!--图片观赏-->
            <picture :imgData="item.BuyerPicturesThumb.split(',')"></picture>
            <div class="explain" v-if="item.SellerNote">
                <p>【卖家解释】：{{item.SellerNote}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import picture from '@/components/picture'
    export default {
        name: 'evaluate',
        props: ['evaluate'],
        components: {
            picture
        }
    }
</script>
<style scoped lang='less'>
    .evaluate {
        background: #fff;
        padding: 10px;
        .evaluate-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .evaluate-info {
                display: flex;
                align-items: center;
            }
            img {
                width: 30px;
                height: 30px;
            }
            .evaluate-Reviewer {
                color: #666;
                padding-left: 10px;
            }
        }
        .evaluate-time {
            color: #ccc;
        }
        .evaluate-cont {
            padding: 10px;
            line-height: 25px;
        }
        .explain {
            color: #cbac81;
        }
    }
</style>