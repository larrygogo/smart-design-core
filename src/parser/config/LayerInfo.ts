const layerInfo: LayerObject = {
    "背景": {
        name: "background_pure",
        zIndex: 1,
        type: 'image',
        category: "background"
    },
    "背景纹理": {
        name: "background_texture",
        zIndex: 2,
        type: 'image',
        category: "background"
    },
    "背景修饰": {
        name: "background_decoration",
        zIndex: 3,
        type: 'image',
        category: "background"
    },
    "贴边修饰": {
        name: "decoration_hem",
        zIndex: 4,
        type: 'image',
        category: "background"
    },
    "碎片修饰": {
        name: "decoration_fragment",
        zIndex: 5,
        type: 'image',
        category: "background"
    },
    "主体区域修饰": {
        name: "decoration_region_body",
        zIndex: 6,
        type: 'image',
        category: "body"
    },
    "主体": {
        name: "body",
        zIndex: 7,
        type: 'image',
        category: "body"
    },
    "主体修饰": {
        name: "decoration_body",
        zIndex: 8,
        type: 'image',
        category: "body"
    },

    "文案区域修饰": {
        name: "decoration_region_text",
        zIndex: 9,
        type: 'image',
        category: "text"
    },

    "行动点修饰": {
        name: "decoration_text_action",
        zIndex: 10,
        type: "image",
        category: "text"
    },

    "行动点文案": {
        name: "text_action",
        zIndex: 11,
        type: "text",
        category: "text"
    },

    "副文案": {
        name: "text_sub",
        zIndex: 12,
        type: "text",
        category: "text"
    },

    "主文案": {
        name: "text_main",
        zIndex: 13,
        type: "text",
        category: "text"
    },
}

export default layerInfo