<template>
    <Col :span="6 * width">
        <Row :gutter="5" class="cell-row">
            <Col :span="12 / width" class="cell-col cell-col-title">
                {{title}}:
            </Col>
            <Col :span="24 - (12 / width)" class="cell-col">
                <Tooltip transfer :max-width="300" :disabled="!showTooltip" placement="top" class="ivu-table-cell-tooltip">
                    <span ref="content" @mouseenter="handleTooltipIn" @mouseleave="handleTooltipOut" class="ivu-table-cell-tooltip-content"><slot></slot></span>
                    <span slot="content"><slot></slot></span>
                </Tooltip>
            </Col>
        </Row>
    </Col>
</template>

<script>
    export default {
        name: "i-cell",
        props: {
            title: {
                type: String,
                required: true
            },
            width: {
                type: Number,
                default: 1,
                isValid: (value) => {
                    return [1, 2, 3, 4].findIndex((val) => value === val) !== -1;
                }
            }
        },
        data(){
            return {
                showTooltip: false
            }
        },
        methods: {
            handleTooltipIn () {
                const $content = this.$refs.content;
                this.showTooltip = $content.scrollWidth > $content.offsetWidth;
            },
            handleTooltipOut () {
                // this.showTooltip = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .cell-row {
        height: 30px;
        padding: 6px 0;
    }
    .cell-col-title{
        text-align: right;
    }
    .cell-col {
        white-space: nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
</style>