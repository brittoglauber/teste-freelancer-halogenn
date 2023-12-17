import styles from "./produtosInfo.module.scss";
import icon1 from "./assets/svg/icon1.svg";
import icon2 from "./assets/svg/icon2.svg";
import icon3 from "./assets/svg/icon3.svg";
import icon4 from "./assets/svg/icon4.svg";
import icon5 from "./assets/svg/icon5.svg";
import icon6 from "./assets/svg/icon6.svg";
import icon7 from "./assets/svg/icon7.svg";
import Image from "next/image";

export default function ProductsInfo() {
    return (
        <a className={styles.container}>

            <table>
                <tbody>
                    <tr>
                        <td className={styles.title1} rowSpan={3}>
                            <p>Catálogo completo de</p>
                            <p>itens para você</p>
                        </td>
                        <td className={styles.title2} colSpan={2}>
                            <p><b>Laboratório</b></p>
                        </td>
                        <td className={styles.title2} colSpan={2}>
                            <p><b>Utensílios</b></p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a href="#">
                                <Image
                                    src={icon1}
                                    alt={"icone"}
                                    width={20}
                                    height={20}
                                />
                                Equipamentos      
                            </a>  
                        </td>

                        <td>
                            <a href="#">
                                <Image
                                    src={icon2}
                                    alt={"icone"}
                                    width={20}
                                    height={20}
                                />
                                Termômetro
                            </a>
                        </td>
                        <td>
                            <a href="#">
                                <Image
                                    src={icon4}
                                    alt={"icone"}
                                    width={20}
                                    height={20}
                                />
                                Inox e Ferragens
                            </a>
                        </td>
                        <td>
                            <a href="#">
                                <Image
                                src={icon5}
                                alt={"icone"}
                                width={20}
                                height={20}
                                />
                                Vidrarias
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td className={styles.tr3td1}>
                           <a href="#">
                            <Image
                                    src={icon3}
                                    alt={"icone"}
                                    width={20}
                                    height={20}
                                />
                                Acessórios
                           </a>
                        </td>
                        
                        <td>&nbsp;</td>

                        <td>
                            <a href="#">
                                <Image
                                    src={icon6}
                                    alt={"icone"}
                                    width={20}
                                    height={20}
                                />
                                Plásticos
                            </a>
                        </td>

                        <td>
                            <a href="#">
                                <Image
                                    src={icon7}
                                    alt={"icone"}
                                    width={20}
                                    height={20}
                                />
                                Porcelanas
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </a>
    )
}
