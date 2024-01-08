<template>
    <div class="section-menu-category-component">
        <div class="row">
            <div
                class="col-12 mb-5"
                v-for="(dish) in $store.state.dishs[category]"
                :key="dish._id">
                <router-link :to="'/dish/'+dish._id" class="menu-dish">
                    <div class="menu-dish-infor">
                        <img :src="dish.thumbs[0]" alt="thumbs" />
                        <div class="menu-dish-infor-wrapper">
                            <h3 class="menu-dish-title">{{ dish.title }}</h3>
                        </div>
                    </div>
                    <h4 class="menu-dish-price">{{ dish.price.$numberDecimal }} VND</h4>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionMenuDishComponent",
        props: {
            category:String
        }
    }
</script>

<style scoped>
    .menu-dish {
        color: var(--first-text-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .menu-dish-infor {
        display: flex;
        align-items: center;
        gap: 10px;
        width: calc(100% - 25%);
    }

    .menu-dish-infor img {
        border-radius: 50%;
        width: 70px;
    }

    .menu-dish-infor-wrapper {
        text-align: left;
        width: 100%;
    }
    .menu-dish-infor-wrapper::after {
        content: "";
        border-bottom: 1px dotted #959595;
        display: flex;
        margin-top: 1rem;
        width: 100%;
    }

    .menu-dish-price {
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: .3px;
        margin-bottom: 0px;
        text-align: left;
        text-transform: uppercase;
    }
</style>