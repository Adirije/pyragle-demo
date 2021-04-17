<template>
    <section class="card">
        <div class="d-flex justify-content-between p-3 border-bottom">
            <div>Saved templates</div>
            <div class="card-meta">
                <span class="mr-2 text-uppercase card-meta-btn rounded">view more</span>
                <i @click="slide(-198)" class="mr-2 card-meta-icon far fa-arrow-alt-circle-left"></i>
                <i @click="slide(198)" class="far card-meta-icon fa-arrow-alt-circle-right"></i>
            </div>
        </div>
        <div class="p-3 slider-wrapper">
            <div id="slider">
                <div class="saved-template-item card">
                    <div class="mask mr-3">
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="item-title">new template</div>
                </div>
                <div class="saved-template-item card">
                    <img src="@/assets/citibank.png" class="template-img mr-3">
                    <div>
                        <div class="item-title">bank transfer</div>
                        <div class="item-meta">&#36;2.460</div>
                    </div>
                </div>
                <div class="saved-template-item card">
                    <img src="@/assets/bank-transfer.png" class="template-img mr-3">
                    <div>
                        <div class="item-title">bank transfer</div>
                        <div class="item-meta">&#36;3.600</div>
                    </div>
                </div>
                <div class="saved-template-item card">
                    <img src="@/assets/paypal.png" class="template-img mr-3">
                    <div>
                        <div class="item-title">paypal transfer</div>
                        <div class="item-meta">&#36;5.240</div>
                    </div>
                </div>
                <div class="saved-template-item card">
                    <img src="@/assets/airbnb.png" class="template-img mr-3">
                    <div>
                        <div class="item-title">home rent</div>
                        <div class="item-meta">&#36;840</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        slide(val){
            let slider = document.getElementById('slider');
            slider.scrollLeft += val;
        }
    }
}
</script>

<style scoped>

.slider-wrapper{
    height: 120px;
    overflow: hidden;
}

#slider{
    padding-bottom: 30px;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
}
.card-meta {
    color: #778CA2;
    font-size: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.card-meta-icon{
    font-size: 18px;
}

.card-meta-btn{
    padding: 5px;
}

.card-meta-btn:hover
{
    background-color: #D8DEE3;
    cursor: pointer;
}

.item-meta{
    color: #98A9BC;
    font-size: 14px;
}

.saved-template-item{
    width: 198px;
    height: 86px;
    margin-right: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: .5rem;
    padding-right: .5rem;
    flex: 0 0 auto;
}
.saved-template-item:last-child{
    margin-right: 0;
}

.item-title{
    font-size: 12px;
    text-transform: uppercase;
}
.template-img,
.mask{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.mask{
    background: #FFAB2B1A;
    text-align: center;
    color: #FFAB2B;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>