<template>
	<div class="menu">
		<div class='main sec' ref="sec" v-if="isExist<=0">
			<div class="shopcar">
				<a href="#">
					<img src="../../static/images/shopcar.png" alt="">
				</a>
				<span @click="toHome">去首页逛逛</span>
			</div>
			<div class="fullhead">大家都在买</div>
			<fullwater :fullData="fullData"></fullwater>
		</div>
		<div class='main sec' ref="secs" v-else-if="isExist>=0">
			<div class="shopbox">
				<div class="shopbox-head">
					<div class="checkbox" @click='cheClick'>
						<span ref='bagBox'></span>
					</div>
					<div class="shopbox-title"><i class="iconfont icon-shouye"></i><span>海蜜严选</span></div>
				</div>
				<div class="shopInfo" ref="secsBox" v-for="(item,index) in shopGoods" v-if="item">
					<!--                    {{item}}-->
					<div class="checkbox" @click="chose(index,item.price,item.num)">
						<span ref='bugBox'></span>
					</div>
					<dl>
						<dt><img :src="item.picture" alt=""></dt>
						<dd>
							<p class="priceBox"><span class="text-title nowrap">{{item.name}}</span><span @click="del(item.ID,index)">删除</span></p>
							<p class="priceBox"><span ref="utilPrice">￥{{item.price}}</span><span>x<b ref="utilNum">{{item.num}}</b></span></p>
						</dd>
					</dl>
				</div>

				<div class='Settlement'>
					<label for="checkAll" class="checkAll" @click='cheClick'>
						<div class="checkbox">
							<span ref='bchgU'></span>
						</div>
						<h4 id="checkAll">全选</h4>
					</label>
					<div class='shuju'>
						<div>
							<p>合计：￥{{Price}}</p>
							<br/>
							<p>已优惠{{element}}元</p>
						</div>
						<span @click="Settlement">立即结算</span>
					</div>
				</div>
			</div>
		</div>
		<div class="delMark" ref="delMark"></div>
		<div class="delBox" ref="delBox">
			<div class="delInfo">确定要删除吗？</div>
			<div class="delBtn">
				<span @click="sure">确定</span>
				<span @click="cancel">取消</span>
			</div>
		</div>
		<footerNav></footerNav>
		<router-view :shopGoods="shopGoods"></router-view>
	</div>
</template>
<script>
	import fullwater from '@/components/fullwater/fullwater'
	import footerNav from '@/components/footer'
	export default {
		name: 'Shop',
		data() {
			return {
				fullData: [],
				isExist: '',
				shopGoods: [],
				price: '',
				Price: 0,
				element: 0,
				id: '',
				index: '',
				shopData: ''
			}
		},
		components: {
			fullwater,
			footerNav
		},
		created() {
			this.$http.jsonp('http://m.haimi.com/api/cart/info?clearInvalidProducts=Y&platform=WAP', {
				jsonp: '_callback'
			}).then(function (response) {
				var data = response.body;
				this.fullData = data;
			}, function (response) {
				console.log(response)
			})


			//获取数据
			var arr = [];
			arr = JSON.parse(localStorage.getItem('anyone'))

			this.$store.num = arr.length;
			this.isExist = arr.length;
			for (var i = 0; i < arr.length; i++) {
				this.$store.state.list = JSON.parse(localStorage.getItem('product' + arr[i]));
				this.shopGoods.push(this.$store.state.list)

			}
			for (var i = 0; i < this.shopGoods.length; i++) {
				this.price += Number(this.shopGoods[i].price)
			}

		},
		methods: {
			toHome() {

				},
				del: function (id, index) {
					this.$refs.delMark.style.display = "block";
					this.$refs.delBox.style.display = "block";
					this.id = id;
					this.index = index;
				},
				sure() {
					window.localStorage.removeItem('product' + this.id);
					var arr = window.localStorage['anyone']
					var aa = arr ? JSON.parse(arr) : [];
					aa.splice(this.index, 1);
					window.localStorage.setItem('anyone', JSON.stringify(aa))
					this.shopGoods.splice(this.index, 1)

					if (this.isExist <= 0) {
						this.$refs.secs.style.display = "none";
					}
					this.$refs.delMark.style.display = "none";
					this.$refs.delBox.style.display = "none";
				},
				cancel() {
					this.$refs.delMark.style.display = "none";
					this.$refs.delBox.style.display = "none";
					return;
				},
				cheClick() {
					if (this.$refs.bagBox.className == 'bagUrl') {
						this.$refs.bagBox.className = '';
						this.$refs.bchgU.className = '';
						for (var i = 0; i < this.$refs.bugBox.length; i++) {
							this.$refs.bugBox[i].className = '';
						}
						for (var j = 0; j < this.$refs.utilPrice.length; j++) {
							this.price = parseInt(this.$refs.utilPrice[j].innerHTML.slice(1)); //单价
							this.Price -= this.price * this.$refs.utilNum[j].innerHTML; //总价
							this.Price = 0;
						}
					} else {
						//添加样式
						this.$refs.bagBox.className = 'bagUrl';
						this.$refs.bchgU.className = 'bagUrl';
						for (var i = 0; i < this.$refs.bugBox.length; i++) {
							this.$refs.bugBox[i].className = 'bagUrl';
							if (this.$refs.bugBox[i].className == 'bagUrl') {
								this.Price = 0;
							}
						}
						for (var j = 0; j < this.$refs.utilPrice.length; j++) {
							this.price = parseInt(this.$refs.utilPrice[j].innerHTML.slice(1))
							this.Price += this.price * this.$refs.utilNum[j].innerHTML;
						}

					}
				},
				chose(index, price, num) {
					if (this.$refs.bugBox[index].className == 'bagUrl') {
						this.$refs.bugBox[index].className = '';
						this.Price -= parseInt(price * num);
					} else {
						this.$refs.bugBox[index].className = 'bagUrl'
						this.Price += parseInt(price * num);
					}
				},
				Settlement() {
					for (var i = 0; i < this.$refs.bugBox.length; i++) {
						if (this.$refs.bugBox[i].className == 'bagUrl') {
							var arr = JSON.parse(window.localStorage.getItem('anyone'));
							this.shopData = JSON.parse(window.localStorage.getItem("product" + arr[i]));
						}
						if (window.localStorage.getItem('userInfo') && this.$refs.bugBox[i].className == 'bagUrl') {
							this.$router.push('/shopcar/Settlement')
						} else {
							this.$router.push('/Login')
						}
					}
				}
		}
	}
</script>
<style scoped lang='less'>
	.bg {
		background: #fff;
	}
	
	.sec {
		top: 0;
	}
	
	.fullhead {
		height: 44px;
		line-height: 44px;
		background: #fff;
		text-align: center;
		margin-bottom: 2px;
		font-size: 14px;
	}
	
	.shopcar img {
		display: block;
		margin: 100px auto 10px;
		width: 100px;
	}
	
	.shopcar span {
		display: block;
		margin: 10px auto;
		margin-bottom: 60px;
		width: 70px;
		font-size: 10px;
		line-height: 20px;
		text-align: center;
		border: 1px solid #000;
	}
	
	.shopbox {
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
			display: flex;
			align-items: center;
			background: #fff;
			padding: 10px;
			dl {
				display: flex;
				background: #fff;
				box-sizing: border-box;
				padding-left: 25px;
				width: 100%;
				dt {
					width: 20%;
					img {
						width: 100%;
						border: 1px solid #e6e6e6;
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
						.text-title {
							width: 70%;
						}
					}
				}
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
			z-index: 998;
			.checkAll {
				padding: 10px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
			}
			h4 {
				font-size: 14px;
				color: #000;
				padding-left: 25px;
			}
		}
		.shuju {
			display: flex;
			align-items: center;
			height: 100%;
			p {
				display: inline-block;
				padding-right: 25px;
				&:nth-child(1) {
					color: #991f33;
				}
			}
			span {
				background: #801a2a;
				color: #fff;
				width: 80px;
				line-height: 50px;
				text-align: center;
			}
		}
		.bagUrl {
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5MjU1MDBGODU1MTExRTY4RDg5ODc4ODBEMUUwQTQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY5MjU1MDEwODU1MTExRTY4RDg5ODc4ODBEMUUwQTQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjkyNTUwMEQ4NTUxMTFFNjhEODk4Nzg4MEQxRTBBNDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjkyNTUwMEU4NTUxMTFFNjhEODk4Nzg4MEQxRTBBNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz52fZGvAAADQUlEQVR42rxXW0hUURRdMzVlvpoeZg8jTU3JUFFDNI2mSRCTfsSggh70pEAzfFGCGVYkmtaXmhF9lH7kV9lHKgORllCDTFTgIyM0NSMmdXTMbNrndizn/fCOCxZn4N571pq99z13b4nBYIA91AbGscWbuJeoIEYTg4jL+S0/iH3ETqKK2EQcn33+1KfXVveW2DNA4iG0FBAPEL3gGHTEeuINYo9LBkjYg5bLxBziEriGn8QqYjGZ0DtsgMSDaXnEQy0GWGoyyUSPXQMkHkPLU6I/xMUwMY1MqK0a4PluJ/rBPRghJs6NhHSO+DIedneJg+/dyLWMDfCCi4L7Ecm1/hvgRZcjttLSlXKk3L8NeWiQ6aUcnu5/ESgkysQUl/l4QVlbjjVxUdheZPbfZFwTkppNsT60DjpxyNiFVCaDoqYMa+NjMPZ5AM1HsjD59Zulw2odi0CamOKSRVIkV5YI4lPftVCdzrMkDq6ZxgwoRYu7RCKEO0CxA9NjOrQcvyBEwAaUUl6VoiD6/EmE7t+HGf0UnmcXQdvVa/eNYAaCxRAPP5yJiBOHYJj5jRe5JRjqUDvyWDAz4GvtqnfAeuy8VSpUtC0EpqcgNv8cQKdqR0k5+lVtjvr2ldq6mnC1EBv3JEN5t9KqiQ27EpFQWiDkv7PqDnobm5x7Y4ij1i62X7wG3ZdhrIoIg7LuppmJ1ZFbkVRRLLx2H+414F3dA2czN8oMWK0U3cAQmo9m/TWxLdzIhHzLZuymg2axhwf6Hj+DuqLaldLpZQY0NlsbMtFyLNvIxIqwECiqywQzLN8vL10X8u8CNMxAq727xvsHjUykNdbB098PI+q3aMu9IlS+i2iV8uZD54wJVnDaro9QnS3AL73eVfEJpi2l5mCMfjQ48sSsiaFXb6A6kyecdvNAPdMWOiL+aXwv9hfRBqaJEWSgW8r7dtYiVWLhUMXELXVEmgUQ15h1RDwKk7Rk8MbRXWB7Z5DWhKWecDYVqbyFFhtsz1TT2cDsW8D79iSR08H2SjKdCSwamBOJeGIZr9j5VDvbI97SVOTocBpKSz7xINHTQWFWTw/5cNo9r+nYZDxPNxnP5fwWrcl4/sTR8fyPAAMAIwhAlKljce8AAAAASUVORK5CYII=) 50% no-repeat;
			background-size: 20px;
		}
	}
	
	.delMark {
		display: none;
		position: absolute;
		bottom: 0;
		top: 0;
		width: 100%;
		z-index: 999;
		background: rgba(0, 0, 0, .5);
	}
	
	.delBox {
		display: none;
		position: absolute;
		top: 40%;
		left: 25%;
		width: 50%;
		z-index: 1000;
		background: #fff;
		.delInfo {
			line-height: 50px;
			text-align: center;
		}
		.delBtn {
			display: flex;
			span {
				display: inline-block;
				width: 50%;
				line-height: 40px;
				text-align: center;
			}
		}
	}
</style>