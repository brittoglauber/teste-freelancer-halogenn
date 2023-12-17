import Image from "next/image";
import styles from "../components/painel.module.scss";
import tubo from "../../assets/svg/tubo.svg";
import bottle from "../../assets/svg/bottle.svg";
import frame from "../../assets/svg/frame.svg";
import tool from "../../assets/svg/tool.svg";
import { connect } from "react-redux";

interface PanelProps {
    showPanel: boolean;
}

export function Panel({ showPanel }: PanelProps) {

    return (
        <div style={{ display: showPanel ? 'flex' : 'none' }} className={styles.box}>
            <section className={styles.container}>
                <div className={styles.title}>Produto</div>

                <div className={styles.subtitle}>
                    <div className={styles.sub}>
                        <Image
                            width={32}
                            height={32}
                            src={tubo}
                            alt="Tubo de ensaio"
                        />
                        <p>Vidrarias e Equipamentos</p>
                    </div>

                    <Image
                        width={100}
                        height={69}
                        src={frame}
                        alt="Frames"
                        className={styles.frames}
                    />
                </div>
            </section>

            <section className={styles.isPrincipal}>
                <div className={styles.title}>Químicos</div>

                <div className={styles.subtitle}>
                    <div>
                        <div className={styles.sub}>
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
                            <p>Materiais <br /> Químicos</p>
                        </div>
                    </div>
                    <Image
                        width={100}
                        height={69}
                        src={frame}
                        alt="Frames"
                        className={styles.frames}
                    />
                    
                </div>
            </section>

            <section className={styles.container}>
                <div className={styles.title}>Laboratórios</div>
                <div className={styles.subtitle}>

                    <div className={styles.sub}>
                        <Image
                            width={32}
                            height={36}
                            src={tool}
                            alt="Ferramenta"
                        />
                        <p>Ferramentas e utensílios</p>
                    </div>
                    

                    <Image
                        width={100}
                        height={69}
                        src={frame}
                        alt="Frames"
                        className={styles.frames}
                    />
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
      showPanel: state.panel.showPanel, // Supondo que seu estado no Redux seja assim
    };
  };

export default connect(mapStateToProps)(Panel);