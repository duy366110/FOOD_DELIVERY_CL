<template>
    <div class="common-table-component">

        <!-- ORDER -->
        <div class="table-container" v-if="type == 'Order'">
            <table class="table-wrapper">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên món ăn</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(order, index) in data.orders" :key="order._id">
                        <td>{{ index }}</td>
                        <td>{{ order.dish.title }}</td>
                        <td>{{ order.quantity }}</td>
                        <td>{{ order.dish.price.$numberDecimal }} VND</td>
                    </tr>

                    <tr>
                        <td>E-mail</td>
                        <td colspan="3">{{ data.user.email }}</td>
                    </tr>
                    <tr>
                        <td>Số điện thoại</td>
                        <td colspan="3">{{ data.user.phone }}</td>
                    </tr>
                    <tr>
                        <td>Địa chỉ</td>
                        <td colspan="3">{{ data.user.address }}</td>
                    </tr>
                    <tr>
                        <td>Tổng đơn giá</td>
                        <td colspan="3"> {{ total }} VND</td>
                    </tr>
                    <tr>
                        <td>Chức năng</td>
                        <td colspan="3">
                            <CommonButton
                                @btnClick="onDangerHandler(data._id)"
                                :type="'danger'"
                                :title="'Huỷ hoá đơn'"/>

                            <CommonButton
                                @btnClick="onPrimaryHandler(data._id)"
                                :type="'primary'"
                                :title="'Thanh toán'"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- TRANSACTION -->
        <div class="table-container" v-if="type == 'Transaction'">
            <table class="table-wrapper">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên món ăn</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(order, index) in data.orders" :key="order._id">
                        <td>{{ index }}</td>
                        <td>{{ order.dish.title }}</td>
                        <td>{{ order.quantity }}</td>
                        <td>{{ order.dish.price.$numberDecimal }} VND</td>
                    </tr>

                    <tr>
                        <td>E-mail</td>
                        <td colspan="3">{{ data.user.email }}</td>
                    </tr>
                    <tr>
                        <td>Số điện thoại</td>
                        <td colspan="3">{{ data.user.phone }}</td>
                    </tr>
                    <tr>
                        <td>Địa chỉ</td>
                        <td colspan="3">{{ data.user.address }}</td>
                    </tr>
                    <tr>
                        <td>Tổng đơn giá</td>
                        <td colspan="3"> {{ total }} VND</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import CommonButton from "./CommonButton.vue";

    export default {
        name: 'CommonTable',
        props: ['type', 'data'],
        components: {
            CommonButton
        },
        computed: {
            total() {
                return this.data.orders.reduce((acc, order) => {
                    return acc += Number(order.dish.price.$numberDecimal) * Number(order.quantity);
                }, 0).toFixed(3)
            }
        },
        methods: {
            onDangerHandler(event) {
                this.$emit('onDangerHandler', event);
            },
            onPrimaryHandler(event) {
                this.$emit('onPrimaryHandler', event);
            }
        }
    }
</script>

<style scoped>

    .table-container {
        margin-bottom: 2.5rem;   
    }
    .table-wrapper {
        border-collapse: collapse;
        font-size: 1.8rem;
        width: 100%;
    }

    .table-wrapper, th, td {
        border: 1px solid #dddddd;
        padding: 10px;
        text-align: left;
    }

</style>