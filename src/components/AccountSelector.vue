<template>
    <div class="position-relative">
        <div @click="toggle" :id="id + '-select'" class="select border rounded">
            <span>Select Account To debit</span>
        </div>
        <div class="options border" :id="id + '-selectOptions'">
            <div @click="selectOption(account, $event)" class="option" v-for="account in accounts" :key="account.id">
                <div>
                    <img :src="account.img" alt="">
                    <span>{{account.cardNumber}}</span>
                </div>
                <div class="account-balance">{{account.currrency}}{{account.balance}}</div>
            </div>
        </div>
        <i class="fas fa-chevron-down dropdown-icon"></i>
    </div>
</template>

<script>
import { createPopper } from '@popperjs/core'

export default {
    data: () => ({
        popper: null,

        screenWidth: null //the screen-size since popper was last shown
    }),

    props: {
        id: {
            type: String,
            required: true
        },

        accounts: {
            type: Array,
            default: function() {
                return [
                    {
                        id: 1,
                        img: '/assets/verve.png',
                        balance:'342.800.00',
                        currrency: '$',
                        cardNumber: '1210 **** **** 4008' //maybe? or account number.
                    },
                    {
                        id: 2,
                        img: '/assets/visa.jpg',
                        balance:'342.800.00',
                        currrency: '$',
                        cardNumber: '2210 **** **** 4008'
                    },
                    {
                        id: 3,
                        img: '/assets/mastercard.png',
                        balance:'342.800.00',
                        currrency: '$',
                        cardNumber: '3210 **** **** 4008'
                    }
                ]
            }
        }
    },

    methods: {
        show() {
            let pop = document.getElementById(this.id + '-selectOptions')
            let ref = document.getElementById(this.id + '-select');

            this.setPopWidth(ref);

            // Make the tooltip visible
            pop.setAttribute('data-show', '');

            // Enable the event listeners
            this.popper.setOptions({
                modifiers: [{ name: 'eventListeners', enabled: true }],
            });

            // Update its position
            this.popper.update();
        },

        toggle(){
            let pop = document.getElementById(this.id + '-selectOptions')
            pop.hasAttribute('data-show') ? this.hide() : this.show();
        },

        hide() {
            let pop = document.getElementById(this.id + '-selectOptions')

            // Hide the tooltip
            pop.removeAttribute('data-show');

            // Disable the event listeners
            this.popper.setOptions({
                modifiers: [{ name: 'eventListeners', enabled: false }],
            });
        },

         //dynamically set the width of the popup menu to match the width of the target.
        //setting with css does not work as expected
        setPopWidth(ref){
            
            //if the screen hasn't changed since the popup was last shown, no need to recalculate the width
            if(this.screenWidth === screen.width){
                return
            }

            this.screenWidth = screen.width;

            this.clearPopWidth();

            let reference = ref || document.getElementById(this.id + '-select');
            let style = document.createElement('style');
            style.id = this.id + '-selectOptionsWidthStyle'
            style.innerHTML = `#${this.id}-selectOptions {width: ${reference.offsetWidth}px;}`;
            document.head.append(style);
        },

        clearPopWidth(){
            try{
                document.getElementById(this.id + '-selectOptionsWidthStyle').remove();
            }catch(e){
                //first run
            }
        },

        selectOption(account, $event){
            let select = document.getElementById(this.id + '-select');
            this.removeAllChildNodes(select);

            select.innerHTML = $event.currentTarget.outerHTML
            
            this.hide()

            this.$emit('selected', account)
        },

        removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    },

    mounted(){
        let ref = document.getElementById(this.id + '-select');
        let pop = document.getElementById(this.id + '-selectOptions')

        this.setPopWidth(ref)

        this.popper = createPopper(ref, pop, {
            placement: 'bottom'
        })
    },

    beforeDestroy(){
        this.clearPopWidth();
    }
}
</script>

<style scoped>
.select {
    width: 100%;
    padding: .5rem 1rem;
    cursor: pointer;
}

.select .option {
    margin-right: 15px;
}

.select .option img {
    display: inline-block;
    margin-right: 15px;
}

.select .option .account-balance {
    display: none;
}

.option {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.options {
    display: none;
    z-index: 1000;
    background-color: #ffffff; 
    /* padding: .5rem 1rem; */
}

.options .option{
    padding: .5rem;
}

.option img {
    width: 40px;
    height: 20px;
    display: none;
}

.options .option:hover{
    background-color: #D8DEE3;
}

.options[data-show] {
    display: flex;
    flex-direction: column;
}

.dropdown-icon{
    position: absolute;
    top: 14px;
    right: 10px;
    color: #778CA2;
}

.account-balance{
    color: #778CA2;
}

/* @media(min-width: 576px){
    } */

@media(min-width: 992px){
    .select .option .account-balance {
        display: block;
    }
    
    .select .option img {
        margin-right: 10px;
    }
}
</style>