<template>
    <div class="container">
        <h2>Counters</h2>
        <div class="row">
            <div class="alert alert-success col" role="alert"> Counter: {{counter}}</div>
            <div class="alert alert-danger col" role="alert"> Doubled Counter: {{doubledCounter}}</div>
            <div class="alert alert-warning col" role="alert"> Multi Counter: {{multiCounter}} </div>
        </div>
        <button @click="increase" class="btn btn-success">Increase</button>
        <hr>
        <button @click="decrease" class="btn btn-danger">Decrease</button>
        <hr>
        <button @click="reset" class="btn btn-primary">Reset</button>
        <hr>
        <button @click="n_increase" class="btn btn-secondary">+5 Inc</button>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import swal from "sweetalert";
    export default {
        computed: {
            ... mapGetters(["counter", "doubledCounter"]),
          multiCounter() {
              return this.$store.getters.multiCounter(4);
          }
        },
        methods: {
            ... mapMutations(["increase", "decrease"]),
            reset() {
                swal({
                    title: "Are you sure to reset the counter?",
                    text: "Once reset it, you will not be able to se this data!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            swal("Your data has been deleted!", {
                                icon: "success",
                            });
                            return this.$store.commit('reset');
                        } else {
                            swal("Your counter still alive!");
                        }
                    });

            },
            n_increase() {
                this.$store.commit('n_increase', 5);
            }
        }
    }
</script>