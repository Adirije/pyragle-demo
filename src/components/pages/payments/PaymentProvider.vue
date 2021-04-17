<template>
    <section class="card">
        <div class="d-flex justify-content-between p-3 border-bottom">
            <div>Payment providers</div>
            <div class="card-meta d-flex align-items-center rounded">
                <i class="mr-2 card-meta-icon fas fa-search"></i>
                <span class="text-uppercase">find provider</span>
            </div>
        </div>
        <div class="d-flex p-3 border-bottom justify-content-between">
            <div class="d-flex align-items-center">
                <div class="mask mr-2"><i class="fas fa-mobile-alt"></i></div>
                <div>
                    <div>Mobile Services</div>
                    <div class="item-meta">Vodafone, O2, T-Mobile, Telia</div>
                </div>
            </div>
            <div class="provider-meta">
                <div class="mr-3">1-2%</div>
                <div><i class="fas fa-ellipsis-h ellipsis"></i></div>
            </div>
        </div>
        <div class="d-flex p-3 border-bottom justify-content-between">
            <div class="d-flex align-items-center">
                <div class="mask mr-2"><i class="fas fa-bus"></i></div>
                <div>
                    <div>Transport</div>
                    <div class="item-meta">Uber, Gett, Lyft</div>
                </div>
            </div>
            <div class="provider-meta">
                <div><i class="fas fa-ellipsis-h ellipsis"></i></div>
            </div>
        </div>
        <div class="d-flex p-3 border-bottom justify-content-between">
            <div class="d-flex align-items-center">
                <div class="mask mr-2"><i class="fas fa-cart-plus"></i></div>
                <div>
                    <div>Ecommerce</div>
                    <div class="item-meta">Ebay, Amazon, Aliexpress</div>
                </div>
            </div>
            <div class="provider-meta">
                <div class="mr-3">1.5%</div>
                <div><i class="fas fa-ellipsis-h ellipsis"></i></div>
            </div>
        </div>
        <div class="d-flex p-3 border-bottom justify-content-between">
            <div class="d-flex align-items-center">
                <div class="mask mr-2"><i class="fas fa-home"></i></div>
                <div>
                    <div>Utilities</div>
                    <div class="item-meta">Water, gas, electricity, rent</div>
                </div>
            </div>
            <div class="provider-meta">
                <div class="mr-3">1-2%</div>
                <div><i class="fas fa-ellipsis-h ellipsis"></i></div>
            </div>
        </div>
        <div class="d-flex p-3 border-bottom justify-content-between">
            <div class="d-flex align-items-center">
                <div class="mask mr-2"><i class="fas fa-credit-card"></i></div>
                <div>
                    <div>Electronic payments</div>
                    <div class="item-meta">Paypal, Skrill, Payoneer</div>
                </div>
            </div>
            <div class="provider-meta">
                <div class="mr-3">3-4%</div>
                <div><i class="fas fa-ellipsis-h ellipsis"></i></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card-meta {
    color: #778CA2;
    font-size: 12px;
    padding: 5px;
}

.card-meta-icon{
    font-size: 18px;
}

.item-meta{
    color: #98A9BC;
    font-size: 14px;
}

.provider-meta{
    font-size: 14px;
    display: flex;
    align-items: center;
}

.card-meta:hover {
    background-color: #D8DEE3;
    cursor: pointer;
}

.ellipsis{
    color: #778CA2;
    padding: 5px;
    border-radius: 50%;
}

.ellipsis:hover{
    background-color: #D8DEE3;
    cursor: pointer;
}

.mask{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #FFAB2B1A;
    text-align: center;
    color: #FFAB2B;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>