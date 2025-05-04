import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Section.module.css";
import foto1 from "../assets/296288-linked-content-post-satelite-energia-renovavel-no-brasil-veja-a-situacao-atual-e-projecoes-futuras.jpg";
import foto2 from "../assets/tipos-de-energia-renovavel-e1633260980259.jpg";
import Cards from './card';
import Accordion from './accordion';
import Button from './button';


export default function Section() {
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  }

  const [showInfo_2, setShowInfo_2] = useState(false);
  const toggleInfo_2 = () => {
    setShowInfo_2(!showInfo_2);
  }

  const materials = [
    {
      id: "collapseSodium",
      title: "Sódio (baterias de íon-sódio)",
      content: (
        <>
          <strong>Prós:</strong> Sódio é abundante, barato e mais distribuído no planeta que o lítio.<br />
          <strong>Contras:</strong> Ainda tem densidade energética menor que o lítio.<br />
          <strong>Impacto ambiental:</strong> Muito menor, pois a extração do sódio é menos agressiva.
        </>
      ),
    },
    {
      id: "collapseAluminum",
      title: "Alumínio",
      content: (
        <>
          <strong>Prós:</strong> Muito abundante e reciclável.<br />
          <strong>Contras:</strong> Ainda em estágio experimental.<br />
          <strong>Impacto ambiental:</strong> Produção intensiva em energia, mas reciclável.
        </>
      ),
    },
    {
      id: "collapseZinc",
      title: "Zinco",
      content: (
        <>
          <strong>Prós:</strong> Barato, não tóxico, reciclável.<br />
          <strong>Contras:</strong> Menor densidade energética.<br />
          <strong>Impacto ambiental:</strong> Mais fácil de reciclar que lítio e cobalto.
        </>
      ),
    },
    {
      id: "collapseGraphene",
      title: "Grafeno e Carbono",
      content: (
        <>
          <strong>Prós:</strong> Leves, condutores, origem renovável.<br />
          <strong>Contras:</strong> Difíceis de produzir em larga escala.<br />
          <strong>Impacto ambiental:</strong> Muito baixo.
        </>
      ),
    },
    {
      id: "collapseOrganic",
      title: "Baterias Orgânicas",
      content: (
        <>
          <strong>Prós:</strong> Feitas de biomassa, biodegradáveis.<br />
          <strong>Contras:</strong> <br />
          <strong>Impacto ambiental:</strong> 
        </>
      ),
    },
  ];

  return (
    <div id="inicio">
      <br /> <br /> <br /> <br />
      <section className={styles.section}>
        <div className="row">
          <div className="col-md-8 col-sm-12 text-start">
            <div>
              <h1 className={styles.welcome} id="sobre">
                Bem-vindo à Vitaliant, onde a inovação encontra a sustentabilidade.
              </h1>
              <br />
              <h2 className={styles.title}>Sobre a Vitaliant</h2>
              <p className={styles.text}>
                A Vitaliant é uma empresa inovadora dedicada ao desenvolvimento de soluções em baterias e energias renováveis. Com foco na sustentabilidade, buscamos oferecer tecnologias que promovam a eficiência energética e contribuam para um futuro mais verde.
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Missão:</strong> Desenvolver soluções inovadoras em baterias sustentáveis e liderar a transição para um futuro sustentável por meio de soluções de armazenamento de energia que utilizam fontes renováveis.
                </li>
                <li className={styles.listItem}>
                  <strong>Visão:</strong> Ser reconhecido como uma referência em inovação no setor de baterias e energias renováveis, promovendo práticas que respeitem o meio ambiente e as comunidades.
                </li>
                <li className={styles.listItem}>
                  <strong>Valores:</strong> Sustentabilidade, Inovação e Compromisso com o cliente.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 text-end">
            <div className={styles.imageContainer}>
              <img
                src={foto1}
                alt="foto1"
                className={`${styles.image} img-fluid rounded-pill border`}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center mt-4">
            <img
              src={foto2}
              alt="foto2"
              className={`${styles.image} img-fluid rounded-pill border`}

            />
          </div>
        </div>

        <br /> <br />
        <br />

        {/* Problemas e desafios */}
        <h2 className={styles.subtitle}>Alguns problemas e desafios atuais:</h2>
        <p className={styles.text}>
          <strong>1. Custo Elevado:</strong> Baterias de íon-lítio, por exemplo, ainda são caras, o que encarece carros elétricos e sistemas de energia doméstica.
        </p>
        <p className={styles.text}>
          <strong>2. Vida útil limitada:</strong> Após certo número de ciclos de carga/descarga, o desempenho diminui, juntamente com a obsolescência programada.
        </p>
        <p className={styles.text}>
          <strong>3. Extração de Materiais-Primas:</strong> Mineração de lítio, cobalto e níquel pode causar impactos ambientais e sociais significativos.
        </p>
        {/* Botão para mostrar informações */}
        <div className="text-center" id="servicos">
          <Button
            text={showInfo ? 'Mostrar menos' : 'O que nós fazemos para mudar essa situação ?'}
            onClick={toggleInfo}
            className="btn-success"
          />
        </div>

        {/* Informações que aparecem ao clicar */}
        <div id="servicos" className="mt-4">
          {showInfo && (
            <>
              <h2 className={styles.title}>Nossos Serviços</h2>
              <p className={styles.text}>
                Oferecemos uma ampla gama de serviços, incluindo consultoria em energias renováveis, desenvolvimento de projetos de baterias sustentáveis e soluções personalizadas para atender às necessidades específicas de nossos clientes.
              </p>

              {/* Adicionando os Cards */}
              <Cards />

              <h2 className={styles.subtitle}>Batérias Renováveis:</h2>
              <h4 className={styles.context}>Soluções Oferecidas Pelas Baterias Renováveis:</h4>

              {/* Accordion */}
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Armazenamento de Energia Limpa
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Permite guardar energia gerada por fontes renováveis para uso posterior, o que é essencial em dias nublados ou sem vento.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Redução de Emissões de Carbono
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Substituem geradores a diesel e outras fontes poluentes em residências, indústrias e veículos.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Autossuficiência Energética
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Consumidores podem gerar e armazenar sua própria energia, reduzindo a dependência da rede elétrica.
                    </div>
                  </div>
                </div>
                <br />

                <div className="text-center" >
                  <Button
                    text={showInfo_2 ? 'Mostrar menos' : 'Quer saber que materiais utilizamos na Vitaliant ?'}
                    onClick={toggleInfo_2}
                    className="btn-success"
                  />
                </div>
                <div className="mt-4">
                  {showInfo_2 && (
                    <>
                      <h2 className={styles.title}>Materiais Utilizados</h2>
                      <Accordion items={materials} parentId="accordionMaterials" />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
