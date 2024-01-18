import { INavMenuOptions } from "@components/nav/nav.store";
import { router } from "App";


/*------------------------------  Functions ------------------------------------------*/


const appRoutes = {
    test: { path: "/test", label: "Ruta de prueba 1", permission: ["User"] },
    test2: { path: "/test2", label: "Ruta de prueba 12", permission: ["User"] }
}


/**
 * Function that recursively return INavMenuOptions[]
 * options for aside navBar
 * @param children 
 * @returns 
 */
export const getMenuOptions = (children = appRoutes) => {
    // const routerApp = router

    // console.log('routerApp', routerApp)

    const adminRouteEntries = Object.entries(children)

    const menuOptions: INavMenuOptions[] = adminRouteEntries.map((routeEntry) => {
        const [Key, Value] = routeEntry as any
        let children;

        if(Value.children) {
            children = getMenuOptions(Value.children)
        }

        return ({
            key: Key,
            label: Value.label,
            path: Value.path,
            permission: Value.permission,
            children: children
        })

    })
    
    return menuOptions
}