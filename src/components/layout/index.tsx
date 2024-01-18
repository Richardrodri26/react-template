import { motion, Variants } from 'framer-motion';
import Lottie from 'lottie-react';
import useGeneral from 'store/general.store';
import { NavBarMenu, NavBarTop } from '@components/nav';
import styles from './layout.module.css'
import LoadingAnimation from '@utils/animation/lotties/loading-balls.json'
import { Outlet } from '@tanstack/react-router';
import { usePageAnimation } from '@hooks/useNavigate';
import { router } from 'App';

/************************** Config **********************************************/

const loadingTextVariants: Variants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1,
    },
  },
};

export const PrincipalLayout = () => {
  // hooks
  const homeLoading = useGeneral(state => state.homeLoading);
  const mainProps = usePageAnimation();


  return (
    <div className='relative'>
      <NavBarTop />

      {homeLoading ? (
        <>
          <dialog className='absolute top-0 left-0 h-full w-full bg-white/60 flex flex-col justify-center items-center z-50'>
            <Lottie className={styles.general__loading} animationData={LoadingAnimation} loop />
            <motion.p variants={loadingTextVariants} initial='initial' animate='animate' exit='exite' className='text-2xl text-primary'>
              Cargando...
            </motion.p>
          </dialog>
        </>
      ) : null}

      <main style={{ height: 'calc(100vh - 92px)' }} className='flex gap-[18px] -z-10 bg-primary-opacity/40'>
        <NavBarMenu />
        <motion.section
          {...mainProps}
          className='flex flex-col w-screen overflow-x-auto gap-2 pt-0 px-2.5 pb-2.5'
          // style={{
          //     display: "flex", width: "100vw", flexDirection: "column",
          //     overflowX: "auto", gap: "0.6rem", padding: "px 10px 10px 10px"
          // }}
        >
          <Outlet />
        </motion.section>
      </main>
    </div>
  );
};
