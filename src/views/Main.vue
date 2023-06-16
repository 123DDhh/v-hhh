<template>
    <div>
        <el-container>
            <el-header>
                <common-header/>
            </el-header>
            <el-container>
                <el-aside width="auto">
                    <common-aside />
                </el-aside>
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer>
                <common-fooder/>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import CommonFooder from '@/components/CommonFooder'
export default {
    components: {
        CommonAside,
        CommonHeader,
        CommonFooder
    },
    data() {
        return {}
    }
}
</script>
<style scoped>
.el-header{
    padding:0;
}

.el-footer{
    padding:0;
}
</style>