<template>
    <div class="common-carousel-component">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 carousel-bg" src="assets/images/bg-01.jpg" alt="First slide">
                </div>

                <div class="carousel-item">
                    <img class="d-block w-100 carousel-bg" src="assets/images/bg-02.jpg" alt="Second slide">
                </div>

                <div class="carousel-item">
                    <img class="d-block w-100 carousel-bg" src="assets/images/bg-03.jpg" alt="Third slide">
                </div>

                <div class="carousel-item">
                    <img class="d-block w-100 carousel-bg" src="assets/images/bg-04.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonCarousel"
    }
</script>

<style scoped>
    .carousel-bg {
        filter: brightness(0.95);
        height: 720px;
    }
</style>