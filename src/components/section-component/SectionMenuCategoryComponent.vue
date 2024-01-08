<template>
    <div class="section-menu-category-component">
        <div class="container pt-5 mt-5" ref="wrapperCategoryRef" v-if="$store.state.categories.length > 0">
            <div
                class="menu-element-wrapper py-5 category-elm"
                :ref="category._id"
                :id="category._id"
                v-for="(category) in $store.state.categories" :key="category._id">
                <div class="row" :class="{'wrapper-reverse': category.reverse}">
                    <div class="col-6">
                        <div class="menu-banner">
                            <img :src="category.thumbs[0]" alt="thumbnail" />
                            <h2 class="menu-banner-title">{{ category.title }}</h2>
                        </div>
                    </div>
                    <div class="col-6">
                        <SectionMenuDishComponent :category="category._id" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SectionMenuDishComponent from "./SectionMenuDishComponent copy.vue";
    import serviceLoadlazy from "../../services/service-loadlazy.js";
    const { intersection } = serviceLoadlazy();

    export default {
        name: "SectionMenuCategoryComponent",
        components: {
            SectionMenuDishComponent
        },
        updated() {
            intersection("menu", this.$refs.wrapperCategoryRef.children, (information) => {
                this.$store.commit("updateDishInCategory", information)
            });
        }
    }
</script>

<style scoped>
    .wrapper-reverse {
        flex-direction: row-reverse;
    }

    .menu-banner {
        height: 100%;
        position: relative;
    }

    .menu-banner img {
        filter: brightness(0.95);
        height: 100%;
        width: 100%;
    }

    .menu-banner .menu-banner-title {
        color: #ffffff;
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: .3px;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        z-index: 1;
    }
</style>