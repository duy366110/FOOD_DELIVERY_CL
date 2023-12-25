<template>
    <CommonCarouselComponent />
    <!-- INTRODUCTION -->
    <div class="dashboard-main-introduction">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="main-introduction-img">
                        <img src="assets/images/dashboard/d-bg-intro.jpg" alt="thumb introduction" />
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex align-items-center">
                    <p class="main-introduction-des">Trong tiềm thức nhiều người, hình ảnh món Việt thường luôn gắn liền với không gian dân dã và đậm chất thôn quê, nhưng đến với Dì Mai, bạn sẽ không khỏi bất ngờ trước lối thiết kế giao hòa, tinh tế và độc đáo giữa nét quê mộc mạc và kiến trúc Đông Dương hiện đại gợi nên hình ảnh đường phố Sài Gòn năm xưa.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- MENU -->
    <div class="dashboard-main-menu" :style="{backgroundImage: section.menu.bg}">
        <div class="container-fluid">
            <div class="main-menu-wrapper">
                <h3 class="menu-wrapper-title">ẨM THỰC DÌ MAI - ẤM ÁP GẦN GŨI NHƯ HƯƠNG VỊ BẾP NHÀ</h3>
                <p class="menu-wrapper-des">Đến với Dì Mai, thực khách luôn được chào đón một cách nhiệt tình và cảm nhận được không khí gia đình vào mọi thời điểm, từ món điểm tâm, các món ăn nhẹ trong ngày, hay bữa tối với bạn bè, gia đình hoặc chỉ đơn giản là một thức uống nhẹ ở khu vực sân ngoài trời.</p>
                <CommonButtonComponent :type="'normal'" @btnClick="seeMenuHandler" :title="'Xem thực đơn'" />
            </div>
        </div>
    </div>

    <!-- STYLE -->
    <div class="dashboard-main-style">
        <div class="container-fluid">
            <div class="main-style-wrapper">
                <h3 class="style-wrapper-title">MỘT PHONG CÁCH ĐẬM NÉT DÌ MAI</h3>
                <p class="style-wrapper-des">Sự kết hợp hài hòa của thiết kế hiện đại và nét truyền thống Việt Nam chính là yếu tố chủ đạo làm nên Dì Mai. Phòng ăn được thiết kế nổi bật cùng hai mặt tiền mở hướng ra phố, Dì Mai tạo nên sự phá cách tinh tế khi kết hợp thức ăn đường phố và phong cách nấu ăn truyền thống dân dã từ khắp vùng miền ẩm thực đa dạng, được chế biết theo lối trình bày và các kỹ thuật nấu nướng hiện đại.</p>
            </div>
        </div>
    </div>

    <!-- SUGGET -->
    <div class="dashboard-main-sugget">
        <div class="main-sugget-elm">
            <img src="assets/images/sugget/sugget_01.jpeg" alt="thumb sugget" />
        </div>

        <div class="main-sugget-elm">
            <img src="assets/images/sugget/sugget_02.jpg" alt="thumb sugget" />
        </div>

        <div class="main-sugget-elm">
            <img src="assets/images/sugget/sugget_03.jpeg" alt="thumb sugget" />
        </div>
    </div>

</template>

<script>
    import CommonCarouselComponent from "../common-component/CommonCarousel.vue";
    import CommonButtonComponent from "../common-component/CommonButton.vue";

    export default {
        name: "DashboardMain",
        data() {
            return {
                section: {
                    menu: {
                        bg: "url('assets/images/dashboard/d-bg-menu.jpg')",
                    }
                }
            }
        },
        components: {
            CommonCarouselComponent,
            CommonButtonComponent
        },
        methods: {
            seeMenuHandler() {
                this.$router.push('/menu');
            }
        }
    }
</script>

<style scoped>
    /** INTRODUCTION */
    .dashboard-main-introduction {
        padding: 6.5rem 0rem;
    }

    .main-introduction-img {
        padding: 3rem;
    }
    .main-introduction-img img {
        width: 100%;
    }

    .main-introduction-des {
        color: #989898;
        font-size: 1.8rem;
        line-height: 1.65;
        text-align: left;
    }

    /** MENU - STYLE */
    .dashboard-main-menu, .dashboard-main-style {
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        color: #ffffff;
        padding: 7.5rem 0rem;
    }

    .dashboard-main-style {
        color: var(--first-text-color);
    }

    .main-menu-wrapper, .main-style-wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .main-menu-wrapper .menu-wrapper-title, .main-style-wrapper .style-wrapper-title {
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: .3px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        max-width: 600px;
    }

    .main-menu-wrapper .menu-wrapper-des, .main-style-wrapper .style-wrapper-des {
        font-size: 1.8rem;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 1.5rem;
        max-width: 790px;
    }

    .main-style-wrapper .style-wrapper-title {
        font-size: 3rem;
    }


    /** SUGGET */
    .dashboard-main-sugget {
        display: flex;
        align-items: center;
    }
    .main-sugget-elm {
        width: calc(100% / 3);
    }
    .main-sugget-elm img {
        width: 100%;
    }


    @media screen and (min-width: 320px) {
        .dashboard-main-sugget {
            flex-direction: column;
        }

        .main-sugget-elm {
            padding: 1.5rem;
            width: 100%;
        }
    }

    @media screen and (min-width: 768px) {
        .dashboard-main-sugget {
            flex-direction: row;
        }

        .main-sugget-elm {
            padding: 0rem;
            width: calc(100% / 3);
        }
    }

</style>