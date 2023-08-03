<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
    name: 'ConfirmView',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            confirm: {},
            order_id: '',
            orderDetails: [],
            item: 0,
        }
    },
    created() {
        this.confirmOrder()
        this.getOrderDetail();
    },
    methods: {
        confirmOrder() {
            this.order_id = this.$route.params.orderId;
            console.log(this.order_id)
            axios.get(`http://localhost:8000/api/orders/confirm/${this.order_id}`,)
                .then(response => {
                    if (response.data != null) {
                        this.confirm = response.data;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },

        getOrderDetail() {
            this.order_id = this.$route.params.orderId;
            axios.get(`http://localhost:8000/api/orderdetails/orders/${this.order_id}`,)
                .then(response => {
                    if (response.data != null) {
                        this.orderDetails = response.data;
                        this.item = Object.keys(response.data).length
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>

<template>
    <Header></Header>

    <div class="confirm">
        <div class="confirm-order">
            <div class="tick-icon-container">
                <img class="tick-icon" src="../assets/images/tick-icon.png">
                <div class="thank-message">
                    Thank you!<br>
                    for Your Ordering
                </div>
            </div>
            <router-link to="/home">
                <button id="back-home-btn">Back</button>
            </router-link>
        </div>

        <div class="confirm-message">
            We have accepted your order, and we are ready to deliver a good product for you
        </div>

        <div class="order-detail">
            <div class="order-information">
                <div class="order-text">Your order information</div>
                <div class="order-information-table">
                    <div class="order-information-row">
                        <div class="order-information-row-first">Order Number: </div>
                        <div class="semibold">{{ this.order_id}}</div>
                    </div>
                    <div class="order-information-row">
                        <div class="order-information-row-first">Shipping Method:</div>
                        <div class="semibold"> {{ this.confirm.type }}</div>
                    </div>
                    <div class="order-information-row">
                        <div class="order-information-row-first">Shipping Address:</div>
                        <div class="semibold">{{ this.confirm.address }} - {{ this.confirm.state }} {{ this.confirm.country }} </div>
                    </div>
                    <div class="order-information-row">
                        <div class="order-information-row-first">Payment Method:</div>
                        <div class="semibold">Master Card(********123)</div>
                    </div>
                </div>
            </div>

            <div class="summary-order">
                <div class="order-text">Summary Order({{ this.item }} items)</div>
                <div class="order-summary-table-container">
                    <table class="order-summary-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Unit price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="orderDetail in orderDetails" :key="orderDetail.id">
                                <td>{{ orderDetail.product_name}} - {{ orderDetail.product_scent_name }} ({{ orderDetail.product_size_name }})</td>
                                <td>{{ orderDetail.product_size_price }}$</td>
                                <td>{{ orderDetail.quantity }}</td>
                                <td>{{ orderDetail.subtotal }}$</td>
                            </tr>
                            <!-- <tr>
                                <td>Clear(L)</td>
                                <td>21$</td>
                                <td>1</td>
                                <td>21$</td>
                            </tr> -->
                        </tbody>
                    </table>

                    <div class="total-summary">
                        <div class="cost-summary">
                            <div class="each-cost">
                                <div class="summary-text">Subtotal:</div>
                                <div class="summary-text">{{ this.confirm.subtotal }}$</div>
                            </div>
                            <div class="each-cost">
                                <div class="summary-text">Vat:</div>
                                <div class="summary-text">{{ this.confirm.tax }}%</div>
                            </div>
                            <div class="each-cost">
                                <div class="summary-text">Shipping:</div>
                                <div class="summary-text">{{ this.confirm.price }}$</div>
                            </div>
                            <div class="each-cost">
                                <div class="summary-text">Discount:</div>
                                <div class="summary-text">{{ this.confirm.amount }}%</div>
                            </div>
                        </div>

                        <div class="total-cost">
                            <div class="each-cost">
                                <div class="summary-text">Total:</div>
                                <div class="summary-text">{{ this.confirm.total }}$</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <Footer></Footer>
</template>

<style scoped>
@import '../assets/css/confirm.css';
</style>