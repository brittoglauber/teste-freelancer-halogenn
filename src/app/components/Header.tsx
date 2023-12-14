'use client'

import Image from 'next/image'
import styles from '../components/header.module.scss';
import logo from '../../assets/svg/logo.svg';
import logoMobile from '../../assets/svg/logoMobile.svg';
import menu from '../../assets/svg/menu.svg';
import selo from '../../assets/svg/selo.svg';
import hamburguer from '../../assets/svg/hamburguer.svg';
import comp from '../../assets/svg/componenteHeaderMobile.svg';
import { useState } from 'react';

export function  Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
            <nav>
                <div className={styles.navbarLeft}>
                    <Image 
                        src={logoMobile}
                        alt='Logo'
                        width={160}
                        height={35}
                        className={styles.logo}
                    />
            
                    <a href="#">Início</a> 
                    <a href="#">Produtos</a>
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
                        {/* Aqui está o menu hamburguer quando a tela for menor que 960px */}
                        {/* Ícone do menu para abrir/fechar o menu */}
                        <button onClick={toggleMenu}>
                            Fechar Menu
                        </button>

                        {/* Adicione os links do menu hamburguer aqui */}
                        <div>
                            <a href="#">Início</a> 
                            <a href="#">Produtos</a>
                            <a href="#">Laudos</a>
                            <a href="#">Sobre nós</a>
                            <a href="#">Certificações</a>
                            <a href="#">Contato</a>
                        </div>
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