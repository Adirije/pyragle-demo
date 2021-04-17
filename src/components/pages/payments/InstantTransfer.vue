<template>
    <section class="card">
        <div class="d-flex justify-content-between p-3 border-bottom">
            <div>Instant transfer</div>
            <div class="card-meta d-flex align-items-center">
                <i class="card-meta-icon fas fa-ellipsis-h text-light-gray"></i>
            </div>
        </div>
        <form class="p-3">
            <div class="mb-4">
                <label for="accountToDebit">Select account</label>
                <custom-select @selected="selectedAccount" id="selectAccount"></custom-select>
            </div>
            <div class="mb-4">
                <label for="accountCredit">Transfer to</label>
                <input id="accountCredit" class="form-control form-control-lg" type="text" placeholder="Enter account number">
            </div>
            <div class="mb-4 form-row">
                <div class="col-sm-6">
                    <label for="amount">Amount</label>
                    <input id="amount" v-model="amount" class="form-control form-control-lg" type="text" placeholder="Enter amount">
                </div>
                <div class="col-sm-6 mt-4 mt-sm-0">
                    <label for="accountToDebit">Transfer type</label>
                    <select v-model="transferType" id="accountToDebit" class="custom-select custom-select-lg">
                        <option value="1">Personal transfer</option>
                        <option value="2">Other</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 form-row align-items-center">
                <div class="col-6">
                    <button class="btn btn-secondary btn-lg text-uppercase text-light w-100" style="font-size: 14px">Pay now</button>
                </div>
                <div class="col-6 text-light-gray text-center" style="font-size: 14px">
                    2% bank fee applied
                </div>
            </div>
        </form>
    </section>
</template>

<script>

import CustomSelect from '@components/AccountSelector'
export default {
    data: () => ({
        accountToDebit: null,
        transferType: "1",
        amount: ''

    }),

    methods: {
        selectedAccount(account){
            this.accountToDebit = account;
        }
    },

    components: {
        CustomSelect
    }
}
</script>

<style scoped>
.card-meta{
    padding: 5px;
    border-radius: 50%;
}

.card-meta:hover{
    background-color: #D8DEE3;
    cursor: pointer;
}
</style>