import useGeneral from "store/general.store"
import { IModalFormType } from "@domain/api/generalApi"
import { router } from "App"

/**
 * config framer motion main page
 * @returns 
 */
export const usePageAnimation = () => {

    const pathname = router.history.location.pathname

    return {
        key: pathname, initial: "initial", animate: "in",
        variants: {
            initial: {
                opacity: 0
            },
            in: {
                opacity: 1
            },
            out: {
                opacity: 0
            }
        },
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.3
        }
    }
}

export const useSetPanelModalType = () => {
    const setModalInformactionGeneral = useGeneral((state) => (state.setModalInformaction))

    const setModalInformaction = (data?: {type: IModalFormType, content: any}[]) => {
        setModalInformactionGeneral(data)
    }

    return { setModalInformaction }
}