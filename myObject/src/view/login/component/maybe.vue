<template>
    <div>
        <div class="maybe-head marginb">
            <p>提醒</p>
            <p>1、红包/优惠券每个订单只可使用一个</p>
            <p>2、红包/优惠券金额大于订单应付金额时，差额不予退回。</p>
            <p>3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回（特殊未指定的除外）</p>
        </div>
        <div class="maybe-cont marginb">
            <ul>
                <li v-for="item in CouponData">
                    <div class="bonus-content">
                        <div class="b-amount c_red">
                            <p>
                                <i>￥</i>
                                <span class="f24">{{item.AmountLeft.split('.')[0]}}</span>
                            </p>
                            <em>满{{item.LimitAmout.split('.')[0]}}使用</em>
                        </div>
                        <div class="bonus-info">
                            <p class="f14">{{item.Title}}</p>
                            <em class="c_999">{{item.CreateTime.split(' ')[0]}}/{{item.ExpiryTime.split(' ')[0]}}</em>
                        </div>
                    </div>
                    <div class="bonus-extra">
                        <p class="handle-show c_999">使用说明</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'maybe',
        data() {
            return {
                CouponData: []
            }
        },
        created() {
            this.$http.jsonp('http://m.haimi.com/api/bonus/all-list?page=1&pageSize=20&IsActivated=Y&current=Y&IsUsed=N&platform=WAP', {
                jsonp: '_callback'
            }).then(function (res) {
                    this.CouponData = res.body.data;
                },
                function (res) {
                    console.log(res)
                })
        }
    }
</script>

<style scoped lang='less'>
    .marginb {
        margin-top: 10px;
    }
    
    .maybe-head {
        background: #fff;
        padding: 10px 20px;
        p {
            font-size: 10px;
            color: #666;
            line-height: 20px;
        }
    }
    
    .maybe-cont {
        padding: 0 10px;
        ul {
            li {
                margin-top: 8px;
                background: #fff;
                position: relative;
            }
        }
    }
    
    .bonus-content {
        padding: 0 40px 0 80px;
        border-bottom: 1px solid #eee;
        position: relative;
        em,
        i {
            font-weight: 500;
            font-style: normal;
        }
    }
    
    .b-amount {
        position: absolute;
        left: 20px;
        top: 10px;
    }
    
    .bonus-info {
        /*        height: 1.893rem;*/
        border-left: 1px solid #eee;
        padding: 20px 0 0 10px;
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: .08rem;
        }
    }
    
    .bonus-extra {
        padding: 10px;
        position: relative;
        .handle-show {
            position: relative;
            padding-right: .33rem;
            display: inline-block;
            &:after {
                position: absolute;
                top: .1rem;
                right: 0;
                display: block;
                width: .2rem;
                height: .2rem;
                content: ' ';
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFW…8Y09P6N1Hfwg1kddiy6ge7hUMeuEfMhL0GnME3/n8W+RRgAF5iSW7OX/bgAAAAAElFTkSuQmCC);
                background-repeat: no-repeat;
                background-size: 100%;
            }
        }
    }
</style>