<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<navigator url="/subPages/about/index" hover-class="navigator-hover">
			<button type="default">about</button>
		</navigator>
		<navigator url="/subPages/info/index" hover-class="navigator-hover">
			<button type="default">info</button>
		</navigator>
	</view>
</template>

<script>
import { log } from '../../common/utils';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			log(this.title)
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
