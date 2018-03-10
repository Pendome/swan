<template>
    <div>
        <datagrid :config="config"></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue'

    export default {
        components: {
            datagrid
        },
        data(){
            return {
                config: {
                    api: "http://localhost:8080/goods",
                    cols: ['_id'],
                    select:0
                }
            }
        }        
    }

    //过滤掉不要的字段
    //默认没有 cols 为全部
    //中英文切换
    //翻页
</script>