<template>
	<s-layout title="确认订单">
		<view class="v">
			<uni-segmented-control :current="state.current" :values="state.items" @clickItem="onClickItem"
				styleType="button" activeColor="#4cd964"></uni-segmented-control>
			<view class="content">
				<view v-show="state.current === 0">
					<pickup></pickup>
				</view>
				<view v-show="state.current === 1">
					<delivery></delivery>
				</view>
			</view>
		</view>
	</s-layout>
</template>

<script setup>
	import pickup from './pickup.vue'
	import delivery from './delivery.vue'
	import {
		reactive
	} from 'vue';

	const state = reactive({
		items: ['到店自提', '送货上门'],
		current: 0
	});

	async function onClickItem(e) {
		if (state.current != e.currentIndex) {
			state.current = e.currentIndex;
		}
	}
</script>

<style lang="scss" scoped>
	.v{
		margin: 5px;
	}
</style>