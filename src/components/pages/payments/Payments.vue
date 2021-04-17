<template>
    <main class="container-fluid container-xl">
        <saved-template class="page-block"></saved-template>
        <div class="row page-block">
            <div class="col-md-6">
                <payment-provider></payment-provider>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
                <instant-transfer></instant-transfer>
            </div>
        </div>
    </main>
</template>

<script>
import SavedTemplate from './SavedTemplate'
import PaymentProvider from './PaymentProvider'
import InstantTransfer from './InstantTransfer'

export default {
    components: {
        SavedTemplate,
        PaymentProvider,
        InstantTransfer
    }
}
</script>

<style scoped>
.page-block{
    margin-top: 1rem;
}
</style>