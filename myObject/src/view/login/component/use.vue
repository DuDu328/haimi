<template>
    <div>
        <div class="maybe-head marginb">
            <p>提醒</p>
            <p>1、红包/优惠券每个订单只可使用一个</p>
            <p>2、红包/优惠券金额大于订单应付金额时，差额不予退回。</p>
            <p>3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回（特殊未指定的除外）</p>
        </div>
        <div class="may-cont marginb">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'maybe',
        data() {
            return {

            }
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
</style>