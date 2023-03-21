<template>
    <a-card :bordered="false" class="card-info">
        <a-row type="flex">
            <a-col class="col-content" :span="24" :xl="12">
                <div class="card-content">
                    <h6>Built by developers</h6>
                    <h5>Muse Dashboard for Ant Design</h5>
                    <p>
                        From colors, cards, typography to complex elements, you will find the full
                        documentation.
                    </p>
                </div>
                <div class="card-footer">
                    <a href="#" size="small">
                        <span>Read More</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                                fill="#111827"
                            />
                        </svg>
                    </a>
                </div>
            </a-col>
            <a-col class="col-img" :span="24" :xl="12">
                <div class="card-img-bg">
                    <img src="images/info-card-1.jpg" alt="" />
                </div>
            </a-col>
        </a-row>
    </a-card>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>
<style lang="scss">
// _card.scss
//
// Template's cards styles.
//

// Cards

.ant-card-body {
    padding: 16px;
}

.layout-dashboard {
    .ant-card {
        border-radius: 12px;
        box-shadow: 1;
    }
}

.ant-card-head-title {
    h6 {
        margin-bottom: 0;
    }
    p {
        // font-weight: $fw-semibold;
        color: gray;
        margin-bottom: 0;
    }
    span {
        // font-weight: $fw-bold;
        margin-left: 5px;
    }
}
.header-solid .ant-card-head {
    border-bottom: 0;
}
.ant-card-head-wrapper {
    min-height: 72px;
}
.card-header-date {
    margin-bottom: 0;
    // font-weight: $fw-bold;
    // color: $color-muted;
    > * {
        vertical-align: middle;
    }

    svg {
        margin-right: 5px;
    }
}
.ant-card.card-info,
.ant-card.card-info-2 {
    h6 {
        // color: $color-gray-7;
        margin-bottom: 0;
    }
    p {
        font-size: 16px;
        // color: $color-gray-7;
    }
    .col-content {
        flex-grow: 1;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .col-img {
        width: 100%;
        flex-grow: 1;
        flex-shrink: 0;
        margin-top: 20px;

        // @media (min-width: $xl) {
        //     width: auto;
        //     flex-shrink: 1;
        //     flex-grow: 0;
        //     margin-top: 0px;
        // }
    }
    .card-img-bg {
        width: 100%;
        height: 300px;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        box-shadow: 2;
        position: relative;
        overflow: hidden;

        // @media (min-width: $xl) {
        //     width: 220px;
        //     height: 220px;
        // }

        img {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .card-footer a {
        // color: $color-primary;
        // font-weight: $fw-semibold;

        span {
            vertical-align: middle;
        }
        svg {
            vertical-align: middle;

            path {
                // fill: $color-primary;
            }
        }
    }
}
.ant-card.card-info-2 {
    .ant-card-body {
        height: 100%;
    }
    .col-content {
        padding: 24px;
        margin-right: 0;
        border-radius: 8px;
        background-size: cover;
    }
    h6,
    h5,
    p,
    .card-footer a {
        // color: $color-gray-1;
    }
    .card-footer a svg path {
        // fill: $color-gray-1;
    }
}
.card-credit {
    background-position: center;
    background-size: cover;
    border: none;

    * {
        // color: $color-gray-1;
    }

    .ant-card-body {
        padding-top: 15px;
    }

    .card-number {
        word-spacing: 10px;
        // font-weight: $fw-semibold;
        margin-bottom: 45px;
    }
    .card-footer {
        display: flex;
        align-items: flex-end;

        h6 {
            margin-bottom: 0;
        }

        p {
            margin-bottom: 0px;
        }
    }
    .col-logo img {
        max-width: 50px;
    }
}

.payment-method-card.ant-card {
    box-shadow: none;
    word-spacing: 10px;

    .ant-card-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h6 {
        // font-weight: $fw-semibold;
        margin-bottom: 0;
    }
    .ant-btn {
        margin-right: -20px;
    }
    img {
        width: 40px;
    }
}

.card-billing-info.ant-card {
    box-shadow: none;
    // background-color: $color-gray-2;
    // border: 1px solid $color-gray-3;

    .ant-card-body {
        // @media (min-width: $lg) {
        //     display: flex;
        // }
    }
    .col-action {
        margin-left: auto;
        flex-shrink: 0;
        margin-top: 10px;
        // @media (min-width: $lg) {
        //     margin-top: 0;
        // }
    }
    .ant-btn {
        // color: $color-gray-7;
    }
}

.card-profile-head {
    margin: -53px 0px 24px;

    // @media (min-width: $lg) {
    //     margin: -53px 24px 24px;
    // }

    .ant-card-head {
        border-bottom: 0;
        padding: 0 16px;

        .ant-radio-group {
            margin-top: 15px;

            // @media (min-width: $lg) {
            //     margin-top: 0;
            // }
        }

        .col-info {
            display: flex;
            align-items: center;
        }
        .avatar-info {
            margin-left: 16px;
            h4 {
                // font-weight: $fw-semibold;
                margin-bottom: 0;
            }
        }
        .ant-avatar {
            // box-shadow: $shadow-3;
            border-radius: 8px;
            margin: 0;
        }
    }
}

.card-profile-information {
    hr {
        opacity: 0.2;
    }
    .ant-descriptions .ant-descriptions-row > th,
    .ant-descriptions .ant-descriptions-row > td {
        padding-bottom: 16px;
    }
    .ant-descriptions .ant-descriptions-item-content i {
        font-size: 15px;
    }
}

.card-project.ant-card {
    box-shadow: none;
    border: none;

    .ant-card-cover img {
        border-radius: 8px;
        // box-shadow: $shadow-2;
    }
    .ant-card-body {
        padding: 16px 0 0;
    }

    .card-tag,
    p {
        // font-weight: $fw-semibold;
        // color: $color-muted;
        margin-bottom: 5px;
    }

    p {
        margin-bottom: 0;
    }
    h5 {
        // font-weight: $fw-semibold;
    }
    .card-footer {
        margin-top: 22px;
    }
}

.card-signup {
    width: 100%;
    max-width: 500px;
    margin: auto;
    // box-shadow: $shadow-1;
    border-radius: 12px;
    margin-top: -190px;
    margin-bottom: 20px;

    // @media (min-width: $md) {
    //     margin-bottom: 120px;
    // }

    .sign-up-gateways {
        text-align: center;

        .ant-btn {
            margin-right: 10px;
            margin-left: 10px;
            height: 60px;
            width: 70px;
            box-shadow: none;

            // @media (min-width: $md) {
            //     width: 100px;
            // }
            img {
                width: 20px;
            }
        }
    }
}
// / Cards
</style>
