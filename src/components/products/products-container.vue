<template>
    <div id="products-container" class="g-content-block">
        <div id="products-container__link" class="products-container__link"></div>

        <div
            v-if="isAvailableBack || isAvailableSearch"
            class="products-container__navigation mb-4"
        >
            <v-icon
                v-if="isAvailableBack"
                class="products-container__navigation-back mr-4"
                type="button"
                @click="goBack"
            >
                mdi-arrow-left
            </v-icon>

            <div
                v-if="isAvailableSearch"
                class="products-container__navigation-search p-4"
            >
                <ui-autocomplete
                    v-model="search"
                    :items="expandedProducts"
                    item-title="label"
                    label="Поиск"
                    return-object
                    @update:modelValue="setFilter"
                ></ui-autocomplete>
            </div>
        </div>

        <div class="products-container p-4">
            <product-card
                v-for="product in showProducts"
                :key="product.id"
                :icon="product.icon"
                :label="product.label"
                :subcategories="product.subcategories || []"
                :select="product.select"
                :recommended="product.recommended"
                @click="select(product)"
            ></product-card>
        </div>
    </div>
</template>

<script>
import ProductCard from './product-card.vue';

export default {
    name: 'ProductsContainer',

    components: {
        ProductCard,
    },

    props: {
        modelValue: {
            type: String,
            default: '',
        },
        recommended: {
            type: String,
            default: '',
        },
    },

    data: () => ({
        search: null,

        activeCategory: [],
        oldActiveCategory: [],
    }),

    computed: {
        activeProduct: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            },
        },

        recommendedIDs() {
            return this.deepFined(this.products, 'subcategories', product => product.id === this.recommended)
                .map(product => product.id);
        },
        showProducts() {
            return this.activeCategory
                .reduce((acc, id) => {
                    const { subcategories } = acc.find(product => product.id === id);

                    if (subcategories) {
                        return subcategories;
                    }

                    return acc
                }, this.products)
                .map(product => ({
                    ...product,
                    select: product.id === this.activeProduct,
                    recommended: this.recommendedIDs.includes(product.id),
                }));
        },
        expandedProducts() {
            return this.expandProducts(this.products);
        },

        isAvailableBack() {
            return Boolean(this.activeCategory.length);
        },
        isAvailableSearch() {
            return this.$store.state.isSearchOpen;
        },
        products() {
            return this.$store.state.products;
        },
        queryCategory() {
            return this.$route.query.category;
        },
        queryProduct() {
            return this.$route.query.product;
        },
    },

    watch: {
        activeCategory: {
            deep: true,
            handler(val) {
                if (val.length !== this.oldActiveCategory.length) {
                    this.routerUpdate();
                    this.scrollToProducts();
                }

                this.oldActiveCategory = [...val];
            },
        },
        activeProduct: {
            deep: true,
            handler() {
                this.routerUpdate();
            },
        },

        queryProduct: {
            deep: true,
            handler(val) {
                this.activeCategory = val || null;
            },
        },
        queryCategory: {
            immediate: true,
            deep: true,
            handler(val) {
                this.activeCategory = val?.split('$$') || [];
            },
        },
    },

    methods: {
        scrollToProducts() {
            const el = document.getElementById('products-container__link');
            el.scrollIntoView({ block: 'start', behavior: 'smooth' });
        },
        deepFined(collection, field, query) {
            return collection.reduce((acc, item) => {
                if (acc.length) {
                    return acc;
                }

                if (query(item)) {
                    return [item];
                }

                if (item[field]) {
                    const deep = this.deepFined(item[field], field, query);

                    if (deep.length) {
                        return [item, ...deep];
                    }
                }

                return acc;
            }, []);
        },
        routerUpdate({
            product = this.activeProduct,
            category = this.activeCategory,
            oldCategory = [],
        } = {}) {
            this.$router.replace({
                query: {
                    ...this.$route.query,
                    category: category.length
                        ? category.join('$$')
                        : undefined,
                    product: product && category.length > oldCategory.length
                        ? product
                        : undefined
                }
            })
        },
        select(product) {
            if (product.subcategories && !this.activeCategory.includes(product.id)) {
                this.activeCategory.push(product.id);
            } else {
                this.activeProduct = product.id
            }
        },
        goBack() {
            this.activeCategory.pop();
            this.activeProduct = null;
        },
        setFilter({ mapIds, id }) {
            this.search = null;
            this.activeCategory = mapIds;
            this.activeProduct = id;
        },
        expandProducts(products, parentIds = []) {
            return products.reduce((acc, product) => {
                if (product.subcategories) {
                    acc.push(...this.expandProducts(product.subcategories, [...parentIds, product.id]));
                } else {
                    acc.push({
                        mapIds: parentIds,
                        ...product,
                    });
                }

                return acc;
            }, []);
        },
    },
}
</script>

<style lang="scss">
$transitionSpeed: .226s;

.products-container {
    width: 100%;
    display: grid;
    grid-gap: 16px;
    grid-template-columns : repeat(12, 1fr);

    &__link {
        position: absolute;
        top: -200px;
    }

    @media screen and (max-width: 599px) {
        & * {
            grid-column-end: span 12;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 959px) {
        & * {
            grid-column-end: span 6;
        }
    }

    @media screen and (min-width: 960px) {
        & * {
            grid-column-end: span 4;
        }

        & *:nth-child(1),
        & *:nth-child(2) {
            grid-column-end: span 6;
        }
    }

    &__navigation {
        display: flex;
        position: relative;

        @media screen and (max-width: 599px) {
            flex-wrap: wrap;

            &-back {
                width: 100% !important;
                margin-right: 0 !important;
                background-color: #ffffff;
                box-shadow: 0 12px 50px 2px #13507c24;
                order: 2;
                margin-bottom: 8px;

                &::before {
                    width: auto !important;
                }
            }

            &-search {
                margin-bottom: 8px;
            }
        }

        &-back {
            height: 56px;
            width: 56px;
            border-radius: 8px;
            transition: background-color $transitionSpeed;
            text-decoration: none;

            &::before {
                width: 100%;
                transition: width $transitionSpeed
            }

            &:hover {
                justify-content: center;
                background-color: #ffffff;
                box-shadow: 0 12px 50px 2px #13507c24;

                &::before {
                    width: 50%;
                }
            }
        }

        &-search {
            height: 56px;
            width: 100%;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 12px 50px 2px #13507c24;
        }
    }
}
</style>