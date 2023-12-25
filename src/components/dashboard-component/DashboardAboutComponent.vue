<template>
    <div class="dashboard-about-component">
        <CommonBanner :banner="banner" />
        <div class="container pt-5 mt-5">
            <div class="container-wrapper bg-gray">
                <h2 class="container-title">Câu chuyện về FooDelivery</h2>
                <p>Chào mừng bạn đến với FoodDelivery, nơi trái tim Việt Nam gặp gỡ với vẻ đẹp của bờ sông. Nhấn chìm trong không gian yên bình, nhà hàng chúng tôi là thiên đường ẩm thực hứa hẹn mang đến trải nghiệm ẩm thực Việt Nam độc đáo.</p>
                <p>Bước vào không khí tinh tế kết hợp hài hòa giữa sự thanh lịch hiện đại và dải văn hóa phong phú của Việt Nam. Trang trí phản ánh sự ấm cúng và chân thành của lòng hiếu khách Việt Nam, tạo ra không gian mời gọi cho cả những buổi họp mặt riêng tư và những bữa tiệc sôi động.</p>
                <p>Tại FoodDelivery, chúng tôi tự hào mang đến thực đơn phản ánh hương vị phong phú và những truyền thống ẩm thực đa dạng của Việt Nam. Đầu bếp tài năng của chúng tôi tận tâm chuẩn bị từng món ăn, sử dụng chỉ những nguyên liệu tốt nhất để ghi chép bản hòa âm của ẩm thực Việt Nam. Từ thảo mộc thơm ngát của Hà Nội đến gia vị đậm đà của Sài Gòn, mỗi miếng ăn là một hành trình qua cảnh vật ẩm thực của đất nước đẹp này.</p>
                <img src="/assets/images/about/about_01.jpg" alt="about" />
                <p>Thưởng thức những hương vị hòa quyện khi bạn khám phá thực đơn với những món ưa thích truyền thống như phở, bánh mì và cuộn nem tươi, cũng như những sáng tạo mới mẻ thể hiện sự sáng tạo ẩm thực của đầu bếp. Được kết hợp bởi sự chọn lọc cẩn thận của rượu và cocktail độc đáo, trải nghiệm ẩm thực tại FoodDelivery là một cuộc hành trình qua vị giác và văn hóa.</p>
                <p>FoodDelivery by Vietnamese — nơi món ăn và hương vị nói lên tất cả.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonBanner from "../common-component/CommonBanner.vue";

    export default {
        name: "DashboardAboutComponent",
        components: {
            CommonBanner
        },
        data() {
            return {
                banner: "linear-gradient(to right, rgb(0 0 0 / 35%), rgb(0 0 0 / 35%)), url('/assets/images/banner/banner_about.jpg')"
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 1.7rem;
        letter-spacing: .3px;
        line-height: 1.7;
        text-align: left;
    }

    img {
        width: 100%;
    }
</style>