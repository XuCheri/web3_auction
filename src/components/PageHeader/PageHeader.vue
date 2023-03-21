<template>
    <div class="components-page-header-demo-content">
        <a-page-header
            title="Cheri"
            class="site-page-header"
            sub-title="web3将改变人们的生活"
            :avatar="{ src: '/avatars/avatar_22.jpg' }"
            :breadcrumb="{ routes }"
        >
            <template #tags>
                <a-tag color="blue">Running</a-tag>
            </template>
            <template #extra>
                <a-button key="3">Operation</a-button>
                <a-button key="2">Operation</a-button>
                <a-button key="1" type="primary">Primary</a-button>
                <a-dropdown key="more">
                    <a-button :style="{ border: 'none', padding: 0 }">
                        <EllipsisOutlined :style="{ fontSize: '20px', verticalAlign: 'top' }" />
                    </a-button>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.alipay.com/"
                                >
                                    1st menu item
                                </a>
                            </a-menu-item>
                            <a-menu-item>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.taobao.com/"
                                >
                                    2nd menu item
                                </a>
                            </a-menu-item>
                            <a-menu-item>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.tmall.com/"
                                >
                                    3rd menu item
                                </a>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </template>
            <a-row class="content">
                <div style="flex: 1">
                    <p>传统拍卖行和电子拍卖行存在以下问题：</p>
                    <p>
                        中心化：传统拍卖行和电子拍卖行通常由中心化的机构或平台管理，这意味着他们控制着拍卖过程中的所有决策和数据。这可能导致信任问题，因为买家和卖家必须信任该平台来确保公正的交易。
                    </p>
                    <p>
                        安全性：传统拍卖行和电子拍卖行存在安全风险，例如黑客攻击、网络故障等，这可能导致重要信息丢失或泄露。
                    </p>
                    <p>
                        透明度：在传统拍卖行和电子拍卖行中，交易过程通常不是完全透明的，并且可能存在一些隐藏的费用或条件。这使得交易对于某些人不够公平或可靠。
                    </p>
                    <p>
                        效率：传统拍卖行和电子拍卖行可能需要花费大量时间和资源来进行交易验证和清算，这可能会导致交易滞后或失败。
                    </p>
                    <p>
                        因此，这是我自己设计的基于区块链的拍卖系统。区块链拍卖行通过去中心化和分布式技术，可以解决上述问题。区块链拍卖行可以提供更高的安全性和透明度，同时减少交易成本和时间。此外，区块链技术可以通过智能合约自动执行交易，并提供更高的可扩展性和可定制性。
                    </p>
                    <p>这里欢迎您留下您宝贵的意见</p>
                    <div>
                        <template v-for="item in iconLinks" :key="item.src">
                            <a class="example-link" :href="item.link">
                                <img class="example-link-icon" :src="item.src" :alt="item.text" />
                                {{ item.text }}
                            </a>
                        </template>
                    </div>
                </div>
                <div class="image">
                    <img
                        src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                        alt="content"
                        style="width: 100%"
                    />
                </div>
            </a-row>
        </a-page-header>
    </div>
</template>
<script>
import { defineComponent } from "vue"
import { EllipsisOutlined } from "@ant-design/icons-vue"
const routes = [
    {
        path: "/",
        breadcrumbName: "主页",
    },
    {
        path: "/comments",
        breadcrumbName: "评论区",
    },
]
const iconLinks = [
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",
        text: "快速开始",
        link: "https://github.com/XuCheri/web3_auction",
    },
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",
        text: "系统信息",
        link: "https://github.com/XuCheri/web3_auction",
    },
    {
        src: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
        text: "文档地址",
        link: "https://github.com/XuCheri/web3_auction",
    },
]
export default defineComponent({
    components: {
        EllipsisOutlined,
    },
    setup() {
        return {
            routes,
            iconLinks,
        }
    },
})
</script>
<style scoped>
#components-page-header-demo-content .image {
    margin: 0 0 0 60px;
    display: flex;
    align-items: center;
}

#components-page-header-demo-content .ant-page-header-rtl .image {
    margin: 0 60px 0 0;
}

#components-page-header-demo-content .example-link {
    line-height: 24px;
    margin-right: 16px;
}
[data-theme="compact"] #components-page-header-demo-content .example-link {
    line-height: 20px;
}
#components-page-header-demo-content .example-link-icon {
    margin-right: 8px;
}

[data-theme="compact"] #components-page-header-demo-content .example-link-icon {
    width: 20px;
    height: 20px;
}

#components-page-header-demo-content .ant-page-header-rtl .example-link {
    float: right;
    margin-right: 0;
    margin-left: 16px;
}
#components-page-header-demo-content .ant-page-header-rtl .example-link-icon {
    margin-right: 0;
    margin-left: 8px;
}
#components-page-header-demo-content .content p {
    margin-bottom: 1em;
    color: rgba(0, 0, 0, 0.85);
    overflow-wrap: break-word;
}

@media (max-width: 768px) {
    #components-page-header-demo-content .image {
        flex: 100%;
        margin: 24px 0 0;
    }
}
</style>
