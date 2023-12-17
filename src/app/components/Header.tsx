'use client'

import Image from 'next/image'
import styles from '../components/header.module.scss';
import closeMenu from '../../assets/svg/closeMenu.svg';
import logoMobile from '../../assets/svg/logoMobile.svg';
import logo from '../../assets/svg/logo.svg';
import arrow from '../../assets/svg/arrow.svg';
import menu from '../../assets/svg/menu.svg';
import selo from '../../assets/svg/selo.svg';
import hamburguer from '../../assets/svg/hamburguer.svg';
import comp from '../../assets/svg/componenteHeaderMobile.svg';
import { useState } from 'react';
import ProductsInfo from '../components/productInfo/ProductsInfo';
import { useDispatch } from 'react-redux';

export function  Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showProductsInfo, setShowProductsInfo] = useState(false);
    
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleMouseEnter = () => {
        setShowProductsInfo(true);
        dispatch({ type: 'TOGGLE_PANEL' }); // Atualiza o estado do painel no Redux
      };
    
      const handleMouseLeave = () => {
        setShowProductsInfo(false);
        dispatch({ type: 'TOGGLE_PANEL' }); // Atualiza o estado do painel no Redux
      };

    return (
        <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
            <nav>
                <div className={styles.navbarLeft}>
                    <Image 
                        src={logo}
                        alt='Logo'
                        width={160}
                        height={35}
                        className={styles.logo}
                    />
            
                    <a href="#">Início</a> 
                    <a 
                        href="#"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Produtos
                        <Image 
                            src={arrow}
                            alt='Logo'
                            width={12}
                            height={12}
                            className={styles.arrowIcon}
                        />
                    </a>
                    <a href="#">Laudos</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Certificações</a>
                    <a href="#">Contato</a>
 
                </div>

                <div className={styles.budgetButton}>
                    <button>
                        <Image 
                            src={menu}
                            alt='Ícone menu hamburguer'
                            width={15}
                            height={15}
                            className={styles.iconeMenu}
                        />
                        Orçamento
                    </button>
                </div>

                {menuOpen ? (
                    <div className={styles.menuHamburger}>
                        
                        <button onClick={toggleMenu}>
                            <Image
                                width={20}
                                height={20}
                                alt='fechar menu'
                                src={closeMenu}
                            />
                        </button>

                    </div>
                ) : (
                    <div className={styles.menuIcon} >
                         <Image 
                            src={logoMobile}
                            alt='Logo'
                            width={160}
                            height={35}
                            className={styles.logo}
                        />
                        
                        <Image 
                            onClick={toggleMenu}
                            src={hamburguer}
                            alt='Ícone menu hamburguer'
                            width={30}
                            height={30}
                            className={styles.iconeMenu}
                        />
                    </div>
                )}
            </nav>

            {showProductsInfo && (
                <ProductsInfo />
            )}

            <div className={styles.subMobile}>
                <p>Qualidade e expertise em produtos <span>químicos e acessórios</span></p>
            </div>
            
            <div className={styles.textMobile}>
                <p>Estamos preparados para te entender e atender da melhor forma para suprir todas 
                as suas demandas em químicos e similares.</p>
            </div>
 

            <div className={styles.selo}>
                <Image 
                    src={selo}
                    alt='selo'
                    width={186}
                    height={186}
                />
            </div>

            <div className={styles.comp}>
                <Image
                    width={500}
                    height={300}
                    src={comp}
                    alt="comp"
                />
            </div>

        </header>

        
    
        

    )
}