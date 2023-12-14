import Image from "next/image";
import styles from "../components/painel.module.scss"
import tubo from "../../assets/svg/tubo.svg";
import bottle from "../../assets/svg/bottle.svg"

export default function Panel() {

    return (
        <div className={styles.box}>
            <section className={styles.container}>
                <div className={styles.title}>Produto</div>

                <div className={styles.subtitle}>
                    <Image
                        width={32}
                        height={32}
                        src={tubo}
                        alt="Tubo de ensaio"
                    />
                    <p>Vidrarias e Equipamentos</p>
                </div>
            </section>

            <section className={styles.isPrincipal}>
                <div className={styles.title}>Químicos</div>

                <div className={styles.subtitle}>
                    <div className="repeated-icons">
                        <Image
                        width={16}
                        height={36}
                        src={bottle}
                        alt="Garrafa"
                        />
                        <Image
                            width={9}
                            height={20}
                            src={bottle}
                            alt="Garrafa"
                        />
                    </div>
                    <p>Materiais <br /> Químicos</p>
                </div>
            </section>

            <section className={styles.container}>
                <div className={styles.title}>Laboratórios</div>
                <div className={styles.subtitle}>
                    <p>Ferramentas e utensílios</p>
                </div>
            </section>
        </div>
    )
}