<script>
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
    name: 'ConfirmView',
    components: {
        Header,
        Footer,
    },
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
            <router-link to="/shampoo">
                <button id="back-btn">Back</button>
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
                        <div>Order Number: </div>
                        <div class="semibold">LG2000KR</div>
                    </div>
                    <div class="order-information-row">
                        <div>Shipping Method:</div>
                        <div class="semibold"> ExpressUMe</div>
                    </div>
                    <div class="order-information-row">
                        <div>Shipping Address:</div>
                        <div class="semibold">Somnang12-PhnomPenh Cambodia</div>
                    </div>
                    <div class="order-information-row">
                        <div>Payment Method:</div>
                        <div class="semibold">Master Card(********123)</div>
                    </div>
                </div>
            </div>

            <div class="summary-order">
                <div class="order-text">Summary Order(2items)</div>
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
                            <tr>
                                <td>Aqua Shampoo(L)</td>
                                <td>15$</td>
                                <td>1</td>
                                <td>15$</td>
                            </tr>
                            <tr>
                                <td>Clear(L)</td>
                                <td>21$</td>
                                <td>1</td>
                                <td>21$</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="total-summary">
                        <div class="cost-summary">
                            <div class="each-cost">
                                <div class="summary-text">Subtotal:</div>
                                <div class="summary-text">36$</div>
                            </div>
                            <div class="each-cost">
                                <div class="summary-text">Vat:</div>
                                <div class="summary-text">10%</div>
                            </div>
                            <div class="each-cost">
                                <div class="summary-text">Shipping:</div>
                                <div class="summary-text">3$</div>
                            </div>
                            <div class="each-cost">
                                <div class="summary-text">Discount:</div>
                                <div class="summary-text">0%</div>
                            </div>
                        </div>

                        <div class="total-cost">
                            <div class="each-cost">
                                <div class="summary-text">Total:</div>
                                <div class="summary-text">49.00$</div>
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