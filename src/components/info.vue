<template>
    <div class="container">
       <div class="row">
           <div class="col">
               <h2>Info</h2>
               <counterInfo class="alert alert-primary"></counterInfo>
           </div>
       </div>
    </div>
</template>

<script>
    import counterInfo from "./counterInfo";
    export default {
        components: {
            counterInfo
        }
    }
</script>