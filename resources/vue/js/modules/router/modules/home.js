export const home = [
    {
        path: 'index',
        name: 'home',
        meta: {
            title: '首页',
            cache: true,
            tags: true
        },
        component: () => import('../../views/index/index')
    },
    {
        path: 'profile',
        name: 'profile',
        meta: {
            title: '个人中心',
            cache: true,
            tags: true
        },
        component: () => import('../../views/profile/index')
    },
    {
        path: 'authorities/user',
        name: 'authorities.user',
        meta: {
            title: '用户管理',
            cache: true,
            tags: true
        },
        component: () => import('../../views/authorities/user/index')
    },
    {
        path: 'authorities/user/create',
        name: 'authorities.user.create',
        meta: {
            title: '添加用户',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/user/create')
    },
    {
        path: 'authorities/user/update',
        name: 'authorities.user.update',
        meta: {
            title: '更新用户',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/user/update')
    },
    {
        path: 'authorities/role',
        name: 'authorities.role',
        meta: {
            title: '部门管理',
            cache: true,
            tags: true
        },
        component: () => import('../../views/authorities/role/index')
    },{
        path: 'authorities/role/create',
        name: 'authorities.role.create',
        meta: {
            title: '添加部门',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/role/create')
    },{
        path: 'authorities/role/update',
        name: 'authorities.role.update',
        meta: {
            title: '添加部门',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/role/update')
    },
    {
        path: 'authorities/menu',
        name: 'authorities.menu',
        meta: {
            title: '菜单管理',
            cache: true,
            tags: true
        },
        component: () => import('../../views/authorities/menu/index')
    },
    {
        path: 'authorities/menu/create',
        name: 'authorities.menu.create',
        meta: {
            title: '添加菜单',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/menu/create')
    },{
        path: 'authorities/menu/update',
        name: 'authorities.menu.update',
        meta: {
            title: '更新菜单',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/menu/update')
    },
    {
        path: 'authorities/authority',
        name: 'authorities.authority',
        meta: {
            title: '权限管理',
            cache: true,
            tags: true
        },
        component: () => import('../../views/authorities/authority/index')
    },
    {
        path: 'authorities/authority/create',
        name: 'authorities.authority.create',
        meta: {
            title: '添加权限',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/authority/create')
    },
    {
        path: 'authorities/authority/update',
        name: 'authorities.authority.update',
        meta: {
            title: '更新权限',
            cache: false,
            tags: false
        },
        component: () => import('../../views/authorities/authority/update')
    },
    {
        path: 'system/customs/currency',
        name: 'system.customs.currency',
        meta: {
            title: '海关币制代码',
            cache: true,
            tags: true
        },
        component: () => import('../../views/system/customs/currency')
    },
    {
        path: 'system/customs/districts',
        name: 'system.customs.districts',
        meta: {
            title: '海关关区代码',
            cache: true,
            tags: true
        },
        component: () => import('../../views/system/customs/districts')
    },
    {
        path: 'system/customs/hscode',
        name: 'system.customs.hscode',
        meta: {
            title: '10位海关编码',
            cache: true,
            tags: true
        },
        component: () => import('../../views/system/customs/hscode')
    },
    {
        path: 'system/customs/unit',
        name: 'system.customs.unit',
        meta: {
            title: '海关计量单位',
            cache: true,
            tags: true
        },
        component: () => import('../../views/system/customs/unit')
    },
    {
        path: 'system/customs/country',
        name: 'system.customs.country',
        meta: {
            title: '海关国别代码',
            cache: true,
            tags: true
        },
        component: () => import('../../views/system/customs/country')
    },
    {
        path: 'product/lists/index',
        name: 'product.lists.index',
        meta: {
            title: '商品列表',
            cache: true,
            tags: true
        },
        component: () => import('../../views/product/lists/index')
    },
    {
        path: 'product/lists/create',
        name: 'product.lists.create',
        meta: {
            title: '添加商品',
            cache: false,
            tags: false
        },
        component: () => import('../../views/product/lists/create')
    },
    {
        path: 'product/lists/update',
        name: 'product.lists.update',
        meta: {
            title: '修改商品',
            cache: false,
            tags: false
        },
        component: () => import('../../views/product/lists/update')
    },{
        path: 'system/warehouses/index',
        name: 'system.warehouses.index',
        meta: {
            title: '仓库管理',
            cache: false,
            tags: false
        },
        component: () => import('../../views/system/warehouses/index')
    },
];