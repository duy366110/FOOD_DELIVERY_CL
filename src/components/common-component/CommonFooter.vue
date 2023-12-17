<template>
    <footer class="common-footer-component">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6 mb-5 mb-md-0">
                    <div class="footer-wrapper">
                        <h3 class="footer-title">Nhà hàng</h3>
                        <ul class="footer-list footer-restaurent">
                            <li>
                                <h4 class="footer-restaurent-title">Dì Mai Ben Thanh Times</h4>
                                <p><span>Squares:</span>136-138 Lê Thị Hồng Gấm, Quận 1, Tp.Hồ Chí Minh</p>
                            </li>

                            <li>
                                <h4 class="footer-restaurent-title">Dì Mai Vincom Center</h4>
                                <p><span>Squares:</span>L02-03, 772 Điện Biên Phủ, Quận Bình Thạnh,  Tp.Hồ Chí Minh</p>
                            </li>

                            <li>
                                <h4 class="footer-restaurent-title">Dì Mai Crescent Mall</h4>
                                <p><span>Squares:</span>L3-54, Crescent Mall Phase 2, 101 Tôn Dật Tiên, Quận 7,  Tp.Hồ Chí Minh</p>
                            </li>

                            <li>
                                <h4 class="footer-restaurent-title">Dì Mai Căn-tin mPlaza</h4>
                                <p><span>Squares:</span>Tầng trệt TTTM MPlaza – 39 Lê Duẩn, P. Bến Nghé, Quận 1,  Tp.Hồ Chí Minh</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="footer-wrapper">
                        <h3 class="footer-title">Đặt bàn</h3>
                        <p class="footer-contact">Email: customerservice@d1-concepts.com</p>
                        <p class="footer-contact">Hotline: 0938 687 689</p>
                        <p class="footer-contact">Customer Service: 0888 149 966</p>
                        <p class="footer-contact">Dì Mai Lê Thị Hồng Gấm: (028) 3821 7786</p>
                        <p class="footer-contact"> Dì Mai Vincom Landmark 81:  (028) 3636 2624</p>
                        <p class="footer-contact">Dì Mai Crescent Mall: (028) 5414 1448</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="footer-copplyright">&copy; coppy right by duy366110@gmail.com</p>
    </footer>
</template>

<script>
    export default {
        name: "CommonFooter"
    }
</script>

<style scoped>
    .common-footer-component {
        background-color: #252525;
        border-top: 3px solid #1b1b1b;
        color: #ffffff;
        margin-top: 7.5rem;
        text-align: left;
        padding-top: 3.5rem;
    }

    .footer-title {
        font-size: 2rem;
        text-transform: uppercase;
    }

    .footer-copplyright {
        background-color: #1b1b1b;
        font-size: 1.6rem;
        margin-bottom: 0px;
        margin-top: 3.5rem;
        padding: 3rem 0rem;
        text-align: center;
    }

    .footer-title {
        margin-bottom: 1.8rem;
    }

    .footer-list {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        padding-left: 1.5rem;
    }

    .footer-list li h4 {
        font-size: 2rem;
        letter-spacing: .3px;
    }

    .footer-list li p {
        font-size: 1.6rem;
        letter-spacing: .3px;
    }

    .footer-list li p span {
        display: inline-block;
        font-weight: 700;
        margin-right: 1rem;
    }

    .footer-contact {
        font-size: 1.5rem;
        letter-spacing: .3px;
    }

</style>