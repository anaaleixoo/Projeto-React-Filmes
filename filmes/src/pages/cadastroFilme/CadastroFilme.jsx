import Lista from "../../components/lista/Lista"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const CadastroFilme = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro />
                <Lista />
            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;