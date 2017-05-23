<template>
    <div class="mypage">
        <div class="tips">请输入手机号码验证码直接登录</div>
        <div class="sign">
            <div class="box">
                <div class="cle">
                    <span class="fl f10 c_666">手机号：</span>
                    <input type="number" @focus="fun(Cellphone)" v-model.trim='Cellphone' @blur="blur(Cellphone)" ref='numb' class="tel">
                    <span class="noe" ref='close' @click='clo'></span>
                    <span class="tipInfo" ref="tipInfo"></span>
                </div>
                <div class="cle">
                    <span class="sp1">验证码：</span>
                    <input type="number" v-model='verification'>
                    <span class="sp2" @click='yanclick' ref='span'>{{tishi}}</span>
                    <span class="tipInfo" ref="tipInfo"></span>
                </div>
                <div class="loging" @click="btn(Cellphone,verification)">
                    <a>登录</a>
                </div>
                <div id="pop" class="hide">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mypage',
        data() {
            return {
                mybind: '',
                Cellphone: '',
                verification: '',
                userphoto: '',
                tishi: '发送验证码',
                panduan: false
            }
        },
        mounted() {
            this.btn(),
                this.fun(),
                this.blur()
        },
        methods: {
            fun(Cellphone) {
                    if (Cellphone != "") {
                        this.$refs.close.className = 'close'
                    }
                },
                blur(Cellphone) {
                    var reg = /^1[34578]\d{9}$/;
                    if (Cellphone == "") {
                        this.$refs.close.className = 'noe';
                        this.$refs.tipInfo.innerHTML = '手机号不能为空';
                        return
                    } else if (!reg.test(Cellphone)) {
                        this.$refs.tipInfo.innerHTML = '手机输入格式不正确';
                        this.$refs.numb.value = "";
                        return
                    }
                },
                clo() {
                    console.log(this.$refs.span)
                    this.$refs.numb.value = "";
                    this.$refs.close.className = 'noe'
                },
                btn() {
                    if (this.Callphone != '' && this.verification != '') {
                        var userData = {
                            Callphone: '嘟嘟',
                            verification: 13903245780,
                            userphoto: 'photo.jpg'
                        }
                        var url = this.$route.query.to;
                        console.log(this.$route)
                        window.localStorage.setItem('userInfo', JSON.stringify(userData))
                    }

                },
                yanclick() {
                    if (this.panduan) {
                        return false
                    }
                    var sui = '';
                    var that = this;
                    var num = 60;
                    for (var i = 0; i < 6; i++) {
                        sui += parseInt(Math.floor(Math.random() * 10));
                    }
                    this.verification = sui;
                    that.tishi = num + '秒后重新获取';
                    var time = setInterval(function () {
                        that.tishi = num + '秒后重新获取';
                        if (--num == 0) {
                            that.tishi = '重新获取'
                            clearInterval(time)
                            that.panduan = false;
                            that.$refs.span.className = 'sp2'
                            this.$refs.span.className = 'sp3'
                        }
                    }, 1000)
                    that.panduan = true;
                }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .mypage {
        background: #fff;
    }
    
    .tips {
        background: #fff9f3;
        text-align: center;
        color: #991f33;
        line-height: 30px;
    }
    
    .noe {
        display: none;
    }
    
    .close:before {
        content: 'x';
        position: absolute;
        right: 30px;
        width: 15px;
        height: 15px;
        line-height: 13px;
        text-align: center;
        border-radius: 7.5px;
        color: #fff;
        background: #999;
    }
    
    .cle {
        position: relative;
        margin: 40px 3% 0 3%;
        background: #fff;
        border-bottom: 1px solid #ccc;
        input {
            height: 100%;
            border: none;
        }
        .sp2 {
            color: #991f33;
        }
        .sp3 {
            color: #999;
        }
        .tipInfo {
            position: absolute;
            top: 30px;
            left: 0;
            color: #991f33;
        }
    }
    
    .loging {
        text-align: center;
        padding: 10px 0;
        background: #991f33;
        margin-top: 40px;
        a {
            color: #fff;
            font-size: 14px;
        }
    }
</style>