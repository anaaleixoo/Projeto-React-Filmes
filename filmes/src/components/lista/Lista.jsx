import "./Lista.css";
import Editar from "../../assets/img/img/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/img/img/trash-can-regular.svg";
const Lista = () => {
    return(
        <section className="layout_grid listagem">
            <h1>Lista dos Filmes</h1>
                <hr/>

                <div className="tabela">
                    <table>
                        {/* {cabecalho da tabela} */}
                        <thead>
                            {/* { tr = table row} */}
                            <tr className="table_cabecalho">
                                {/* {th => table head} */}
                                <th>Nome</th>
                                <th>Gênero</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        {/* {tbory => corpo da tabela} */}
                        <tbody>
                          <tr className="item_lista">
                            <td data-cell="Nome">Velozes e Furiosos</td>
                            <td data-cell="Gênero">Ação</td>
                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                          </tr>
                        </tbody>
                    </table>
                </div>
        </section>

    )
}

export default Lista;