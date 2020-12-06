import Home from "../views/home/index";
import Computed1 from "../views/computed/Computed1";
import Computed2 from "../views/computed/Computed2";
import Watch1 from "../views/watch/Watch1";
import Directive1 from "../views/directive/index";
import Mixins from "../views/mixins/index";
import ProvideInject from "../views/provide-inject/index";
import Form from "../views/form/index";
import VModel from "../views/v-model/index";

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/computed-1',
        name: 'Computed1',
        component: Computed1,
        meta: {
            title: 'computed 案例1'
        }
    },
    {
        path: '/computed-2',
        name: 'Computed2',
        component: Computed2,
        meta: {
            title: 'computed 案例2'
        }
    },
    {
        path: '/watch-1',
        name: 'watch1',
        component: Watch1,
        meta: {
            title: 'watch 案例1'
        }
    },
    {
        path: '/directive-1',
        name: 'directive1',
        component: Directive1,
        meta: {
            title: 'directive 案例1'
        }
    },
    {
        path: '/mixins-1',
        name: 'mixins',
        component: Mixins,
        meta: {
            title: 'mixins 案例'
        }
    },
    {
        path: '/provide-inject',
        name: 'provide-inject',
        component: ProvideInject,
        meta: {
            title: 'provide & inject 案例'
        }
    },
    {
        path: '/form',
        name: 'form',
        component: Form,
        meta: {
            title: 'form 案例'
        }
    },
    {
        path: '/v-model',
        name: 'v-model',
        component: VModel,
        meta: {
            title: 'v-model 案例'
        }
    }
]