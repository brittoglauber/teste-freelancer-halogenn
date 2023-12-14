import Image from 'next/image'
import styles from '../components/header.module.scss'
import logo from '../../assets/svg/logo.svg'
import menu from '../../assets/svg/menu.svg'
import selo from '../../assets/svg/selo.svg'

export function Header() {
    return (
        <header className={styles.header}>
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
                    <a href="#">Produtos</a>
                    <a href="#">Laudos</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Certificações</a>
                    <a href="#">Contato</a>
                </div>

                <div>
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
            </nav>

            <div className={styles.selo}>
                <Image 
                    src={selo}
                    alt='selo'
                    width={186}
                    height={186}
                />
            </div>
        </header>
    )
}