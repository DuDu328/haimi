<template>
	<div>
		<div class="main sec sed">
			<div class="Location marginb">
				<i class="iconfont icon-dingwei"></i><span @click="Harvest">请添加收获地址</span>
			</div>
			<div class="shopInfo" ref="secsBox">
				<div class="shopbox-head">
					<i class="iconfont icon-shouye"></i><span>海蜜严选</span>
				</div>
				<dl v-for="item in shopGoods">
					<dt><img :src="item.picture" alt=""></dt>
					<dd>
						<p class="priceBox"><span class="text-title nobr">{{item.name}}</span></p>
						<p class="priceBox"><span ref="utilPrice">￥{{item.price}}</span><span>x <b ref="utilNum">{{item.num}}</b></span></p>
					</dd>
				</dl>
				<ul class="Calculation">
					<li><span>宝贝总价</span><span>￥{{price}}</span></li>
					<li><span>优惠金额</span><span></span></li>
					<li><span>运费</span><span>包邮</span></li>
					<li class="message">
						<input type="text" placeholder="给卖家留言：">
					</li>
					<li><span>共<em></em>宝贝 合计：<em>￥{{price}}</em></span></li>
				</ul>

			</div>

			<div class="Coupon">
				<div><span><i class="iconfont icon-tianjia2"></i>使用优惠券/优惠券</span><span></span></div>
				<div><span>请输入活动优惠码</span><span class="use">使用</span></div>
			</div>
			<div class="UseIntegral">
				<div>
					<p class="checkbox">
						<span ref='bugBox'></span>
					</p>
					<p class="use">使用积分</p>
				</div>
				<div class="maybe">
					<p>可用<em></em>积分抵扣<em></em>元</p>
					<p> 现有积分<em></em></p>
				</div>
			</div>
			<div class='Settlement'>
				<div class="elem">
					<p>实付款：￥<b>{{price}}</b></p>
					<br/>
					<p>应付金额：￥<b>{{price}}</b></p>
				</div>
				<span>提交订单</span>
			</div>
			<!--弹出框-->
			<div class="HarvestMark" ref="Harvest"></div>
			<div class="address" ref="address">
				<h4>新增收获地址<span class="close"></span></h4>
				<ul>
					<li>
						<input type="text" placeHolder="收货人姓名">
					</li>
					<li>
						<input type="text" placeHolder="手机号码">
					</li>
					<li>
						<input type="text" placeHolder="所在地区">
					</li>
					<li>
						<input type="text" placeHolder="详细地址">
					</li>
				</ul>
				<button>保存</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Settlement',
		props: ['shopGoods'],
		data() {
			return {
				price: ''
			}
		},
		created() {
			for (var i in this.shopGoods) {
				this.price = parseInt(this.price + this.shopGoods[i].price * 1);
			}
		},
		methods: {
			Harvest() {
				this.$refs.Harvest.style.display = "block";
				this.$refs.address.style.display = "block";
			}
		}
	}
</script>
<style scoped lang='less'>
	.main {
		-webkit-font-smoothing: antialiased;
	}
	
	.sed {
		top: 0;
	}
	
	.marginb {
		margin-bottom: 10px;
	}
	
	.Location {
		background: #fff;
		padding: 10px;
	}
	
	.shopbox-head {
		display: flex;
		align-items: center;
		background: #fff;
		padding: 10px;
		border-bottom: 1px solid #e6e6e6;
		.shopbox-title {
			padding-left: 25px;
		}
	}
	
	.checkbox {
		background: #fff;
		padding-right: 10px;
		position: absolute;
		span {
			display: block;
			width: 10px;
			height: 10px;
			border-radius: 100%;
			border: 1px solid #e6e6e6;
		}
	}
	
	.shopInfo {
		background: #fff;
		padding: 0 10px;
		dl {
			display: flex;
			background: #fff;
			box-sizing: border-box;
			border-bottom: 1px solid #e6e6e6;
			padding: 10px 0;
			width: 100%;
			dt {
				width: 20%;
				img {
					width: 100%;
				}
			}
			dd {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left: 10px;
				box-sizing: border-box;
				width: 75%;
				p {
					width: 100%;
				}
				.priceBox {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
	
	.checkbox {
		background: #fff;
		padding-right: 10px;
		span {
			display: block;
			width: 10px;
			height: 10px;
			border-radius: 100%;
			border: 1px solid #e6e6e6;
		}
	}
	
	.Calculation {
		li {
			background: #fff;
			border-bottom: 1px solid #e6e6e6;
			padding: 10px;
			display: flex;
			justify-content: space-between;
		}
		li:last-child {
			justify-content: flex-end;
		}
		.message {
			background: #eee;
			padding: 5px 10px;
			color: #999;
			font-size: 10px;
			input {
				width: 100%;
			}
			::-webkit-input-placeholder {
				font-size: 10px;
			}
		}
	}
	
	.Coupon {
		div {
			background: #fff;
			border-bottom: 1px solid #e6e6e6;
			display: flex;
			justify-content: space-between;
			padding: 10px;
		}
	}
	
	.UseIntegral {
		background: #fff;
		display: flex;
		justify-content: space-between;
		padding: 15px 10px 27px 10px;
		.use {
			padding-left: 25px;
		}
	}
	
	.Settlement {
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.elem {
			padding: 5px 10px;
			box-sizing: border-box;
		}
		p {
			display: inline-block;
			padding-right: 25px;
			line-height: 20px;
			&:nth-child(1) {
				color: #991f33;
			}
			&:nth-child(2) {
				color: #999;
			}
		}
		span {
			background: #801a2a;
			color: #fff;
			width: 80px;
			display: inline-block;
			line-height: 50px;
			text-align: center;
		}
	}
	
	.HarvestMark {
		display: none;
		position: absolute;
		bottom: 0;
		top: 0;
		width: 100%;
		z-index: 999;
		background: rgba(0, 0, 0, .5);
	}
	
	.address {
		display: none;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		background: #fff;
		transition: 2s top;
		h4 {
			font-weight: normal;
			line-height: 50px;
			text-align: center;
			span {
				position: absolute;
				right: 20px;
				&:after {
					content: 'X';
				}
			}
		}
		ul li {
			border-top: 1px solid #e6e6e6;
			box-sizing: border-box;
			line-height: 40px;
			padding-left: 20px;
		}
		button {
			background: #811829;
			color: #fff;
			display: block;
			line-height: 40px;
			width: 100%;
		}
	}
</style>