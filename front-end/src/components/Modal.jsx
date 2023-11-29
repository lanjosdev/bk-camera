import { ModalBackground } from "./modal-style";

export function Modal({ closeModal }) {
    return(
        <ModalBackground onClick={() => closeModal(false)}>

            <div className="modal-container">
                <button onClick={() => closeModal(false)}>X</button>

                <h2>Termos de Compromisso:</h2>

                <p>Ao participar desta campanha você aceita ceder o uso de sua imagem, bem como, avaliar ficticiamente o nível de sua ressaca, declarando o consentimento com a participação no Projeto, bem como, que suas imagens não serão utilizadas para outros fins e que o uso de bebidas alcoólicas ocorreu porque sou maior de 18 anos.<br/> <br />
                Ao compartilhar sua imagem e identidade visual, você concorda com nossa Política de Privacidade e autoriza a utilização pelo Burger King e do Wepapp Hangover BK, das imagens e dados, exclusivamente, para fins deste Projeto.<br/><br />
                É importante informar que as imagens não serão compartilhados com empresas parceiras ou terceiros sem o seu consentimento, sendo mantidos em arquivo protegido apenas pelo tempo necessário ao projeto e para a finalidade descrita. Os seus dados pessoais NÃO serão colocados em domínio público, usados para fins de marketing direto, perfis automatizados, vendidos a terceiro, nem usados para quaisquer outros fins não declarados aqui.<br/><br />
                Essas informações são confidenciais. Caso tenha dúvidas sobre o tratamento de seus dados pessoais por favor contate:<br/> https://bit.ly/formulario_de_privacidade ou consulte nossa Política de Privacidade disponível em https://burgerking.com.br/politicas-de-privacidade.<br/><br />
                O BK se compromete a excluir os presentes dados, imagens e vídeos, retificá-los, ou fornecê-los ao titular sempre que instada a fazê-lo, nos exatos termos constantes na LGPD.
                </p>

            </div>

        </ModalBackground>
    );
}
