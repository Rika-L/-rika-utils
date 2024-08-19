import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    title: "@rika_/utils",
    description: "个人函数工具库",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'API', link: '/API/all'}
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: '简介',
                items: [
                    {text: '为什么是@rika_/utils?', link: '/why'},
                    {text: 'Get Start', link: '/get-start'}
                ]
            },
            {
                text: 'API',
                items: [
                    {text: 'allAPI', link: '/API/all'},
                    {text: 'string', link: '/API/string'}
                ]
            },
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Rika-L/-rika-utils.git'},
        ]
    }
})
