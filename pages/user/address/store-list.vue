<!-- 收件地址列表 -->
<template>
	<s-layout title="门店列表" :bgStyle="{ color: '#FFF' }">
		<view v-if="state.list.length">
			<s-store-address-item hasBorderBottom v-for="item in state.list" :key="item.id" :item="item"
				@tap="onSelect(item)" />
		</view>

		<s-empty v-if="state.list.length === 0 && !state.loading" text="暂无门店信息" icon="/static/data-empty.png" />
	</s-layout>
</template>

<script setup>
	import {
		reactive,
		onBeforeMount
	} from 'vue';
	import {
		onShow
	} from '@dcloudio/uni-app';
	import sheep from '@/sheep';
	import {
		isEmpty
	} from 'lodash';
	import AreaApi from '@/sheep/api/system/area';
	import AddressApi from '@/sheep/api/member/address';

	const state = reactive({
		list: [], // 地址列表
		loading: true,
	});

	// 选择收货地址
	const onSelect = (addressInfo) => {
		uni.$emit('SELECT_ADDRESS', {
			addressInfo,
		});
		sheep.$router.back();
	};

	onShow(async () => {
		state.list = (await AddressApi.getStoreAddressList()).data;
		state.loading = false;
		console.log(state.list)
	});

</script>

<style lang="scss" scoped>
	
</style>