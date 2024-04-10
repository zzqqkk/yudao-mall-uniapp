<!-- 门店卡片 -->
<template>
	<view class="address-item ss-flex ss-row-between ss-col-center"
		:class="[{ 'border-bottom': props.hasBorderBottom }]">
		<view class="store-img" v-if="!isEmpty(props.item.logo) && !props.isConfirm">
			<img :src="props.item.logo" lazy-load="true" />
		</view>
		<view class="item-left" v-if="!isEmpty(props.item)">
			<view class="address-text">
				{{ props.item.name }}
			</view>
			<view class="address-phone">
				<view class="">
					<!-- #ifdef H5 -->
					<a class="grid-container" @click.stop :href="'tel:' + props.item.phone">
						<view class="store-phone grid-item">
							<span class="iconfont cicon-phone-call" />
						</view>
						<view class="phone grid-item">{{props.item.phone}}</view>
					</a>
					<!-- #endif -->
					<!-- #ifdef MP -->
					<view class="grid-container" @click.stop="call(props.item.phone)">
						<view class="store-phone grid-item">
							<text class="iconfont cicon-phone-call" />
						</view>
						<view class="phone grid-item">{{props.item.phone}}</view>
					</view>
					<!-- #endif -->
				</view>
			</view>
			<view class="area-text ss-flex ss-col-center detail-address">
				{{ props.item.areaName }},{{ props.item.detailAddress }}
			</view>
		</view>
		<view v-else>
			<view class="address-text ss-m-b-10">请选择门店地址</view>
		</view>
		<slot>
			<button class="ss-reset-button edit-btn" @tap.stop="onEdit">

			</button>
		</slot>
	</view>
</template>

<script setup>
	/**
	 * 基础组件 - 地址卡片
	 *
	 * @param {String}  icon = _icon-edit    - icon
	 *
	 * @event {Function()} click			 - 点击
	 * @event {Function()} actionClick		 - 点击工具栏
	 *
	 * @slot 								 - 默认插槽
	 */
	import sheep from '@/sheep';
	import {
		isEmpty
	} from 'lodash';
	const props = defineProps({
		item: {
			type: Object,
			default () {},
		},
		hasBorderBottom: {
			type: Boolean,
			defult: true,
		},
		isConfirm: {
			type: Boolean,
			default: false,
		}
	});
</script>

<style lang="scss" scoped>
	.address-item {
		padding: 24rpx 30rpx;

		.item-left {
			width: 600rpx;
		}
		
		a {
			text-decoration: none;
			color: #000;
		}
		
		.grid-container {
			grid-template-columns: auto auto;
			display: inline-grid;
		}
		
		.grid-item {
			text-align: center;
			margin: 5rpx 10rpx 5rpx 0rpx;
		}
		
		.store-phone {
			color: #fff;
			border-radius: 50%;
			display: block;
			line-height: 28rpx;
			width: 28rpx;
			text-align: center;
			background-color: #e83323;
			padding: 2rpx;
		}

		.address-phone {
			font-size: 28rpx;
			font-weight: 500;
			color: #333333;
		}

		.area-text {
			font-size: 26rpx;
			font-weight: 400;
			color: $dark-9;
		}

		.address-text {
			font-size: 32rpx;
			font-weight: 500;
			color: #333333;
			line-height: 48rpx;
		}

		.person-text {
			font-size: 28rpx;
			font-weight: 400;
			color: $dark-9;
		}
	}

	.edit-btn {
		width: 44rpx;
		height: 44rpx;
		background: $gray-f;
		border-radius: 50%;

		.edit-icon {
			width: 24rpx;
			height: 24rpx;
		}
	}

	.store-img {
		width: 120rpx;
		height: 120rpx;
		border-radius: 6rpx;
		margin-right: 22rpx;
	}

	.store-img img {
		width: 100%;
		height: 100%;
	}
</style>