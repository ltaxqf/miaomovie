export default{
    path:'/movie',
    component: () => import('@/views/movie'),
    children : [
        {
            path:'city',
            component:()=>import('@/components/city'),
        },
        {
            path:'comingsoon',
            component:()=>import('@/components/comingsoon'),
        },
        {
            path:'search',
            component:()=>import('@/components/search'),
        },
        {
            path:'nowplaying',
            component:()=>import('@/components/nowplaying'),
        },
        {
            path:'/movie',
            redirect:'/movie/nowplaying'
        }
    ]
}