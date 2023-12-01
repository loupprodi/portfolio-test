import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import styles from "./Projetos.module.css";
// import { Pagination } from "../../components/Pagination";

//https://api.github.com/users/loupprodi/repos

const LIMIT = 12

export const Projetos = () => {
    const [ repositories, setRepositories ] = useState([])
    // const [ offset, setOffset] = useState(0)

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch(`https://api.github.com/users/loupprodi/repos?page=1&per_page=${LIMIT}`)
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.listProjects}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
            {/* { repositories.length ?? (
                <Pagination limit={LIMIT} totalItens={repositories.length} offset={offset} setOffset={setOffset}/>
            )} */}
        </section>
    )
};
