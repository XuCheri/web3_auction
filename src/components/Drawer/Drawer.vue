<template>
    <a-drawer width="640" placement="right" :closable="false" :visible="visible">
        <p :style="[pStyle, pStyle2]">卖家信息</p>
        <p :style="pStyle">Personal</p>
        <a-row>
            <a-col :span="12">
                <description-item title="姓名" :content="Author" />
            </a-col>
            <a-col :span="12">
                <description-item
                    title="钱包地址"
                    content="0xA34323DB7bEa9238202c7A866cDA9977CBA8ff6f"
                />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="12">
                <description-item title="城市" :content="City" />
            </a-col>
            <a-col :span="12">
                <description-item title="国籍" :content="Country" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="12">
                <description-item title="描述信息" :content="Reason" />
            </a-col>
        </a-row>
        <a-divider />
        <p :style="pStyle">Company</p>
        <a-row>
            <a-col :span="12">
                <description-item title="Position" content="Programmer" />
            </a-col>
            <a-col :span="12">
                <description-item title="Responsibilities" content="Coding" />
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="12">
                <description-item title="Department" content="XTech" />
            </a-col>
            <a-col :span="12">
                <description-item title="Supervisor">
                    <template #content><a>Lin</a></template>
                </description-item>
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="24">
                <description-item
                    title="Skills"
                    content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                />
            </a-col>
        </a-row>
        <a-divider />
        <p :style="pStyle">Contacts</p>
        <a-row>
            <a-col :span="12">
                <description-item title="Email">
                    <template #content>
                        <a :href="'mailto:' + Email">
                            {{ Email }}
                        </a>
                    </template>
                </description-item>
            </a-col>
            <a-col :span="12">
                <description-item title="Phone Number">
                    <template #content>
                        <a :href="'tel:' + Phone">
                            {{ Phone }}
                        </a>
                    </template>
                </description-item>
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="24">
                <description-item title="Github">
                    <template #content>
                        <a href="https://github.com/vueComponent/ant-design-vue">
                            github.com/vueComponent/ant-design-vue
                        </a>
                    </template>
                </description-item>
            </a-col>
        </a-row>
    </a-drawer>
</template>
<script setup>
import DescriptionItem from "../Description/DescriptionItem.vue"
defineProps(["visible", "Author", "Reason", "City", "Country", "Email", "Phone"])
const pStyle = {
    fontSize: "16px",
    color: "rgba(0,0,0,0.85)",
    lineHeight: "24px",
    display: "block",
    marginBottom: "16px",
}
const pStyle2 = {
    marginBottom: "24px",
}
</script>
