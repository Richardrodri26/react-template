import { MenuList } from "@components/styled";
import { MenuButton, MenuItem } from "@szhsin/react-menu";
import { Link, useNavigate } from "@tanstack/react-router";
import { useShallowGeneralStore } from "store/general.store";
import { LiaUserSolid } from "react-icons/lia"
import { IoIosLogOut } from "react-icons/io"
import useNavMenu, { useNavigationOptions, useShallowNavMenuStore } from "./nav.store";
import { MenuNavWrapper } from "@common/MenuNavigation/styles/navMenuContainer.style";
import styles from "./nav.module.css"
import { NavBarMenuIconsController } from "./controller/iconController";
import { MenuSubModule, SmallMenuItem } from "./Elements";


const MenuIcon = () => {
    const changeNavMenuStatus = useNavMenu((state) => state.changeNavMenuStatus)
    return (<img src="/nav/arrowMenu.svg" onClick={changeNavMenuStatus} />)
  }
  

export const NavBarMenu = () => {
    // hooks
    const { handleInput } = useNavigationOptions()
    const [statusMenu, setNavMenuSubModule, _, changeSubModuleStatus, filterMenuOptions] = useShallowNavMenuStore((state) => ([state.navMenuStatus, state.setNavMenuSubModule, state.changeNavMenuStatus, state.changeSubModuleStatus, state.filterMenuOptions]))

    return (
      <div className="flex">
        <MenuNavWrapper closed={!statusMenu} animate={!statusMenu ? "closed" : "open"} initial="closed">
          <div onClick={() => { setNavMenuSubModule() }} className={styles.nav__menu__header + " " + ""} menu-open={`${statusMenu}`}>
            <MenuIcon />
            <input onChange={handleInput} className="rounded-md" type="text" placeholder="Buscar modulo" />
          </div>
  
          <div className={styles.nav__menu__content}>
            {
              statusMenu && (
                <div className="flex flex-col gap-0 ">
                  {
                    filterMenuOptions?.map((menuOption: any) => {
                      return (
                        <div className="px-3 py-1 group" key={menuOption.key}>
                          {
                            (menuOption.children) ? (
                              <div className="flex items-center gap-1 group-hover:text-primary" onClick={() => { setNavMenuSubModule(menuOption); changeSubModuleStatus() }}>{NavBarMenuIconsController[`${menuOption.key}`]} {menuOption.label}</div>
                            ) : (
                              <Link
                                onClick={() => {
                                  setNavMenuSubModule();
                                  changeSubModuleStatus();
                                }}
                                activeProps={{
                                    className: "text-primary bg-primary-opacity/40"
                                }}
                                className={`flex items-center gap-2 group-hover:text-white group-hover:bg-primary p-2 rounded-lg transition-all`} to={menuOption.path} >{NavBarMenuIconsController[`${menuOption.key}`]} {menuOption.label}</Link>
                            )
                          }
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
  
            {
              !statusMenu && (
                filterMenuOptions?.map((menuOption) => {
                  return (
                    <SmallMenuItem menuOption={menuOption} key={menuOption.label} />
                  )
                })
              )
            }
  
          </div>
          {statusMenu ? (<p className="text-xs text-slate-600 absolute bottom-0 left-1/2 -translate-x-1/2 italic">CS3 Inc. - V0.0.3</p>) : (null)}
        </MenuNavWrapper>
  
        <MenuSubModule />
  
  
  
      </div>
    )
  }

export const NavBarTop = () => {
    const [userInfo, logout] = useShallowGeneralStore((state) => ([state.userInfo, state.logout]))
    // const navigate = useNavigate()
    const navigate = useNavigate()
  
    return (
      <header className="p-4 shadow-md relative min-h-[92px]">
        <div className="mx-auto">
          <div className="flex justify-between items-center my-auto">
            {/* <NavLink to={routerPaths.admin.path} className="text-primary text-xl font-semibold px-6 hover:underline">Censo</NavLink> */}
            <Link to="/test">Template</Link>
  
            <div>
              <MenuList gap={6} boundingBoxPadding="10" direction="bottom" transition menuButton={
                <MenuButton className="hover:shadow-md hover:bg-slate-100 px-6 py-2 rounded-xl transition-all">
                  <div>
                    <p className="flex items-center gap-1"><LiaUserSolid /> {userInfo?.firstname} {userInfo?.lastname}</p>
                    <p className="text-sm opacity-80">{userInfo?.email}</p>
                  </div>
                </MenuButton>
              }>
                <>
                  <MenuItem data-danger onClick={() => { logout(); navigate({ to: "/" }) }}>Cerrar Sesión <IoIosLogOut /></MenuItem>
                </>
              </MenuList>
            </div>
  
          </div>
        </div>
      </header>
    )
  }