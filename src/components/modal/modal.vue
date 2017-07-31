<template>
	<div class="m-mask" v-if="showFlag">
		<div class="m-mn">
			<div class="m-hd">
				<span>{{title}}</span>
				<i class="el-icon-close" v-if="hasClose" @click="closeModal"></i>
			</div>
			<div class="m-bd">
				<slot name="body"></slot>
			</div>
			<div class="m-ft">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'modal',
	props: {
		showFlag: {
			type: Boolean,
			default: false
		},
		title: {
			default: ''		//modal标题
		},
		hasClose: {
			type: Boolean,
			default: true
		}		
	},
	methods: {
		closeModal() {
			this.showFlag = false;
		}
	}
}
	
</script>

<style scoped>
  @import './modal.css';
</style>